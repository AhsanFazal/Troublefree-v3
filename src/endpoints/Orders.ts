import { BaseEndpoint } from "./Base"

export class Orders extends BaseEndpoint {
  public get = (query: any) =>
    this.httpClient.GET("/orders", { params: { query } })

  public store = (body: any, query: any) =>
    this.httpClient.POST("/orders", { body, params: { query } })

  public getById = (order: any) =>
    this.httpClient.GET("/orders/{order}", {
      params: { path: { order } }
    })

  public update = (order: any, body: any) =>
    this.httpClient.PUT("/orders/{order}", {
      params: { path: { order } },
      body
    })

  public delete = (order: any) =>
    this.httpClient.DELETE("/orders/{order}", {
      params: { path: { order } }
    })

  public preview = (body: any, query: any) =>
    this.httpClient.POST("/orders/preview", { body, params: { query } })

  public storePayment = (order: any, body: any) =>
    this.httpClient.POST("/orders/{order}/payments", {
      params: { path: { order } },
      body
    })

  public invoice = (order: any, body: any) =>
    this.httpClient.POST("/orders/{order}/invoice", {
      params: { path: { order } },
      body
    })

  public deliver = (order: any, body: any) =>
    this.httpClient.POST("/orders/{order}/deliver", {
      params: { path: { order } },
      body
    })

  public external = {
    updateBySourceRelationId: async (
      sourceRelation: any,
      externalId: any,
      query: any,
      body: any
    ) =>
      this.httpClient.PUT("/orders/external/{sourceRelation}/{externalId}", {
        params: { path: { sourceRelation, externalId }, query },
        body
      }),

    deliver: async (sourceRelation: any, externalId: any, body: any) =>
      this.httpClient.POST(
        "/orders/external/{sourceRelation}/{externalId}/deliver",
        {
          params: { path: { sourceRelation, externalId } },
          body
        }
      )
  }
}
