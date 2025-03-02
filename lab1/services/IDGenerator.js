"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IDGenerator = void 0;
var IDGenerator = /** @class */ (function () {
    function IDGenerator() {
    }
    IDGenerator.generate = function (prefix) {
        var currentCount = this.counters.get(prefix) || 0;
        var newCount = currentCount + 1;
        this.counters.set(prefix, newCount);
        return "".concat(prefix, "-").concat(newCount.toString().padStart(5, '0'));
    };
    IDGenerator.counters = new Map();
    return IDGenerator;
}());
exports.IDGenerator = IDGenerator;
