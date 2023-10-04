"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Assets = void 0;
const Base_1 = require("./Base");
class Assets extends Base_1.BaseEndpoint {
    constructor() {
        super(...arguments);
        this.get = (query) => this.httpClient.GET("/assets", { params: { query } });
        this.store = (query, body) => this.httpClient.POST("/assets", { params: { query }, body });
        this.getById = (asset) => this.httpClient.GET("/assets/{asset}", {
            params: { path: { asset } }
        });
        this.updateById = (asset, body) => this.httpClient.PUT("/assets/{asset}", {
            params: { path: { asset } },
            body
        });
        this.deleteById = (asset) => this.httpClient.DELETE("/assets/{asset}", {
            params: { path: { asset } }
        });
        this.external = {
            updateBySourceRelationId: (sourceRelation, externalId, body) => this.httpClient.PUT("/orders/external/{sourceRelation}/{externalId}", {
                params: { path: { sourceRelation, externalId } },
                body
            })
        };
    }
}
exports.Assets = Assets;
