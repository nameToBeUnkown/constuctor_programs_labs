import { Money } from "./models/Money";
import { Product, ProductCategory, UnitOfMeasure } from "./models/Product";
import { Warehouse } from "./models/Warehouse";
import { ReportingService } from "./services/ReportingService";
import { ShoppingCart } from "./models/ShoppingCart";

function main() {
  console.log("==== Warehouse Management System Demo ====\n");

  // Create products
  const laptop = new Product(
    "PROD001",
    "MacBook Pro",
    new Money(30000, 0, "UAH"),
    ProductCategory.ELECTRONICS,
    UnitOfMeasure.PIECE
  );

  const phone = new Product(
    "PROD002",
    "iPhone 14",
    new Money(25000, 0, "UAH"),
    ProductCategory.ELECTRONICS,
    UnitOfMeasure.PIECE
  );

  const tShirt = new Product(
    "PROD003",
    "Cotton T-Shirt",
    new Money(600, 0, "UAH"),
    ProductCategory.CLOTHING,
    UnitOfMeasure.PIECE
  );

  const banana = new Product(
    "PROD004",
    "Banana",
    new Money(60, 0, "UAH"),
    ProductCategory.FOOD,
    UnitOfMeasure.KILOGRAM
  );

  // Display products
  console.log("Products:");
  console.log(laptop.toString());
  console.log(phone.toString());
  console.log(tShirt.toString());
  console.log(banana.toString());
  console.log();

  // Create warehouse
  const mainWarehouse = new Warehouse("Main Warehouse");

  // Create reporting service
  const reportingService = new ReportingService();

  // Create and process incoming invoice for electronics
  console.log("Processing incoming delivery from electronics supplier:");
  const electronicsInvoice = reportingService.createIncomingInvoice(
    "Electronics Supplier Ltd"
  );
  electronicsInvoice.addItem(laptop, 5);
  electronicsInvoice.addItem(phone, 10);
  console.log(electronicsInvoice.toString());
  console.log();

  const electronicsProcessed = reportingService.processIncomingInvoice(
    electronicsInvoice,
    mainWarehouse
  );
  console.log(
    `Electronics delivery processed successfully: ${electronicsProcessed}\n`
  );

  // Create and process incoming invoice for clothing and food
  console.log("Processing incoming delivery from general supplier:");
  const generalInvoice =
    reportingService.createIncomingInvoice("General Goods Inc.");
  generalInvoice.addItem(tShirt, 20);
  generalInvoice.addItem(banana, 100);
  console.log(generalInvoice.toString());
  console.log();

  const generalProcessed = reportingService.processIncomingInvoice(
    generalInvoice,
    mainWarehouse
  );
  console.log(`General delivery processed successfully: ${generalProcessed}\n`);

  // Create inventory report
  console.log("Inventory after receiving goods:");
  const inventoryReport = reportingService.createInventoryReport(mainWarehouse);
  console.log(inventoryReport.toString());
  console.log();

  // Create shopping cart
  console.log("Customer shopping:");
  const cart = new ShoppingCart("John Doe");
  cart.addProduct(laptop, 1);
  cart.addProduct(phone, 2);
  cart.addProduct(tShirt, 3);
  cart.addProduct(banana, 5);
  console.log(cart.toString());
  console.log();

  // Checkout and create outgoing invoice
  console.log("Customer checkout:");
  const outgoingInvoice = cart.checkout(reportingService);
  console.log(outgoingInvoice.toString());
  console.log();

  // Process outgoing invoice
  const outgoingProcessed = reportingService.processOutgoingInvoice(
    outgoingInvoice,
    mainWarehouse
  );
  console.log(
    `Outgoing invoice processed successfully: ${outgoingProcessed}\n`
  );

  // Create final inventory report
  console.log("Final inventory after customer purchase:");
  const finalInventoryReport =
    reportingService.createInventoryReport(mainWarehouse);
  console.log(finalInventoryReport.toString());
  console.log();

  // Demonstrate price reduction
  console.log("Price reduction example:");
  console.log(`Original iPhone price: ${phone.getPrice().toString()}`);
  phone.reducePrice(new Money(5000, 0, "UAH"));
  console.log(
    `New iPhone price after reduction: ${phone.getPrice().toString()}`
  );
  console.log();

  // List all documents
  console.log("All documents in the system:");
  const allDocuments = reportingService.getAllDocuments();
  for (const doc of allDocuments) {
    console.log(
      `- ${doc.getId()} (${doc.getType()}) - ${doc
        .getDate()
        .toLocaleDateString()}`
    );
  }
}

// Run the demonstration
main();
