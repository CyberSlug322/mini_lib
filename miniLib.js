function isArray(obj) {
    return Array.isArray(obj);
}

function isBoolean(obj) {
    return typeof obj === "boolean";
}

function isDate(obj) {
    return obj.__proto__ === Date.prototype;
}

function isNumber(obj) {
    return typeof obj === "number";
}

function isString(obj) {
    return typeof obj === "string";
}

function isFunction(obj) {
    return typeof obj === "function";
}

function isUndefined(obj) {
    return obj === undefined;
}

function isNull(obj) {
    return obj === null;
}

function asChain(arr) {
    return {
        arr,
        skip: function (arr, number) {
            const array = Object.entries(arr);
            array[0].splice(0,number);
            return Object.fromEntries(array);
        },
        take: function take(arr, number) {
            const array = Object.entries(arr);
            array[0] = array[0].slice(0,number);
            return Object.fromEntries(array);
        }
    };
}

function first(arr) {
    return Array.isArray(arr) ? arr[0] : undefined;
}

function last(arr) {
    return Array.isArray(arr) ? arr[arr.length-1] : undefined;
}



