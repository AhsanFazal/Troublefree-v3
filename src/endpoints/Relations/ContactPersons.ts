import { BaseEndpoint } from "../Base"

export class ContactPersons extends BaseEndpoint {
  public get = (relation: any) =>
    this.httpClient.GET("/relations/{relation}/contactpersons", {
      params: { path: { relation } }
    })

  public store = (body: any, relation: any) =>
    this.httpClient.POST("/relations/{relation}/contactpersons", {
      params: { path: { relation } },
      body
    })

  public getById = (relation: any, contactperson: any) =>
    this.httpClient.GET(
      "/relations/{relation}/contactpersons/{contactperson}",
      {
        params: { path: { relation, contactperson } }
      }
    )

  public updateById = (body: any, relation: any, contactperson: any) =>
    this.httpClient.PUT("/relations/{relation}/contactperson/{contactperson}", {
      params: { path: { relation, contactperson } },
      body
    })

  public deleteById = (relation: any, contactperson: any) =>
    this.httpClient.DELETE(
      "/relations/{relation}/contactperson/{contactperson}",
      {
        params: { path: { relation, contactperson } }
      }
    )

  public external = {
    store: (relation: any, sourceRelation: any, externalId: any) =>
      this.httpClient.POST(
        "/relations/{relation}/contactpersons/external/{sourceRelation}/{externalId}",
        {
          params: { path: { relation, sourceRelation, externalId } }
        }
      )
  }
}
