"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Money_1 = require("./models/Money");
var Product_1 = require("./models/Product");
var Warehouse_1 = require("./models/Warehouse");
var ReportingService_1 = require("./services/ReportingService");
var ShoppingCart_1 = require("./models/ShoppingCart");
function main() {
    console.log("==== Warehouse Management System Demo ====\n");
    // Create products
    var laptop = new Product_1.Product("PROD001", "MacBook Pro", new Money_1.Money(30000, 0, "UAH"), Product_1.ProductCategory.ELECTRONICS, Product_1.UnitOfMeasure.PIECE);
    var phone = new Product_1.Product("PROD002", "iPhone 14", new Money_1.Money(25000, 0, "UAH"), Product_1.ProductCategory.ELECTRONICS, Product_1.UnitOfMeasure.PIECE);
    var tShirt = new Product_1.Product("PROD003", "Cotton T-Shirt", new Money_1.Money(600, 0, "UAH"), Product_1.ProductCategory.CLOTHING, Product_1.UnitOfMeasure.PIECE);
    var banana = new Product_1.Product("PROD004", "Banana", new Money_1.Money(60, 0, "UAH"), Product_1.ProductCategory.FOOD, Product_1.UnitOfMeasure.KILOGRAM);
    // Display products
    console.log("Products:");
    console.log(laptop.toString());
    console.log(phone.toString());
    console.log(tShirt.toString());
    console.log(banana.toString());
    console.log();
    // Create warehouse
    var mainWarehouse = new Warehouse_1.Warehouse("Main Warehouse");
    // Create reporting service
    var reportingService = new ReportingService_1.ReportingService();
    // Create and process incoming invoice for electronics
    console.log("Processing incoming delivery from electronics supplier:");
    var electronicsInvoice = reportingService.createIncomingInvoice("Electronics Supplier Ltd");
    electronicsInvoice.addItem(laptop, 5);
    electronicsInvoice.addItem(phone, 10);
    console.log(electronicsInvoice.toString());
    console.log();
    var electronicsProcessed = reportingService.processIncomingInvoice(electronicsInvoice, mainWarehouse);
    console.log("Electronics delivery processed successfully: ".concat(electronicsProcessed, "\n"));
    // Create and process incoming invoice for clothing and food
    console.log("Processing incoming delivery from general supplier:");
    var generalInvoice = reportingService.createIncomingInvoice("General Goods Inc.");
    generalInvoice.addItem(tShirt, 20);
    generalInvoice.addItem(banana, 100);
    console.log(generalInvoice.toString());
    console.log();
    var generalProcessed = reportingService.processIncomingInvoice(generalInvoice, mainWarehouse);
    console.log("General delivery processed successfully: ".concat(generalProcessed, "\n"));
    // Create inventory report
    console.log("Inventory after receiving goods:");
    var inventoryReport = reportingService.createInventoryReport(mainWarehouse);
    console.log(inventoryReport.toString());
    console.log();
    // Create shopping cart
    console.log("Customer shopping:");
    var cart = new ShoppingCart_1.ShoppingCart("John Doe");
    cart.addProduct(laptop, 1);
    cart.addProduct(phone, 2);
    cart.addProduct(tShirt, 3);
    cart.addProduct(banana, 5);
    console.log(cart.toString());
    console.log();
    // Checkout and create outgoing invoice
    console.log("Customer checkout:");
    var outgoingInvoice = cart.checkout(reportingService);
    console.log(outgoingInvoice.toString());
    console.log();
    // Process outgoing invoice
    var outgoingProcessed = reportingService.processOutgoingInvoice(outgoingInvoice, mainWarehouse);
    console.log("Outgoing invoice processed successfully: ".concat(outgoingProcessed, "\n"));
    // Create final inventory report
    console.log("Final inventory after customer purchase:");
    var finalInventoryReport = reportingService.createInventoryReport(mainWarehouse);
    console.log(finalInventoryReport.toString());
    console.log();
    // Demonstrate price reduction
    console.log("Price reduction example:");
    console.log("Original iPhone price: ".concat(phone.getPrice().toString()));
    phone.reducePrice(new Money_1.Money(5000, 0, "UAH"));
    console.log("New iPhone price after reduction: ".concat(phone.getPrice().toString()));
    console.log();
    // List all documents
    console.log("All documents in the system:");
    var allDocuments = reportingService.getAllDocuments();
    for (var _i = 0, allDocuments_1 = allDocuments; _i < allDocuments_1.length; _i++) {
        var doc = allDocuments_1[_i];
        console.log("- ".concat(doc.getId(), " (").concat(doc.getType(), ") - ").concat(doc
            .getDate()
            .toLocaleDateString()));
    }
}
// Run the demonstration
main();
