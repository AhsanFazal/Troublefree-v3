import { BaseEndpoint } from "./Base"

export class Offers extends BaseEndpoint {
  public get = (query: any) =>
    this.httpClient.GET("/offers", { params: { query } })

  public store = (body: any, query: any) =>
    this.httpClient.POST("/offers", { params: { query }, body })

  public getById = (query: any, offer: any) =>
    this.httpClient.GET("/offers/{offer}", {
      params: { query, path: { offer } }
    })

  public updateById = (body: any, query: any, offer: any) =>
    this.httpClient.PUT("/offers/{offer}", {
      params: { query, path: { offer } },
      body
    })

  public approve = (body: any, query: any, offer: any) =>
    this.httpClient.POST("/offers/{offer}/approve", {
      params: { query, path: { offer } },
      body
    })
}
