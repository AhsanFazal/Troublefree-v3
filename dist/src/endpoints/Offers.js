"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Offers = void 0;
const Base_1 = require("./Base");
class Offers extends Base_1.BaseEndpoint {
    constructor() {
        super(...arguments);
        this.get = (query) => this.httpClient.GET("/offers", { params: { query } });
        this.store = (body, query) => this.httpClient.POST("/offers", { params: { query }, body });
        this.getById = (query, offer) => this.httpClient.GET("/offers/{offer}", {
            params: { query, path: { offer } }
        });
        this.updateById = (body, query, offer) => this.httpClient.PUT("/offers/{offer}", {
            params: { query, path: { offer } },
            body
        });
        this.approve = (body, query, offer) => this.httpClient.POST("/offers/{offer}/approve", {
            params: { query, path: { offer } },
            body
        });
    }
}
exports.Offers = Offers;
