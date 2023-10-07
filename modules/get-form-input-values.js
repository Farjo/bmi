export { getFormInputValues as default }

function getFormInputValues(form) {
  const inputValues = {}
  for (const input of form.querySelectorAll('input')) {
    if (input.id) {
      inputValues[input.id] = ['number', 'range'].includes(input.type) ? Number(input.value) || 0 : input.value //
    }
  }
  return inputValues
}
