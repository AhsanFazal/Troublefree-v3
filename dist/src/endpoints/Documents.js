"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Documents = void 0;
const Base_1 = require("./Base");
class Documents extends Base_1.BaseEndpoint {
    constructor() {
        super(...arguments);
        this.store = (body, document) => this.httpClient.POST("/documents/{document}/mail", {
            params: { path: { document } },
            body
        });
        this.getLayout = (type, document) => this.httpClient.GET("/layouts/{type}/{document}", {
            params: { path: { document, type } }
        });
    }
}
exports.Documents = Documents;
