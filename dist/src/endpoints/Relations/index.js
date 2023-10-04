"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Relations = void 0;
const Base_1 = require("../Base");
const Addresses_1 = require("./Addresses");
const ContactPersons_1 = require("./ContactPersons");
const Revenue_1 = require("./Revenue");
const IBANs_1 = require("./IBANs");
const Mandates_1 = require("./Mandates");
const PriceAgreements_1 = require("./PriceAgreements");
class Relations extends Base_1.BaseEndpoint {
    constructor(httpClient) {
        super(httpClient);
        this.get = (query) => this.httpClient.GET("/relations", { params: { query } });
        this.store = (body) => this.httpClient.POST("/relations", { body });
        this.getById = (query, relation) => this.httpClient.GET("/relations/{relation}", {
            params: { query, path: { relation } }
        });
        this.update = (body, relation) => this.httpClient.PUT("/relations/{relation}", {
            params: { path: { relation } },
            body
        });
        this.portalAuthCheck = (body) => this.httpClient.POST("/relations/portal_auth_check", {
            body
        });
        this.external = {
            get: (sourceRelation, externalId) => this.httpClient.GET("/relations/source/{sourceRelation}/id/{externalId}", {
                params: { path: { sourceRelation, externalId } }
            }),
            store: (body, sourceRelation, externalId) => this.httpClient.POST("/relations/external/{sourceRelation}/{externalId}", {
                params: { path: { sourceRelation, externalId } },
                body
            })
        };
        this.addresses = new Addresses_1.Addresses(httpClient);
        this.contactPersons = new ContactPersons_1.ContactPersons(httpClient);
        this.revenue = new Revenue_1.Revenue(httpClient);
        this.IBANs = new IBANs_1.IBANs(httpClient);
        this.mandates = new Mandates_1.Mandates(httpClient);
        this.priceAgreements = new PriceAgreements_1.PriceAgreements(httpClient);
    }
}
exports.Relations = Relations;
