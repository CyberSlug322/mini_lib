 require('./miniLib');

    describe('isArray', function() {
      it('should return true if passed obj is array', () => {
        const arr1 = []; 
        arr1.length = null;
        const arr2 = [1,2];
        arr2.__proto__ = null;
        expect(isArray(arr1)).toBe(true);
        expect(isArray(arr2)).toBe(true);
        expect(isArray([])).toBe(true);
        expect(isArray([[[[1,2]]]])).toBe(true);
      });
      it('should return false for nonArray obj', () => {
        expect(isArray({})).toBe(false);
        expect(isArray('')).toBe(false);
        expect(isArray(null)).toBe(false);
        expect(isArray(new Set([1,2,3,4,5,6]))).toBe(false);
      });
    });

    describe('isBoolean', function() {
      it('should return true if the passed arg is true or false', () => {
        expect(isBoolean(false)).toBe(true);
        expect(isBoolean(true)).toBe(true);
      });
      it('should return false for non Boolean type', () => {
        expect(isBoolean({})).toBe(false);
        expect(isBoolean('')).toBe(false);
        expect(isBoolean(undefined)).toBe(false);
        expect(isBoolean(null)).toBe(false);
      });     
    });

    describe('isDate', function() {
      it('should return false if obj is not Date', () => {
        expect(isDate(Date.now())).toBe(false);
        expect(isDate('')).toBe(false);
        expect(isDate(null)).toBe(false);
        expect(isDate([])).toBe(false);
      });
      it('checking if the passed argument is Date', () => {
        expect(isDate(new Date())).toBe(true);
      }); 
    });

    describe('isNumber', function() {
      it('checking if the passed argument is a number', () => {
        expect(isNumber(1)).toBe(true);
        expect(isNumber(0)).toBe(true);
        expect(isNumber(-99999)).toBe(true);
        expect(isNumber(1e10)).toBe(true);
      });
      it('should return false for all types except number', () => {
        expect(isNumber({})).toBe(false);
        expect(isNumber('')).toBe(false);
        expect(isNumber(null)).toBe(false);
      }); 
    });

    describe('isString', function() {
      it('checking if the passed argument is a string', () => {
        expect(isString({})).toBe(false);
        expect(isString("")).toBe(true);
        expect(isString(null)).toBe(false);
        expect(isString('string')).toBe(true);
        expect(isString(`[[[[1,2]]]]`)).toBe(true);
      });
    });

    describe('isFunction', function() {
      it('checking if the passed argument is a function', () => {
        expect(isFunction({})).toBe(false);
        expect(isFunction(function() {})).toBe(true);
        expect(isFunction(() => 'result')).toBe(true);
        expect(isFunction(12)).toBe(false);
      });    
    });
    
    describe('isUndefined', function() {
      it('checking if the passed argument is undefined', () => {
        expect(isUndefined({})).toBe(false);
        expect(isUndefined(undefined)).toBe(true);
        expect(isUndefined(0)).toBe(false);
        expect(isUndefined("")).toBe(false);
      }); 
    });

    describe('isNull', function() {
      it('checking if the passed argument is null', () => {
        expect(isNull({})).toBe(false);
        expect(isNull(undefined)).toBe(false);
        expect(isNull(0)).toBe(false);
        expect(isNull("")).toBe(false);
        expect(isNull(null)).toBe(true);
      });
    });

    describe('first', function() {
      it("checking if the function returns data of array's first index", () => {
        expect(first({})).toBe(undefined);
        expect(first([])).toBe(undefined);
        expect(first([1])).toBe(1);
        expect(first([5,2,3,4])).toBe(5);
        expect(first([,2,3])).toBe(undefined);
      });
    });

    describe('last', function() {
      it("checking if the function returns data of array's last index", () => {
        expect(last({})).toBe(undefined);
        expect(last([])).toBe(undefined);
        expect(last([1])).toBe(1);
        expect(last([5,2,3,4])).toBe(4);
        expect(last([,2,3,])).toBe(3);
      });
    });

    describe('asChain', function() {
      it('should work for simple chain call', () => {
        expect(asChain([1,2,3,4,5]).skip(1).arr).toEqual([2,3,4,5]);
      });
      it('should work if argumen higher than array length', () => {
        expect(asChain([1,2,3,4,5]).skip(10).arr).toEqual([]);
        });
      it('should work for simple chain call', () => {
        expect(asChain([1,2,3,4,5]).take(1).arr).toEqual([1]);
        });
      it('should work if argumen higher than array length', () => {
        expect(asChain([1,2,3,4,5]).take(10).arr).toEqual([1,2,3,4,5]);
        });
      it('should work for chain call', () => {
        expect(asChain([1,2,3,4,5]).take(3).take(2).take(1).arr).toEqual([1]);
        expect(asChain([1,2,3,4,5]).skip(1).take(2).skip(1).arr).toEqual([3]);
        });
      it('should work without chain call', () => {
        expect(asChain([1,2,3]).arr).toEqual([1,2,3]);
        });
    });