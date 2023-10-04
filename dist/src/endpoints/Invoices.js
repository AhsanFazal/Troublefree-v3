"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Invoices = void 0;
const Base_1 = require("./Base");
class Invoices extends Base_1.BaseEndpoint {
    constructor() {
        super(...arguments);
        this.get = (query) => this.httpClient.GET("/invoices", { params: { query } });
    }
}
exports.Invoices = Invoices;
