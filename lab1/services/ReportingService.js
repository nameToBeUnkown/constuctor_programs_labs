"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportingService = void 0;
var IncomingInvoice_1 = require("../models/IncomingInvoice");
var OutgoingInvoice_1 = require("../models/OutgoingInvoice");
var InventoryReport_1 = require("../models/InventoryReport");
var IDGenerator_1 = require("./IDGenerator");
var ReportingService = /** @class */ (function () {
    function ReportingService() {
        this.documents = new Map();
    }
    ReportingService.prototype.createIncomingInvoice = function (supplier) {
        var id = IDGenerator_1.IDGenerator.generate('IN');
        var invoice = new IncomingInvoice_1.IncomingInvoice(id, supplier);
        this.documents.set(id, invoice);
        return invoice;
    };
    ReportingService.prototype.createOutgoingInvoice = function (customer) {
        var id = IDGenerator_1.IDGenerator.generate('OUT');
        var invoice = new OutgoingInvoice_1.OutgoingInvoice(id, customer);
        this.documents.set(id, invoice);
        return invoice;
    };
    ReportingService.prototype.createInventoryReport = function (warehouse) {
        var id = IDGenerator_1.IDGenerator.generate('INV');
        var report = new InventoryReport_1.InventoryReport(id, warehouse);
        this.documents.set(id, report);
        return report;
    };
    ReportingService.prototype.processIncomingInvoice = function (invoice, warehouse) {
        try {
            for (var _i = 0, _a = invoice.getItems(); _i < _a.length; _i++) {
                var item = _a[_i];
                warehouse.addItem(item.getProduct(), item.getQuantity());
            }
            return true;
        }
        catch (error) {
            console.error("Failed to process incoming invoice: ".concat(error.message));
            return false;
        }
    };
    ReportingService.prototype.processOutgoingInvoice = function (invoice, warehouse) {
        try {
            // First validate that all products are available in sufficient quantity
            for (var _i = 0, _a = invoice.getItems(); _i < _a.length; _i++) {
                var item = _a[_i];
                var productId = item.getProduct().getId();
                if (!warehouse.hasEnoughStock(productId, item.getQuantity())) {
                    var warehouseItem = warehouse.getItem(productId);
                    var availableQuantity = warehouseItem ? warehouseItem.getQuantity() : 0;
                    throw new Error("Insufficient stock for product ".concat(item.getProduct().getName(), ": ") +
                        "requested ".concat(item.getQuantity(), ", available ").concat(availableQuantity));
                }
            }
            // Then remove all products
            for (var _b = 0, _c = invoice.getItems(); _b < _c.length; _b++) {
                var item = _c[_b];
                var warehouseItem = warehouse.getItem(item.getProduct().getId());
                if (warehouseItem) {
                    warehouseItem.removeQuantity(item.getQuantity());
                }
            }
            return true;
        }
        catch (error) {
            console.error("Failed to process outgoing invoice: ".concat(error.message));
            return false;
        }
    };
    ReportingService.prototype.getDocumentById = function (id) {
        return this.documents.get(id);
    };
    ReportingService.prototype.getAllDocuments = function () {
        return Array.from(this.documents.values());
    };
    return ReportingService;
}());
exports.ReportingService = ReportingService;
