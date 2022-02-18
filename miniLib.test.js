const {isArray, isBoolean, isDate, isNumber, isString, isFunction,
     isUndefined, isNull, asChain, first, last} = require('./miniLib');

     test('checking if the passed argument is array', () => {
        const arr1 = []; 
        arr1.length = null;
        const arr2 = [1,2];
        arr2.__proto__ = null;
        expect(isArray(arr1)).toBe(true);
        expect(isArray(arr2)).toBe(true);
        expect(isArray({})).toBe(false);
        expect(isArray('')).toBe(false);
        expect(isArray(null)).toBe(false);
        expect(isArray(new Set([1,2,3,4,5,6]))).toBe(false);
        expect(isArray([])).toBe(true);
        expect(isArray([[[[1,2]]]])).toBe(true);
      });

      test('checking if the passed argument is boolean type', () => {
        expect(isBoolean({})).toBe(false);
        expect(isBoolean('')).toBe(false);
        expect(isBoolean(undefined)).toBe(false);
        expect(isBoolean(null)).toBe(false);
        expect(isBoolean(false)).toBe(true);
        expect(isBoolean(true)).toBe(true);
      });

      test('checking if the passed argument is date', () => {
        expect(isDate(Date.now())).toBe(false);
        expect(isDate('')).toBe(false);
        expect(isDate(null)).toBe(false);
        expect(isDate([])).toBe(false);
        expect(isDate(new Date())).toBe(true);
      });

      test('checking if the passed argument is a number', () => {
        expect(isNumber({})).toBe(false);
        expect(isNumber('')).toBe(false);
        expect(isNumber(null)).toBe(false);
        expect(isNumber(1)).toBe(true);
        expect(isNumber(0)).toBe(true);
        expect(isNumber(-99999)).toBe(true);
        expect(isNumber(1e10)).toBe(true);
      });

      test('checking if the passed argument is a string', () => {
        expect(isString({})).toBe(false);
        expect(isString("")).toBe(true);
        expect(isString(null)).toBe(false);
        expect(isString('string')).toBe(true);
        expect(isString(`[[[[1,2]]]]`)).toBe(true);
      });

      test('checking if the passed argument is a function', () => {
        expect(isFunction({})).toBe(false);
        expect(isFunction(function() {})).toBe(true);
        expect(isFunction(() => 'result')).toBe(true);
        expect(isFunction(12)).toBe(false);
      });

      test('checking if the passed argument is undefined', () => {
        expect(isUndefined({})).toBe(false);
        expect(isUndefined(undefined)).toBe(true);
        expect(isUndefined(0)).toBe(false);
        expect(isUndefined("")).toBe(false);
      });

      test('checking if the passed argument is null', () => {
        expect(isNull({})).toBe(false);
        expect(isNull(undefined)).toBe(false);
        expect(isNull(0)).toBe(false);
        expect(isNull("")).toBe(false);
        expect(isNull(null)).toBe(true);
      });

      test("checking if the function returns data of array's first index", () => {
        expect(first({})).toBe(undefined);
        expect(first([])).toBe(undefined);
        expect(first([1])).toBe(1);
        expect(first([5,2,3,4])).toBe(5);
        expect(first([,2,3])).toBe(undefined);
      });

      test("checking if the function returns data of array's last index", () => {
        expect(last({})).toBe(undefined);
        expect(last([])).toBe(undefined);
        expect(last([1])).toBe(1);
        expect(last([5,2,3,4])).toBe(4);
        expect(last([,2,3,])).toBe(3);
      });

      test('checking if asChain method works properly', () => {
        expect(asChain([1,2,3,4,5]).skip(1).newArray).toEqual([2,3,4,5]);
        expect(asChain([1,2,3,4,5]).skip(10).newArray).toEqual([]);
        expect(asChain([1,2,3,4,5]).take(1).newArray).toEqual([1]);
        expect(asChain([1,2,3,4,5]).take(10).newArray).toEqual([1,2,3,4,5]);
        expect(asChain([1,2,3,4,5]).take(3).take(2).take(1).newArray).toEqual([1
        ]);
        expect(asChain([1,2,3]).arr).toEqual([1,2,3]);
      });