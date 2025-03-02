"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = exports.UnitOfMeasure = exports.ProductCategory = void 0;
var ProductCategory;
(function (ProductCategory) {
    ProductCategory["FOOD"] = "Food";
    ProductCategory["ELECTRONICS"] = "Electronics";
    ProductCategory["CLOTHING"] = "Clothing";
    ProductCategory["HOUSEHOLD"] = "Household";
    ProductCategory["OTHER"] = "Other";
})(ProductCategory || (exports.ProductCategory = ProductCategory = {}));
var UnitOfMeasure;
(function (UnitOfMeasure) {
    UnitOfMeasure["PIECE"] = "pc";
    UnitOfMeasure["KILOGRAM"] = "kg";
    UnitOfMeasure["LITER"] = "l";
    UnitOfMeasure["METER"] = "m";
})(UnitOfMeasure || (exports.UnitOfMeasure = UnitOfMeasure = {}));
var Product = /** @class */ (function () {
    function Product(id, name, price, category, unitOfMeasure) {
        if (category === void 0) { category = ProductCategory.OTHER; }
        if (unitOfMeasure === void 0) { unitOfMeasure = UnitOfMeasure.PIECE; }
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
        this.unitOfMeasure = unitOfMeasure;
    }
    Product.prototype.getId = function () {
        return this.id;
    };
    Product.prototype.getName = function () {
        return this.name;
    };
    Product.prototype.getPrice = function () {
        return this.price;
    };
    Product.prototype.getCategory = function () {
        return this.category;
    };
    Product.prototype.getUnitOfMeasure = function () {
        return this.unitOfMeasure;
    };
    Product.prototype.reducePrice = function (amount) {
        if (amount.getCurrency() !== this.price.getCurrency()) {
            throw new Error("Currency mismatch: product is in ".concat(this.price.getCurrency(), ", reduction is in ").concat(amount.getCurrency()));
        }
        try {
            this.price = this.price.subtract(amount);
        }
        catch (error) {
            throw new Error("Cannot reduce price below zero: ".concat(error.message));
        }
    };
    Product.prototype.toString = function () {
        return "".concat(this.name, " (").concat(this.id, ") - ").concat(this.price.toString(), " per ").concat(this.unitOfMeasure, " - Category: ").concat(this.category);
    };
    return Product;
}());
exports.Product = Product;
