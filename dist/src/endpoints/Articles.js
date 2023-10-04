"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Articles = void 0;
const Base_1 = require("./Base");
class Articles extends Base_1.BaseEndpoint {
    constructor() {
        super(...arguments);
        this.get = (query) => this.httpClient.GET("/articles", { params: { query } });
        this.store = (query, body) => this.httpClient.POST("/articles", { params: { query }, body });
        this.update = (article, query, body) => this.httpClient.PUT("/articles/{article}", {
            params: { query, path: { article } },
            body
        });
        this.delete = (article) => this.httpClient.DELETE("/articles/{article}", {
            params: { path: { article } }
        });
        this.groups = {
            batch: (query, body) => this.httpClient.POST("/article_groups/batch", {
                params: { query },
                body
            }),
            get: (query) => this.httpClient.GET("/article_groups", { params: { query } }),
            store: (query, body) => this.httpClient.POST("/article_groups", { params: { query }, body }),
            getById: (article_group) => this.httpClient.GET("/article_groups/{article_group}", {
                params: { path: { article_group } }
            }),
            updateById: (article_group, query, body) => this.httpClient.PUT("/article_groups/{article_group}", {
                params: { query, path: { article_group } },
                body
            }),
            deleteById: (article_group) => this.httpClient.DELETE("/article_groups/{article_group}", {
                params: { path: { article_group } }
            })
        };
        this.mainGroups = {
            batch: (query, body) => this.httpClient.POST("/article_main_groups/batch", {
                params: { query },
                body
            }),
            get: (query) => this.httpClient.GET("/article_main_groups", { params: { query } }),
            store: (query, body) => this.httpClient.POST("/article_main_groups", { params: { query }, body }),
            getById: (article_main_group) => this.httpClient.GET("/article_main_groups/{article_main_group}", {
                params: { path: { article_main_group } }
            }),
            updateById: (article_main_group, query, body) => this.httpClient.PUT("/article_main_groups/{article_main_group}", {
                params: { query, path: { article_main_group } },
                body
            }),
            deleteById: (article_main_group) => this.httpClient.DELETE("/article_main_groups/{article_main_group}", {
                params: { path: { article_main_group } }
            })
        };
        this.translationFields = {
            get: (article, field, query) => this.httpClient.GET("/articles/{article}/translations/{field}", {
                params: { query, path: { article, field } }
            }),
            store: (article, field, body) => this.httpClient.POST("/articles/{article}/translations/{field}", {
                params: { path: { article, field } },
                body
            }),
            delete: (article, field, query) => this.httpClient.DELETE("/articles/{article}/translations/{field}", {
                params: { path: { article, field }, query }
            })
        };
        this.mainArticles = {
            batch: (query, body) => this.httpClient.POST("/main_articles/batch", {
                params: { query },
                body
            }),
            get: (query) => this.httpClient.GET("/main_articles", { params: { query } }),
            store: (query, body) => this.httpClient.POST("/main_articles", { params: { query }, body }),
            getById: (main_article) => this.httpClient.GET("/main_articles/{main_article}", {
                params: { path: { main_article } }
            }),
            updateById: (main_article, query, body) => this.httpClient.PUT("/main_articles/{main_article}", {
                params: { query, path: { main_article } },
                body
            }),
            deleteById: (main_article) => this.httpClient.DELETE("/main_articles/{main_article}", {
                params: { path: { main_article } }
            })
        };
        this.warehouseStock = {
            get: (warehouse, query) => this.httpClient.GET("/articles/stock/warehouses/{warehouse}", {
                params: { query, path: { warehouse } }
            }),
            mutate: (article, warehouse, body) => this.httpClient.POST("/articles/{article}/stock/warehouses/{warehouse}/mutate", {
                params: { path: { article, warehouse } },
                body
            }),
            getById: (article, warehouse) => this.httpClient.GET("/articles/{article}/stock/warehouses/{warehouse}", {
                params: { path: { article, warehouse } }
            }),
            updateById: (article, warehouse, body) => this.httpClient.PUT("/articles/{article}/stock/warehouses/{warehouse}", {
                params: { path: { article, warehouse } },
                body
            })
        };
        this.stock = {
            update: (body) => this.httpClient.PUT("/articles/stock", { body })
        };
    }
}
exports.Articles = Articles;
