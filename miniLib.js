    const obj = {};
export default (function(){
    obj.isArray = function (obj) {
        return Array.isArray(obj);
    }
    
    obj.isBoolean = function isBoolean(obj) {
        return typeof obj === "boolean";
    }
    
    obj.isDate = function isDate(obj) {
        return obj.__proto__ === Date.prototype;
    }
    
    obj.isNumber = function isNumber(obj) {
        return typeof obj === "number";
    }
    
    obj.isString = function isString(obj) {
        return typeof obj === "string";
    }
    
    obj.isFunction = function isFunction(obj) {
        return typeof obj === "function";
    }
    
    obj.isUndefined = function isUndefined(obj) {
        return obj === undefined;
    }
    
    obj.isNull = function isNull(obj) {
        return obj === null;
    }
    
    obj.asChain = function asChain(arr) {
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
    
    obj.first = function first(arr) {
        return Array.isArray(arr) ? arr[0] : undefined;
    }
    
    obj.last = function last(arr) {
        return Array.isArray(arr) ? arr[arr.length-1] : undefined;
    }

    return obj

    
})();
