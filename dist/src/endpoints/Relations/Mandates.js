"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mandates = void 0;
const Base_1 = require("../Base");
class Mandates extends Base_1.BaseEndpoint {
    constructor() {
        super(...arguments);
        this.get = (relation) => this.httpClient.GET("/relations/{relation}/mandates", {
            params: { path: { relation } }
        });
        this.create = (relation, body) => this.httpClient.POST("/relations/{relation}/mandates", {
            params: { path: { relation } },
            body
        });
        this.delete = (relation, mandate) => this.httpClient.DELETE("/relations/{relation}/mandates/{mandate}", {
            params: { path: { relation, mandate } }
        });
        this.sign = (body, relation, mandate) => this.httpClient.POST("/relations/{relation}/mandates/{mandate}/sign", {
            params: { path: { relation, mandate } },
            body
        });
    }
}
exports.Mandates = Mandates;
