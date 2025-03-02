"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShoppingCart = void 0;
var Money_1 = require("./Money");
var DocumentItem_1 = require("./DocumentItem");
var ShoppingCart = /** @class */ (function () {
    function ShoppingCart(customer) {
        this.customer = customer;
        this.items = new Map();
    }
    ShoppingCart.prototype.addProduct = function (product, quantity) {
        if (quantity <= 0) {
            throw new Error("Quantity must be positive");
        }
        var productId = product.getId();
        var existingItem = this.items.get(productId);
        if (existingItem) {
            // Create a new item with combined quantity
            var newItem = new DocumentItem_1.DocumentItem(product, existingItem.getQuantity() + quantity);
            this.items.set(productId, newItem);
        }
        else {
            this.items.set(productId, new DocumentItem_1.DocumentItem(product, quantity));
        }
    };
    ShoppingCart.prototype.removeProduct = function (productId) {
        return this.items.delete(productId);
    };
    ShoppingCart.prototype.getCustomer = function () {
        return this.customer;
    };
    ShoppingCart.prototype.getItems = function () {
        return Array.from(this.items.values());
    };
    ShoppingCart.prototype.getTotalAmount = function () {
        if (this.items.size === 0) {
            return new Money_1.Money(0, 0, "UAH");
        }
        var currency = null;
        var total = null;
        for (var _i = 0, _a = this.items.values(); _i < _a.length; _i++) {
            var item = _a[_i];
            if (!currency) {
                currency = item.getProduct().getPrice().getCurrency();
                total = new Money_1.Money(0, 0, currency);
            }
            if (item.getProduct().getPrice().getCurrency() !== currency) {
                throw new Error("Cannot calculate total with mixed currencies");
            }
            if (total)
                total = total.add(item.getTotalPrice());
        }
        return total || new Money_1.Money(0, 0, "UAH");
    };
    ShoppingCart.prototype.checkout = function (reportingService) {
        var invoice = reportingService.createOutgoingInvoice(this.customer);
        for (var _i = 0, _a = this.items.values(); _i < _a.length; _i++) {
            var item = _a[_i];
            invoice.addItem(item.getProduct(), item.getQuantity());
        }
        // Clear the cart after checkout
        this.items.clear();
        return invoice;
    };
    ShoppingCart.prototype.toString = function () {
        var result = "Shopping Cart for ".concat(this.customer, "\n");
        result += "Items:\n";
        for (var _i = 0, _a = this.items.values(); _i < _a.length; _i++) {
            var item = _a[_i];
            result += "- ".concat(item.toString(), "\n");
        }
        result += "Total: ".concat(this.getTotalAmount().toString());
        return result;
    };
    return ShoppingCart;
}());
exports.ShoppingCart = ShoppingCart;
