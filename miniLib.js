
  (function(module){
    module.isArray = function (obj) {
        return Array.isArray(obj);
    }
    
    module.isBoolean = function (obj) {
        return typeof obj === "boolean";
    }
    
    module.isDate = function (obj) {
        return obj ? obj.__proto__ === Date.prototype : false;
    }
    
    module.isNumber = function (obj) {
        return typeof obj === "number";
    }
    
    module.isString = function (obj) {
        return typeof obj === "string";
    }
    
    module.isFunction = function (obj) {
        return typeof obj === "function";
    }
    
    module.isUndefined = function (obj) {
        return obj === undefined;
    }
    
    module.isNull = function (obj) {
        return obj === null;
    }
    
    module.asChain = function (arr) {
        return {
            arr,
            skip(number) {
                for (let i = number; i > 0; i--) {
                    this.arr.shift();
                }
                return this;
            },
            take(number) {
                for (let i = this.arr.length-1; i >= number; i--) {
                    this.arr.pop();
                }
                return this;
            }
        };
    }
    
    module.first = function (arr) {
        return Array.isArray(arr) ? arr[0] : undefined;
    }
    
    module.last = function (arr) {
        return Array.isArray(arr) ? arr[arr.length-1] : undefined;
    }

})(window);
