# Warehouse Management System

This project implements a warehouse management system using TypeScript. The system allows for tracking products, managing inventory, processing invoices, and generating reports.

## Programming Principles Implemented

Below is a detailed explanation of the programming principles followed in this codebase.

### 1. SOLID Principles

#### 1.1. Single Responsibility Principle (SRP)

Classes have a single responsibility and reason to change:

- [`Money`](./models/Money.ts) class only handles monetary value operations
- [`Warehouse`](./models/Warehouse.ts) class only manages warehouse inventory
- [`ReportingService`](./services/ReportingService.ts) is solely responsible for document creation and processing

For example, the `Money` class only handles operations related to monetary values such as addition, subtraction, and comparison, without encroaching on other responsibilities.

#### 1.2. Open/Closed Principle (OCP)

The codebase is open for extension but closed for modification:

- [`Document`](./models/Document.ts) is an abstract class that can be extended with new document types
- [`InvoiceBase`](./models/InvoiceBase.ts) extends `Document` and is further extended by [`IncomingInvoice`](./models/IncomingInvoice.ts) and [`OutgoingInvoice`](./models/OutgoingInvoice.ts)

This allows adding new document types without modifying existing code, as seen in the document hierarchy.

#### 1.3. Liskov Substitution Principle (LSP)

Subtypes can be substituted for their base types:

- Both `IncomingInvoice` and `OutgoingInvoice` inherit from `InvoiceBase` and can be used in any context where an `InvoiceBase` is expected
- All documents inherit from `Document` and implement the `IDocument` interface

The `ReportingService` handles both invoice types through their common interfaces, demonstrating LSP.

#### 1.4. Interface Segregation Principle (ISP)

Clients are not forced to depend on interfaces they don't use:

- [`IProduct`](./models/Product.ts) defines only methods needed for product handling
- [`IWarehouseItem`](./models/WarehouseItem.ts) defines only methods needed for warehouse item operations
- [`IWarehouse`](./models/Warehouse.ts) defines only methods needed for warehouse management
- [`IReportingService`](./services/ReportingService.ts) defines only methods needed for reporting functionality

For example, `IWarehouseItem` contains only the methods relevant to warehouse item operations without including unnecessary product management methods.

#### 1.5. Dependency Inversion Principle (DIP)

High-level modules depend on abstractions, not concrete implementations:

- `ReportingService` depends on `IDocument`, `IWarehouse` interfaces
- `ShoppingCart` depends on `IReportingService` and `IProduct` interfaces

For example, in the `ShoppingCart.checkout` method, it depends on `IReportingService` interface rather than a concrete implementation.

### 2. DRY (Don't Repeat Yourself)

Code reuse is implemented throughout the codebase:

- Common monetary operations are encapsulated in the `Money` class
- `InvoiceBase` class contains shared functionality for all invoice types
- `normalize()` method in the `Money` class prevents duplicating normalization logic

The `InvoiceBase` class implements common invoice functionality like adding items and calculating totals, which is then reused by both `IncomingInvoice` and `OutgoingInvoice`.

### 3. KISS (Keep It Simple, Stupid)

The code maintains simplicity:

- Clear method names that describe their purpose
- Simple, focused classes with straightforward responsibilities
- Avoidance of complex, nested logic

For example, the `Money` class methods like `add`, `subtract`, and `multiply` perform simple, specific operations without unnecessary complexity.

### 4. YAGNI (You Aren't Gonna Need It)

The codebase implements only what is needed:

- No speculative functionality that isn't currently used
- Classes contain only methods that serve immediate needs
- Data structures are focused on current requirements

The `IDGenerator` class provides only the required functionality for generating unique IDs without unnecessary features like custom formats or additional validation.

### 5. Program to Interfaces not Implementations

The code consistently depends on interfaces rather than concrete implementations:

- `ReportingService` processes documents based on `IDocument` interface
- `ShoppingCart` checkout relies on `IReportingService` interface
- `Warehouse` manipulates items through `IWarehouseItem` interface

This is demonstrated in the `ReportingService` methods like `processIncomingInvoice` which operate on interface types.

### 6. Composition Over Inheritance

Composition is used when appropriate:

- `WarehouseItem` contains a `Product` rather than inheriting from it
- `Warehouse` contains a collection of `WarehouseItem` objects
- `InvoiceBase` contains `DocumentItem` objects

For example, in the `Warehouse` class, warehouse items are contained within the warehouse rather than a warehouse inheriting item properties.

### 7. Fail Fast

The code validates inputs early and throws exceptions when preconditions aren't met:

- Input validation in constructors
- Explicit checks before performing operations
- Clear error messages that identify the issue

Examples include:

- Validation of quantity in `DocumentItem` constructor
- Currency validation before monetary operations
- Stock validation before processing outgoing invoices

This ensures that errors are caught early in the process with clear error messages, as seen in the `Money.subtract` method which immediately checks for currency mismatches.

## Conclusion

This codebase demonstrates strong adherence to modern programming principles, resulting in a maintainable, extensible system with clear separation of concerns. The principles guide the structure and behavior of the code, making it more robust and easier to understand and modify.
