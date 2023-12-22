export default objectFilter

/**
 * Retrun new object based on a filtering function
 * @param {Object} obj The object to filter
 * @param {Function} filterFn filtering function that returns truthy (include) or falsy (filter out)
 * @returns {Object} New object
 */
function objectFilter(obj, filterFn) {
  return Object.fromEntries(Object.entries(obj).filter(filterFn))
}
