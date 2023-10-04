"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactPersons = void 0;
const Base_1 = require("../Base");
class ContactPersons extends Base_1.BaseEndpoint {
    constructor() {
        super(...arguments);
        this.get = (relation) => this.httpClient.GET("/relations/{relation}/contactpersons", {
            params: { path: { relation } }
        });
        this.store = (body, relation) => this.httpClient.POST("/relations/{relation}/contactpersons", {
            params: { path: { relation } },
            body
        });
        this.getById = (relation, contactperson) => this.httpClient.GET("/relations/{relation}/contactpersons/{contactperson}", {
            params: { path: { relation, contactperson } }
        });
        this.updateById = (body, relation, contactperson) => this.httpClient.PUT("/relations/{relation}/contactperson/{contactperson}", {
            params: { path: { relation, contactperson } },
            body
        });
        this.deleteById = (relation, contactperson) => this.httpClient.DELETE("/relations/{relation}/contactperson/{contactperson}", {
            params: { path: { relation, contactperson } }
        });
        this.external = {
            store: (relation, sourceRelation, externalId) => this.httpClient.POST("/relations/{relation}/contactpersons/external/{sourceRelation}/{externalId}", {
                params: { path: { relation, sourceRelation, externalId } }
            })
        };
    }
}
exports.ContactPersons = ContactPersons;
