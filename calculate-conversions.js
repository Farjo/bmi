export default calculateConversions
import { yardsToMetres, metresToYards, poundsToKg, kgToPounds } from './modules/conversions.js'
import poundsToStones from './modules/pounds-to-stones.js'

/**
 * 
 * @param {string} changedField 
 * @param {object} fields 
 * @returns {object}
 */
function calculateConversions(changedField, fields) {
  const { kg, stone, pound, metres, feet, inches } = fields
  if (changedField === 'kg') {
    const lbs = Math.round(kgToPounds(kg))
    return poundsToStones(lbs)
  }
  if (changedField === 'stone' || changedField === 'pound') {
    const kg = poundsToKg(stone * 14 + pound).toFixed(1)
    return { kg }
  }
  if (changedField === 'metres') {
    const feetDecimal = metresToYards(metres) * 3
    const feet = Math.floor(feetDecimal)
    const inches = Math.floor((feetDecimal - feet) * 12)
    return { feet, inches }
  }
  if (['feet', 'inches'].includes(changedField)) {
    const yards = (feet / 3) + (inches / 36)
    const metres = yardsToMetres(yards).toFixed(2)
    return { metres }
  }
}
