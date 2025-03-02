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
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncomingInvoice = void 0;
var InvoiceBase_1 = require("./InvoiceBase");
var Document_1 = require("./Document");
var IncomingInvoice = /** @class */ (function (_super) {
    __extends(IncomingInvoice, _super);
    function IncomingInvoice(id, supplier, date) {
        if (date === void 0) { date = new Date(); }
        var _this = _super.call(this, id, Document_1.DocumentType.INCOMING, date) || this;
        _this.supplier = supplier;
        return _this;
    }
    IncomingInvoice.prototype.getSupplier = function () {
        return this.supplier;
    };
    IncomingInvoice.prototype.toString = function () {
        var result = "INCOMING INVOICE #".concat(this.getId(), "\n");
        result += "Date: ".concat(this.getDate().toLocaleDateString(), "\n");
        result += "Supplier: ".concat(this.supplier, "\n");
        result += "Items:\n";
        for (var _i = 0, _a = this.getItems(); _i < _a.length; _i++) {
            var item = _a[_i];
            result += "- ".concat(item.toString(), "\n");
        }
        result += "Total: ".concat(this.getTotalAmount().toString());
        return result;
    };
    return IncomingInvoice;
}(InvoiceBase_1.InvoiceBase));
exports.IncomingInvoice = IncomingInvoice;
