"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KnowledgeBase = void 0;
const Base_1 = require("./Base");
class KnowledgeBase extends Base_1.BaseEndpoint {
    constructor() {
        super(...arguments);
        this.explanations = {
            get: (query) => this.httpClient.GET("/knowledge_base/explanations", {
                params: { query }
            }),
            post: (query, body) => this.httpClient.POST("/knowledge_base/explanations", {
                params: { query },
                body
            }),
            getById: (query, explanation) => this.httpClient.GET("/knowledge_base/explanations/{explanation}", {
                params: { query, path: { explanation } }
            }),
            updateById: (query, explanation, body) => this.httpClient.PUT("/knowledge_base/explanations/{explanation}", {
                params: { query, path: { explanation } },
                body
            }),
            deleteById: (explanation) => this.httpClient.DELETE("/knowledge_base/explanations/{explanation}", {
                params: { path: { explanation } }
            })
        };
        this.menuItems = {
            get: (query) => this.httpClient.GET("/knowledge_base/menuItems", { params: { query } }),
            post: (query, body) => this.httpClient.POST("/knowledge_base/menuItems", {
                params: { query },
                body
            }),
            getById: (query, menuItem) => this.httpClient.GET("/knowledge_base/menuItems/{menuItem}", {
                params: { query, path: { menuItem } }
            }),
            updateById: (query, menuItem, body) => this.httpClient.PUT("/knowledge_base/menuItems/{menuItem}", {
                params: { query, path: { menuItem } },
                body
            })
        };
        this.products = {
            get: (query) => this.httpClient.GET("/knowledge_base/products", { params: { query } }),
            post: (query, body) => this.httpClient.POST("/knowledge_base/products", {
                params: { query },
                body
            }),
            updateById: (query, product, body) => this.httpClient.PUT("/knowledge_base/products/{product}", {
                params: { query, path: { product } },
                body
            })
        };
    }
}
exports.KnowledgeBase = KnowledgeBase;
