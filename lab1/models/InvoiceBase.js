"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvoiceBase = void 0;
var Document_1 = require("./Document");
var DocumentItem_1 = require("./DocumentItem");
var Money_1 = require("./Money");
var InvoiceBase = /** @class */ (function (_super) {
    __extends(InvoiceBase, _super);
    function InvoiceBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.items = [];
        return _this;
    }
    InvoiceBase.prototype.addItem = function (product, quantity) {
        this.items.push(new DocumentItem_1.DocumentItem(product, quantity));
    };
    InvoiceBase.prototype.getItems = function () {
        return __spreadArray([], this.items, true);
    };
    InvoiceBase.prototype.getTotalAmount = function () {
        if (this.items.length === 0) {
            return new Money_1.Money(0, 0, "UAH");
        }
        var currency = this.items[0].getProduct().getPrice().getCurrency();
        var total = new Money_1.Money(0, 0, currency);
        for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.getProduct().getPrice().getCurrency() !== currency) {
                throw new Error("Cannot calculate total with mixed currencies");
            }
            total = total.add(item.getTotalPrice());
        }
        return total;
    };
    return InvoiceBase;
}(Document_1.Document));
exports.InvoiceBase = InvoiceBase;
