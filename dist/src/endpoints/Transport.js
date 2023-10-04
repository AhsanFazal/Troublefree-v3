"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transport = void 0;
const Base_1 = require("./Base");
class Transport extends Base_1.BaseEndpoint {
    constructor() {
        super(...arguments);
        this.get = (query) => this.httpClient.GET("/transport/transport_rides", { params: { query } });
        this.store = (query, body) => this.httpClient.POST("/transport/transport_rides", {
            params: { query },
            body
        });
        this.external = {
            update: (sourceRelation, externalId, body) => this.httpClient.PUT("/transport/transport_rides/external/{sourceRelation}/{externalId}", { params: { path: { sourceRelation, externalId } }, body }),
            delete: (sourceRelation, externalId) => this.httpClient.DELETE("/transport/transport_rides/external/{sourceRelation}/{externalId}", { params: { path: { sourceRelation, externalId } } })
        };
        this.delete = (transport_ride) => this.httpClient.DELETE("/transport/transport_rides/{transport_ride}", {
            params: { path: { transport_ride } }
        });
    }
}
exports.Transport = Transport;
