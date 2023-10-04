import { BaseEndpoint } from "../Base"

export class ContactPersons extends BaseEndpoint {
  public get = (relation: any) =>
    this.httpClient.GET("/relations/{relation}/contactpersons", {
      params: { path: { relation } }
    })

  public store = (relation: any) =>
    this.httpClient.POST("/relations/{relation}/contactpersons", {
      params: { path: { relation } }
    })

  public getById = (relation: any, contactperson: any) =>
    this.httpClient.GET(
      "/relations/{relation}/contactpersons/{contactperson}",
      {
        params: { path: { relation, contactperson } }
      }
    )

  public updateById = (relation: any, contactperson: any) =>
    this.httpClient.PUT("/relations/{relation}/contactperson/{contactperson}", {
      params: { path: { relation, contactperson } }
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
