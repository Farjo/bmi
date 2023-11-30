export default roundImperial
import { isNonEmptyString, isNumber, isPlainObject } from "./is-types.js"

/**
 * Returns function to round a pair of non-decimal units
 * @param {string} major Name of larger unit
 * @param {string} minor Name of smaller unit
 * @param {number} units Number of smaller units in larger unit
 * @returns function to round those units
 */
function roundImperial(major, minor, units) {
  if (!(isNonEmptyString(major) && isNonEmptyString(minor) && isNumber(units)))
    throw wrongType
  return function (argObj = {}, places = 0) {
    if (!(isPlainObject(argObj) && isNumber(places)))
      throw wrongType
    const retObj = {}
    retObj[major] = argObj[major] ?? 0
    retObj[minor] = argObj[minor] ?? 0
    retObj[minor] = +retObj[minor].toFixed(places)
    if (retObj[minor] >= units) {
      retObj[major] += Math.trunc(retObj[minor] / units)
      retObj[minor] = retObj[minor] % units
    }
    return retObj
  }
}

const wrongType = TypeError('Wrong type')
