"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentItem = void 0;
var DocumentItem = /** @class */ (function () {
    function DocumentItem(product, quantity) {
        this.product = product;
        this.quantity = quantity;
        if (quantity <= 0) {
            throw new Error("Quantity must be positive");
        }
    }
    DocumentItem.prototype.getProduct = function () {
        return this.product;
    };
    DocumentItem.prototype.getQuantity = function () {
        return this.quantity;
    };
    DocumentItem.prototype.getTotalPrice = function () {
        return this.product.getPrice().multiply(this.quantity);
    };
    DocumentItem.prototype.toString = function () {
        return "".concat(this.product.getName(), " - ").concat(this.quantity, " ").concat(this.product.getUnitOfMeasure(), " x ").concat(this.product
            .getPrice()
            .toString(), " = ").concat(this.getTotalPrice().toString());
    };
    return DocumentItem;
}());
exports.DocumentItem = DocumentItem;
