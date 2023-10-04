"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IBANs = void 0;
const Base_1 = require("../Base");
class IBANs extends Base_1.BaseEndpoint {
    constructor() {
        super(...arguments);
        this.get = (relation) => this.httpClient.GET("/relations/{relation}/ibans", {
            params: { path: { relation } }
        });
        this.create = (relation, body) => this.httpClient.POST("/relations/{relation}/ibans", {
            params: { path: { relation } },
            body
        });
        this.update = (relation, iban, body) => this.httpClient.PUT("/relations/{relation}/ibans/{iban}", {
            params: { path: { relation, iban } },
            body
        });
        this.delete = (relation, iban) => this.httpClient.DELETE("/relations/{relation}/ibans/{iban}", {
            params: { path: { relation, iban } }
        });
    }
}
exports.IBANs = IBANs;
