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
exports.InventoryReport = void 0;
var Document_1 = require("./Document");
var InventoryReport = /** @class */ (function (_super) {
    __extends(InventoryReport, _super);
    function InventoryReport(id, warehouse, date) {
        if (date === void 0) { date = new Date(); }
        var _this = _super.call(this, id, Document_1.DocumentType.INVENTORY, date) || this;
        _this.warehouse = warehouse;
        return _this;
    }
    InventoryReport.prototype.getWarehouse = function () {
        return this.warehouse;
    };
    InventoryReport.prototype.toString = function () {
        var result = "INVENTORY REPORT #".concat(this.getId(), "\n");
        result += "Date: ".concat(this.getDate().toLocaleDateString(), "\n");
        result += "Warehouse: ".concat(this.warehouse.getName(), "\n");
        result += "Total Items: ".concat(this.warehouse.getAllItems().length, "\n");
        result += "Total Value: ".concat(this.warehouse.getTotalValue().toString(), "\n");
        result += "Items:\n";
        for (var _i = 0, _a = this.warehouse.getAllItems(); _i < _a.length; _i++) {
            var item = _a[_i];
            result += "- ".concat(item.toString(), "\n");
        }
        return result;
    };
    return InventoryReport;
}(Document_1.Document));
exports.InventoryReport = InventoryReport;
