"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomAttributes = void 0;
const Base_1 = require("./Base");
class CustomAttributes extends Base_1.BaseEndpoint {
    constructor() {
        super(...arguments);
        this.get = (choicelist) => this.httpClient.GET("/choicelists/{choicelist}", {
            params: { path: { choicelist } }
        });
    }
}
exports.CustomAttributes = CustomAttributes;
