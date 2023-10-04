"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceAgreements = void 0;
const Base_1 = require("../Base");
class PriceAgreements extends Base_1.BaseEndpoint {
    constructor() {
        super(...arguments);
        this.get = (query) => this.httpClient.GET("/relations/price_agreements", { params: { query } });
        this.store = (body, relation) => this.httpClient.POST("/relations/{relation}/price_agreements", {
            params: { path: { relation } },
            body
        });
        this.delete = (relation, priceAgreement) => this.httpClient.DELETE("/relations/{relation}/price_agreements/{priceAgreement}", {
            params: { path: { relation, priceAgreement } }
        });
        this.getArticles = (query, relation) => this.httpClient.GET("/relations/{relation}/price_agreements/articles", {
            params: { query, path: { relation } }
        });
        this.batch = {
            store: (body) => this.httpClient.POST("/relations/price_agreements/batch", {
                body
            }),
            update: (body) => this.httpClient.PUT("/relations/price_agreements/batch", {
                body
            }),
            delete: (body) => this.httpClient.DELETE("/relations/price_agreements/batch", {
                body
            })
        };
    }
}
exports.PriceAgreements = PriceAgreements;
