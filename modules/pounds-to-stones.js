export { poundsToStones as default }

/**
 * Converts number of pounds to stones and pounds
 * @param {Number} lbs Pounds to convert
 * @returns Object
 */
function poundsToStones(lbs) {
	const lbsAbs = Math.abs(parseFloat(lbs)) || 0
	const lbsWhole = Math.trunc(lbsAbs)
	const lbsDec = String(lbsAbs).split('.')[1] || 0
	const stone = Math.trunc(lbsAbs / 14) * Math.sign(lbs)
  const pound = parseFloat(`${lbsWhole % 14}.${lbsDec}`) * Math.sign(lbs)
	return { stone, pound }
}
