import { BaseEndpoint } from "./Base"

export class Assets extends BaseEndpoint {
  public get = (query: any) =>
    this.httpClient.GET("/assets", { params: { query } })

  public store = (query: any, body: any) =>
    this.httpClient.POST("/assets", { params: { query }, body })

  public getById = (asset: any) =>
    this.httpClient.GET("/assets/{asset}", {
      params: { path: { asset } }
    })

  public updateById = (asset: any, body: any) =>
    this.httpClient.PUT("/assets/{asset}", {
      params: { path: { asset } },
      body
    })

  public deleteById = (asset: any) =>
    this.httpClient.DELETE("/assets/{asset}", {
      params: { path: { asset } }
    })

  public external = {
    updateBySourceRelationId: async (
      sourceRelation: any,
      externalId: any,
      body: any
    ) =>
      this.httpClient.PUT("/orders/external/{sourceRelation}/{externalId}", {
        params: { path: { sourceRelation, externalId } },
        body
      })
  }
}
