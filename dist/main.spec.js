"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var main_1 = require("./main");
var chai_1 = require("chai");
require("mocha");
describe('Hello2 function', function () {
    it('should return hello world', function () {
        var result = main_1.hello2();
        chai_1.expect(result).to.equal('Hello world!');
    });
});
describe('Hello function', function () {
    it('should return hello followed by the name', function () {
        var result = main_1.hello('joe');
        chai_1.expect(result).to.equal('Hello joe!');
    });
    it('should return hello world if paramater is undefined', function () {
        var result = main_1.hello(undefined);
        chai_1.expect(result).to.equal('Hello world!');
    });
});
//# sourceMappingURL=main.spec.js.map