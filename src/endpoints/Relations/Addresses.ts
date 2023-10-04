import { BaseEndpoint } from "../Base"

export class Addresses extends BaseEndpoint {
  public get = (query: any, relation: any) =>
    this.httpClient.GET("/relations/{relation}/addresses", {
      params: { query, path: { relation } }
    })

  public store = (relation: any) =>
    this.httpClient.POST("/relations/{relation}/addresses", {
      params: { path: { relation } }
    })

  public getById = (query: any, relation: any, address: any) =>
    this.httpClient.GET("/relations/{relation}/addresses/{address}", {
      params: { query, path: { relation, address } }
    })

  public updateById = (relation: any, address: any) =>
    this.httpClient.PUT("/relations/{relation}/addresses/{address}", {
      params: { path: { relation, address } }
    })

  public deleteById = (relation: any, address: any) =>
    this.httpClient.DELETE("/relations/{relation}/addresses/{address}", {
      params: { path: { relation, address } }
    })

  public external = {
    store: (relation: any, sourceRelation: any, externalId: any) =>
      this.httpClient.POST(
        "/relations/{relation}/addresses/external/{sourceRelation}/{externalId}",
        {
          params: { path: { relation, sourceRelation, externalId } }
        }
      )
  }
}
