"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssetClasses = void 0;
const Base_1 = require("./Base");
class AssetClasses extends Base_1.BaseEndpoint {
    constructor() {
        super(...arguments);
        this.get = (query) => this.httpClient.GET("/asset_classes", { params: { query } });
        this.store = (query, body) => this.httpClient.POST("/asset_classes", { params: { query }, body });
        this.update = (asset_class, body) => this.httpClient.PUT("/asset_classes/{asset_class}", {
            params: { path: { asset_class } },
            body
        });
        this.delete = (asset_class) => this.httpClient.DELETE("/asset_classes/{asset_class}", {
            params: { path: { asset_class } }
        });
    }
}
exports.AssetClasses = AssetClasses;
