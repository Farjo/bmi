export { yardsToMetres, metresToYards, poundsToKg, kgToPounds }

/* Official conversion rates from Weights and Measures Act 1985 Part 72 http://www.legislation.gov.uk/ukpga/1985/72
  "the yard shall be 0.9144 metre exactly"
  therefore 1 metre is 0.0254 inches (0.9144/36)
 "the pound shall be 0.453 592 37 kilogram exactly"
  therefore 1 kg is 2.2046226218 pounds (1/0.45359237) */

const YARDS2METRES = 0.9144
const POUNDS2KG = 0.453_592_37

function yardsToMetres(yards) {
	return yards * YARDS2METRES
}

function metresToYards(metres) {
	return metres / YARDS2METRES
}

function poundsToKg (lbs) {
	return lbs * POUNDS2KG
}

function kgToPounds(kg) {
	return kg / POUNDS2KG
}
