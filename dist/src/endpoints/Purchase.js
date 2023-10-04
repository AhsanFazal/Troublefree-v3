"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Purchase = void 0;
const Base_1 = require("./Base");
class Purchase extends Base_1.BaseEndpoint {
    constructor() {
        super(...arguments);
        this.invoices = {
            get: (query) => this.httpClient.GET("/purchase/invoices", { params: { query } }),
            getById: (query, purchase_invoice) => this.httpClient.GET("/purchase/invoices/{purchase_invoice}", {
                params: { query, path: { purchase_invoice } }
            }),
            create: (query, body) => this.httpClient.POST("/purchase/invoices", { params: { query }, body }),
            update: (query, purchase_invoice, body) => this.httpClient.PUT("/purchase/invoices/{purchase_invoice}", {
                params: { query, path: { purchase_invoice } },
                body
            })
        };
        this.externalInvoices = {
            get: (sourceRelation, externalId, query) => this.httpClient.GET("/purchase/invoices/external/{sourceRelation}/{externalId}", {
                params: { query, path: { sourceRelation, externalId } }
            }),
            update: (sourceRelation, externalId, query, body) => this.httpClient.PUT("/purchase/invoices/external/{sourceRelation}/{externalId}", {
                params: { query, path: { sourceRelation, externalId } },
                body
            }),
            delete: (sourceRelation, externalId) => this.httpClient.DELETE("/purchase/invoices/external/{sourceRelation}/{externalId}", { params: { path: { sourceRelation, externalId } } })
        };
        this.orders = {
            get: (query) => this.httpClient.GET("/purchase/orders", { params: { query } }),
            getById: (query, purchase_order) => this.httpClient.GET("/purchase/orders/{purchase_order}", {
                params: { query, path: { purchase_order } }
            }),
            create: (query, body) => this.httpClient.POST("/purchase/orders", { params: { query }, body }),
            update: (query, purchase_order, body) => this.httpClient.PUT("/purchase/orders/{purchase_order}", {
                params: { query, path: { purchase_order } },
                body
            }),
            delete: (purchase_order) => this.httpClient.DELETE("/purchase/orders/{purchase_order}", {
                params: { path: { purchase_order } }
            })
        };
        this.externalOrders = {
            get: (sourceRelation, externalId, query) => this.httpClient.GET("/purchase/orders/external/{sourceRelation}/{externalId}", {
                params: { query, path: { sourceRelation, externalId } }
            }),
            update: (sourceRelation, externalId, query, body) => this.httpClient.PUT("/purchase/orders/external/{sourceRelation}/{externalId}", {
                params: { query, path: { sourceRelation, externalId } },
                body
            }),
            delete: (sourceRelation, externalId) => this.httpClient.DELETE("/purchase/orders/external/{sourceRelation}/{externalId}", { params: { path: { sourceRelation, externalId } } })
        };
        this.receipts = {
            get: (query) => this.httpClient.GET("/purchase/receipts", { params: { query } }),
            getById: (query, purchase_receipt) => this.httpClient.GET("/purchase/receipts/{purchase_receipt}", {
                params: { query, path: { purchase_receipt } }
            }),
            update: (query, purchase_receipt, body) => this.httpClient.PUT("/purchase/receipts/{purchase_receipt}", {
                params: { query, path: { purchase_receipt } },
                body
            }),
            revert: (body, purchase_receipt) => this.httpClient.POST("/purchase/receipts/{purchase_receipt}/revert", {
                params: { path: { purchase_receipt } },
                body
            }),
            complete: (body, purchase_receipt) => this.httpClient.POST("/purchase/receipts/{purchase_receipt}/complete", {
                params: { path: { purchase_receipt } },
                body
            }),
            revertCompletion: (body, purchase_receipt) => this.httpClient.POST("/purchase/receipts/{purchase_receipt}/revert_completion", {
                params: { path: { purchase_receipt } },
                body
            })
        };
    }
}
exports.Purchase = Purchase;
