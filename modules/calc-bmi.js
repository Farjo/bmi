export { calcBMI as default }

/**
 * Calculate BMI from metric height and weight
 * @param {Number} height Height in metres
 * @param {Number} weight Weight in KG
 * @returns BMI figure
 */
function calcBMI(height, weight) {
	return Number(height) && Number(weight) ? weight / Math.pow(height, 2) : 0
}
