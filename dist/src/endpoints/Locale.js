"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Locale = void 0;
const Base_1 = require("./Base");
class Locale extends Base_1.BaseEndpoint {
    constructor() {
        super(...arguments);
        this.countries = () => this.httpClient.GET("/countries", {});
    }
}
exports.Locale = Locale;
