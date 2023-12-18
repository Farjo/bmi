import getFormInputValues from './modules/get-form-input-values.js'
import calculateConversions from './calculate-conversions.js'
import updateFieldsByID from './modules/update-fields-by-id.js'
import calcBMI from './modules/calc-bmi.js'

const bmiForm = document.getElementById('bmi-form')
const updateBmiForm = updateFieldsByID(bmiForm)

bmiForm.addEventListener('input', onUpdatedForm)

function onUpdatedForm(event) {
  const thisForm = event.target.form
  const formID = event.target.id
  const inputValues = getFormInputValues(thisForm)

  const newValues = calculateConversions(formID, inputValues)

  const allValues = { ...inputValues, ...newValues }
  allValues.bmi = thisForm.checkValidity() ? calcBMI(allValues.metres, allValues.kg).toFixed(1) : '😕'
  delete allValues[formID]

  updateBmiForm(allValues)
}
