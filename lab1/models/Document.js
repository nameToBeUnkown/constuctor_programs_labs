"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Document = exports.DocumentType = void 0;
var DocumentType;
(function (DocumentType) {
    DocumentType["INCOMING"] = "Incoming Invoice";
    DocumentType["OUTGOING"] = "Outgoing Invoice";
    DocumentType["INVENTORY"] = "Inventory Report";
})(DocumentType || (exports.DocumentType = DocumentType = {}));
var Document = /** @class */ (function () {
    function Document(id, type, date) {
        if (date === void 0) { date = new Date(); }
        this.id = id;
        this.type = type;
        this.date = date;
    }
    Document.prototype.getId = function () {
        return this.id;
    };
    Document.prototype.getType = function () {
        return this.type;
    };
    Document.prototype.getDate = function () {
        return this.date;
    };
    return Document;
}());
exports.Document = Document;
