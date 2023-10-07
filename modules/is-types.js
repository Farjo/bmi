/**
 * 
 * @param {*} value - The value to test
 * @returns {boolean}
 */
export function isNumber(value) {
  return typeof value === 'number' && !isNaN(value)
}

/**
 * 
 * @param {*} value - The value to test
 * @returns {boolean}
 */
export function isBigInt(value) {
  return typeof value === 'bigint'
}

/**
 * 
 * @param {*} value - The value to test
 * @returns {boolean}
 */
export function isArray(value) {
  // return typeof value === "object" && value instanceof Array
  return Array.isArray(value)
}

/**
 * 
 * @param {*} value - The value to test
 * @returns {boolean}
 */
export function isPopulatedArray(value) {
  return typeof value === "object" && value instanceof Array && value.length
}

/**
 * 
 * @param {*} value - The value to test
 * @returns {boolean}
 */
export function isFiniteNumber(value) {
  return typeof value === 'number' && isFinite(value)
}

/**
 * 
 * @param {*} value - The value to test
 * @returns {boolean}
 */
export function isNan(value) {
  // global isNaN returns true for values
  // that cannot be converted into numbers
  // e.g. isNaN('a') returns true
  // Number.isNaN(value) returns true only
  // if value is NaN
  // x != x <- will also be seen
  return Number.isNaN(value)
}

/**
 * 
 * @param {*} value - The value to test
 * @returns {boolean}
 */
export function isNonEmptyString(value) {
  // && returns RHS if LHS is truthy, therefore ensure that RHS is boolean
  return typeof value === 'string' && value.trim().length > 0
}

/**
 * 
 * @param {*} value - The value to test
 * @returns {boolean}
 */
export function isNull(value) {
  // if value undefined 'value === null' returns error
  return typeof value === "object" && value === null
}

/**
 * 
 * @param {*} value - The value to test
 * @returns {boolean}
 */
export function isPlainObject(value) {
  // true if obj is an object and not instansted
  return value instanceof Object && Object.getPrototypeOf(value) === Object.prototype
}

/**
 * 
 * @param {*} value - The value to test
 * @returns {boolean}
 */
export function isUndefined(value) {
  return typeof value === 'undefined'
}

/**
 * 
 * @param {*} value - The value to test
 * @returns {boolean}
 */
export function isRegexvalue(value) {
  return value instanceof RegExp
}

/**
 * 
 * @param {*} value - The value to test
 * @returns {boolean}
 */
export function isIterable(value) {
  return value !== null &&
    typeof value[Symbol.iterator] === 'function'
}

/**
 * 
 * @param {*} value - The value to test
 * @returns {boolean}
 */
export function isHTMLElement(value) {
  return value instanceof HTMLElement
}
