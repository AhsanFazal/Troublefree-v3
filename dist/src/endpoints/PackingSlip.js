"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackingSlip = void 0;
const Base_1 = require("./Base");
class PackingSlip extends Base_1.BaseEndpoint {
    constructor() {
        super(...arguments);
        this.get = (query) => this.httpClient.GET("/packing_slips", { params: { query } });
    }
}
exports.PackingSlip = PackingSlip;
