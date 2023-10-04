"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Addresses = void 0;
const Base_1 = require("../Base");
class Addresses extends Base_1.BaseEndpoint {
    constructor() {
        super(...arguments);
        this.get = (query, relation) => this.httpClient.GET("/relations/{relation}/addresses", {
            params: { query, path: { relation } }
        });
        this.store = (body, relation) => this.httpClient.POST("/relations/{relation}/addresses", {
            params: { path: { relation } },
            body
        });
        this.getById = (query, relation, address) => this.httpClient.GET("/relations/{relation}/addresses/{address}", {
            params: { query, path: { relation, address } }
        });
        this.updateById = (body, relation, address) => this.httpClient.PUT("/relations/{relation}/addresses/{address}", {
            params: { path: { relation, address } },
            body
        });
        this.deleteById = (relation, address) => this.httpClient.DELETE("/relations/{relation}/addresses/{address}", {
            params: { path: { relation, address } }
        });
        this.external = {
            store: (body, relation, sourceRelation, externalId) => this.httpClient.POST("/relations/{relation}/addresses/external/{sourceRelation}/{externalId}", {
                params: { path: { relation, sourceRelation, externalId } },
                body
            })
        };
    }
}
exports.Addresses = Addresses;
