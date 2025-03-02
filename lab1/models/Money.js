"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Money = void 0;
var Money = /** @class */ (function () {
    function Money(wholePart, fractionalPart, currency) {
        if (wholePart === void 0) { wholePart = 0; }
        if (fractionalPart === void 0) { fractionalPart = 0; }
        if (currency === void 0) { currency = 'UAH'; }
        this.wholePart = wholePart;
        this.fractionalPart = fractionalPart;
        this.currency = currency;
        this.normalize();
    }
    Money.prototype.normalize = function () {
        if (this.fractionalPart >= 100) {
            this.wholePart += Math.floor(this.fractionalPart / 100);
            this.fractionalPart %= 100;
        }
    };
    Money.prototype.setAmount = function (wholePart, fractionalPart) {
        this.wholePart = wholePart;
        this.fractionalPart = fractionalPart;
        this.normalize();
    };
    Money.prototype.getWholePart = function () {
        return this.wholePart;
    };
    Money.prototype.getFractionalPart = function () {
        return this.fractionalPart;
    };
    Money.prototype.getCurrency = function () {
        return this.currency;
    };
    Money.prototype.toString = function () {
        return "".concat(this.wholePart, ".").concat(this.fractionalPart.toString().padStart(2, '0'), " ").concat(this.currency);
    };
    Money.prototype.add = function (other) {
        if (this.currency !== other.currency) {
            throw new Error("Cannot add different currencies: ".concat(this.currency, " and ").concat(other.currency));
        }
        var newWholePart = this.wholePart + other.wholePart;
        var newFractionalPart = this.fractionalPart + other.fractionalPart;
        return new Money(newWholePart, newFractionalPart, this.currency);
    };
    Money.prototype.subtract = function (other) {
        if (this.currency !== other.currency) {
            throw new Error("Cannot subtract different currencies: ".concat(this.currency, " and ").concat(other.currency));
        }
        var newWholePart = this.wholePart - other.wholePart;
        var newFractionalPart = this.fractionalPart - other.fractionalPart;
        if (newFractionalPart < 0) {
            newWholePart--;
            newFractionalPart += 100;
        }
        if (newWholePart < 0) {
            throw new Error("Cannot have negative money amount");
        }
        return new Money(newWholePart, newFractionalPart, this.currency);
    };
    Money.prototype.multiply = function (factor) {
        if (factor < 0) {
            throw new Error("Cannot multiply by negative factor");
        }
        var totalCents = Math.round((this.wholePart * 100 + this.fractionalPart) * factor);
        var newWholePart = Math.floor(totalCents / 100);
        var newFractionalPart = totalCents % 100;
        return new Money(newWholePart, newFractionalPart, this.currency);
    };
    Money.prototype.isEqual = function (other) {
        return this.currency === other.currency &&
            this.wholePart === other.wholePart &&
            this.fractionalPart === other.fractionalPart;
    };
    Money.prototype.isGreaterThan = function (other) {
        if (this.currency !== other.currency) {
            throw new Error("Cannot compare different currencies: ".concat(this.currency, " and ").concat(other.currency));
        }
        if (this.wholePart > other.wholePart) {
            return true;
        }
        else if (this.wholePart === other.wholePart) {
            return this.fractionalPart > other.fractionalPart;
        }
        return false;
    };
    return Money;
}());
exports.Money = Money;
