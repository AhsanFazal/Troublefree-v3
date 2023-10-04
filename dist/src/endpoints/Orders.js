"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Orders = void 0;
const Base_1 = require("./Base");
class Orders extends Base_1.BaseEndpoint {
    constructor() {
        super(...arguments);
        this.get = (query) => this.httpClient.GET("/orders", { params: { query } });
        this.store = (body, query) => this.httpClient.POST("/orders", { body, params: { query } });
        this.getById = (order) => this.httpClient.GET("/orders/{order}", {
            params: { path: { order } }
        });
        this.update = (order, body) => this.httpClient.PUT("/orders/{order}", {
            params: { path: { order } },
            body
        });
        this.delete = (order) => this.httpClient.DELETE("/orders/{order}", {
            params: { path: { order } }
        });
        this.preview = (body, query) => this.httpClient.POST("/orders/preview", { body, params: { query } });
        this.storePayment = (order, body) => this.httpClient.POST("/orders/{order}/payments", {
            params: { path: { order } },
            body
        });
        this.invoice = (order, body) => this.httpClient.POST("/orders/{order}/invoice", {
            params: { path: { order } },
            body
        });
        this.deliver = (order, body) => this.httpClient.POST("/orders/{order}/deliver", {
            params: { path: { order } },
            body
        });
        this.external = {
            updateBySourceRelationId: (sourceRelation, externalId, query, body) => this.httpClient.PUT("/orders/external/{sourceRelation}/{externalId}", {
                params: { path: { sourceRelation, externalId }, query },
                body
            }),
            deliver: (sourceRelation, externalId, body) => this.httpClient.POST("/orders/external/{sourceRelation}/{externalId}/deliver", {
                params: { path: { sourceRelation, externalId } },
                body
            })
        };
    }
}
exports.Orders = Orders;
