import { BaseEndpoint } from "./Base"

export class Offers extends BaseEndpoint {
  public get = (query: any) =>
    this.httpClient.GET("/offers", { params: { query } })

  public store = (query: any) =>
    this.httpClient.POST("/offers", { params: { query } })

  public getById = (query: any, offer: any) =>
    this.httpClient.GET("/offers/{offer}", {
      params: { query, path: { offer } }
    })

  public updateById = (query: any, offer: any) =>
    this.httpClient.PUT("/offers/{offer}", {
      params: { query, path: { offer } }
    })

  public approve = (query: any, offer: any, signature: any) =>
    this.httpClient.POST("/offers/{offer}/approve", {
      params: { query, path: { offer } },
      body: signature
    })
}
