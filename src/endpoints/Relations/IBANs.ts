import { BaseEndpoint } from "../Base"

export class IBANs extends BaseEndpoint {
  public get = (relation: any) =>
    this.httpClient.GET("/relations/{relation}/ibans", {
      params: { path: { relation } }
    })

  public create = (relation: any, body: any) =>
    this.httpClient.POST("/relations/{relation}/ibans", {
      params: { path: { relation } },
      body
    })

  public update = (relation: any, iban: any, body: any) =>
    this.httpClient.PUT("/relations/{relation}/ibans/{iban}", {
      params: { path: { relation, iban } },
      body
    })

  public delete = (relation: any, iban: any) =>
    this.httpClient.DELETE("/relations/{relation}/ibans/{iban}", {
      params: { path: { relation, iban } }
    })
}
