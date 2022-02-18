const obj = {};
module.exports =  (function(){
    obj.isArray = function (obj) {
        return Array.isArray(obj);
    }
    
    obj.isBoolean = function (obj) {
        return typeof obj === "boolean";
    }
    
    obj.isDate = function (obj) {
        return obj ? obj.__proto__ === Date.prototype : false;
    }
    
    obj.isNumber = function (obj) {
        return typeof obj === "number";
    }
    
    obj.isString = function (obj) {
        return typeof obj === "string";
    }
    
    obj.isFunction = function (obj) {
        return typeof obj === "function";
    }
    
    obj.isUndefined = function (obj) {
        return obj === undefined;
    }
    
    obj.isNull = function (obj) {
        return obj === null;
    }
    
    obj.asChain = function (arr) {
        return {
            arr,
            skip: function (array,number) {
                const newArray = [];
                for (let i = number; i < array.length; i++) {
                    newArray.push(array.arr[i]);
                }
                return {newArray};
            },
            take: function (array,number) {
                const newArray = [];
                for (let i = 0; i < number; i++) {
                    if (!array[i]) break;
                    newArray.push(array[i]);
                }
                console.log(newArray)
                return {newArray};
            }
        };
    }
    
    obj.first = function (arr) {
        return Array.isArray(arr) ? arr[0] : undefined;
    }
    
    obj.last = function (arr) {
        return Array.isArray(arr) ? arr[arr.length-1] : undefined;
    }

    return obj;

})();
