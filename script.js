import getFormInputValues from './modules/get-form-input-values.js'
import calculateConversions from './calculate-conversions.js'
import updateFieldsByID from './modules/update-fields-by-id.js'
import calcBMI from './modules/calc-bmi.js'

const bmiForm = document.getElementById('bmi-form')
const updateBmiForm = updateFieldsByID(bmiForm)

bmiForm.addEventListener('input', onUpdatedForm)

function onUpdatedForm(event) {
  const inputValues = getFormInputValues(event.target.form)

  const newValues = calculateConversions(event.target.id, inputValues)

  const allValues = { ...inputValues, ...newValues }
  allValues.bmi = calcBMI(allValues.metres, allValues.kg).toFixed(1)
  
  updateBmiForm(allValues)
}
