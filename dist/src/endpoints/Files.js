"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Files = void 0;
const Base_1 = require("./Base");
class Files extends Base_1.BaseEndpoint {
    constructor() {
        super(...arguments);
        this.download = (query, file) => this.httpClient.GET("/files/{file}/download", {
            params: { query, path: { file } }
        });
        this.upload = (query, body) => this.httpClient.POST("/files/upload", { params: { query }, body });
    }
}
exports.Files = Files;
