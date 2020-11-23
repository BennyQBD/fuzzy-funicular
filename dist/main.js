"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hello2 = exports.hello = void 0;
exports.hello = function (word) {
    if (word === void 0) { word = 'world'; }
    return "Hello " + word + "!";
};
exports.hello2 = function () { return exports.hello(); };
console.log('Hello, world!');
//# sourceMappingURL=main.js.map