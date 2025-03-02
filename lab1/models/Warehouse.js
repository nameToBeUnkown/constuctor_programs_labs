"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Warehouse = void 0;
var WarehouseItem_1 = require("./WarehouseItem");
var Money_1 = require("./Money");
var Warehouse = /** @class */ (function () {
    function Warehouse(name) {
        this.name = name;
        this.items = new Map();
    }
    Warehouse.prototype.getName = function () {
        return this.name;
    };
    Warehouse.prototype.addItem = function (product, quantity) {
        if (quantity <= 0) {
            throw new Error("Quantity must be positive");
        }
        var existingItem = this.items.get(product.getId());
        if (existingItem) {
            existingItem.addQuantity(quantity);
            existingItem.updateLastDeliveryDate(new Date());
        }
        else {
            var newItem = new WarehouseItem_1.WarehouseItem(product, quantity, new Date());
            this.items.set(product.getId(), newItem);
        }
    };
    Warehouse.prototype.getItem = function (productId) {
        return this.items.get(productId);
    };
    Warehouse.prototype.hasEnoughStock = function (productId, quantity) {
        var item = this.items.get(productId);
        return !!item && item.getQuantity() >= quantity;
    };
    Warehouse.prototype.getAllItems = function () {
        return Array.from(this.items.values());
    };
    Warehouse.prototype.getTotalValue = function () {
        if (this.items.size === 0) {
            return new Money_1.Money(0, 0, 'UAH');
        }
        var defaultCurrency = null;
        for (var _i = 0, _a = this.items.values(); _i < _a.length; _i++) {
            var item = _a[_i];
            if (!defaultCurrency) {
                defaultCurrency = item.getProduct().getPrice().getCurrency();
                break;
            }
        }
        if (!defaultCurrency) {
            return new Money_1.Money(0, 0, 'UAH');
        }
        var totalValue = new Money_1.Money(0, 0, defaultCurrency);
        for (var _b = 0, _c = this.items.values(); _b < _c.length; _b++) {
            var item = _c[_b];
            if (item.getProduct().getPrice().getCurrency() !== defaultCurrency) {
                throw new Error("Cannot calculate total value with mixed currencies");
            }
            totalValue = totalValue.add(item.getTotalValue());
        }
        return totalValue;
    };
    Warehouse.prototype.toString = function () {
        var result = "Warehouse: ".concat(this.name, "\n");
        result += "Total Items: ".concat(this.items.size, "\n");
        result += "Total Value: ".concat(this.getTotalValue().toString(), "\n");
        result += "Items:\n";
        for (var _i = 0, _a = this.items.values(); _i < _a.length; _i++) {
            var item = _a[_i];
            result += "- ".concat(item.toString(), "\n");
        }
        return result;
    };
    return Warehouse;
}());
exports.Warehouse = Warehouse;
