"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Revenue = void 0;
const Base_1 = require("../Base");
class Revenue extends Base_1.BaseEndpoint {
    constructor() {
        super(...arguments);
        this.get = (query, relation) => this.httpClient.GET("/relations/{relation}/revenue", {
            params: { query, path: { relation } }
        });
        this.getByArticleGroup = (query, relation) => this.httpClient.GET("/relations/{relation}/revenue/by_article_group", {
            params: { query, path: { relation } }
        });
        this.getByMonth = (query, relation) => this.httpClient.GET("/relations/{relation}/revenue/by_month", {
            params: { query, path: { relation } }
        });
    }
}
exports.Revenue = Revenue;
