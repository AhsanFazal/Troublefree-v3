import { BaseEndpoint } from "../Base"

import { Addresses } from "./Addresses"
import { ContactPersons } from "./ContactPersons"
import { Revenue } from "./Revenue"
import { IBANs } from "./IBANs"
import { Mandates } from "./Mandates"
import { PriceAgreements } from "./PriceAgreements"

export class Relations extends BaseEndpoint {
  public readonly addresses: Addresses
  public readonly contactPersons: ContactPersons
  public readonly revenue: Revenue
  public readonly IBANs: IBANs
  public readonly mandates: Mandates
  public readonly priceAgreements: PriceAgreements

  public constructor(httpClient: any) {
    super(httpClient)

    this.addresses = new Addresses(httpClient)
    this.contactPersons = new ContactPersons(httpClient)
    this.revenue = new Revenue(httpClient)
    this.IBANs = new IBANs(httpClient)
    this.mandates = new Mandates(httpClient)
    this.priceAgreements = new PriceAgreements(httpClient)
  }

  public get = (query: any) =>
    this.httpClient.GET("/relations", { params: { query } })

  public store = (body: any) => this.httpClient.POST("/relations", { body })

  public getById = (query: any, relation: any) =>
    this.httpClient.GET("/relations/{relation}", {
      params: { query, path: { relation } }
    })

  public update = (body: any, relation: any) =>
    this.httpClient.PUT("/relations/{relation}", {
      params: { path: { relation } },
      body
    })

  public portalAuthCheck = (body: any) =>
    this.httpClient.POST("/relations/portal_auth_check", {
      body
    })

  public external = {
    get: (sourceRelation: any, externalId: any) =>
      this.httpClient.GET(
        "/relations/source/{sourceRelation}/id/{externalId}",
        {
          params: { path: { sourceRelation, externalId } }
        }
      ),
    store: (body: any, sourceRelation: any, externalId: any) =>
      this.httpClient.POST(
        "/relations/external/{sourceRelation}/{externalId}",
        {
          params: { path: { sourceRelation, externalId } },
          body
        }
      )
  }
}
