import { BaseEndpoint } from "../Base"

export class Mandates extends BaseEndpoint {
  public get = (relation: any) =>
    this.httpClient.GET("/relations/{relation}/mandates", {
      params: { path: { relation } }
    })

  public create = (relation: any, body: any) =>
    this.httpClient.POST("/relations/{relation}/mandates", {
      params: { path: { relation } },
      body
    })

  public delete = (relation: any, mandate: any) =>
    this.httpClient.DELETE("/relations/{relation}/mandates/{mandate}", {
      params: { path: { relation, mandate } }
    })

  public sign = (body: any, relation: any, mandate: any) =>
    this.httpClient.POST("/relations/{relation}/mandates/{mandate}/sign", {
      params: { path: { relation, mandate } },
      body
    })
}
