"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssetCustomFields = void 0;
const Base_1 = require("./Base");
class AssetCustomFields extends Base_1.BaseEndpoint {
    constructor() {
        super(...arguments);
        this.get = (query) => this.httpClient.GET("/asset_custom_fields", { params: { query } });
    }
}
exports.AssetCustomFields = AssetCustomFields;
