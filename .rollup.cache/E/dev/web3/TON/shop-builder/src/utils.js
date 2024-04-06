export function getTypedKeys(obj) {
    return Object.keys(obj);
}
export function getNestedItemByKeys(obj, keys) {
    let result = obj;
    for (let key of keys) {
        if (result.hasOwnProperty(key)) {
            result = result[key];
        }
        else {
            return null; // Key not found
        }
    }
    return result;
}
//# sourceMappingURL=utils.js.map