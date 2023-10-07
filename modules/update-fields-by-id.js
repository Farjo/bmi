export { updateFieldsByID as default }

import { isPlainObject } from './is-types.js'

function updateFieldsByID(form) {
	return function (values) {
		if (!isPlainObject(values)) return
		for (const key of Object.keys(values)) {
			form.querySelector(`#${key}`).value = values[key]
		}
	}
}
