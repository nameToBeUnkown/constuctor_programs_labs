"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WarehouseItem = void 0;
var WarehouseItem = /** @class */ (function () {
    function WarehouseItem(product, quantity, lastDeliveryDate) {
        if (quantity === void 0) { quantity = 0; }
        if (lastDeliveryDate === void 0) { lastDeliveryDate = new Date(); }
        this.product = product;
        this.quantity = quantity;
        this.lastDeliveryDate = lastDeliveryDate;
    }
    WarehouseItem.prototype.getProduct = function () {
        return this.product;
    };
    WarehouseItem.prototype.getQuantity = function () {
        return this.quantity;
    };
    WarehouseItem.prototype.getLastDeliveryDate = function () {
        return this.lastDeliveryDate;
    };
    WarehouseItem.prototype.addQuantity = function (amount) {
        if (amount < 0) {
            throw new Error("Cannot add negative quantity");
        }
        this.quantity += amount;
    };
    WarehouseItem.prototype.removeQuantity = function (amount) {
        if (amount < 0) {
            throw new Error("Cannot remove negative quantity");
        }
        if (amount > this.quantity) {
            throw new Error("Insufficient quantity: requested ".concat(amount, ", available ").concat(this.quantity));
        }
        this.quantity -= amount;
    };
    WarehouseItem.prototype.updateLastDeliveryDate = function (date) {
        this.lastDeliveryDate = date;
    };
    WarehouseItem.prototype.getTotalValue = function () {
        return this.product.getPrice().multiply(this.quantity);
    };
    WarehouseItem.prototype.toString = function () {
        return "".concat(this.product.toString(), " | Quantity: ").concat(this.quantity, " ").concat(this.product.getUnitOfMeasure(), " | Last delivery: ").concat(this.lastDeliveryDate.toLocaleDateString());
    };
    return WarehouseItem;
}());
exports.WarehouseItem = WarehouseItem;
