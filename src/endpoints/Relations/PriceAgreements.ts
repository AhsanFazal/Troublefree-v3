import { BaseEndpoint } from "../Base"

export class PriceAgreements extends BaseEndpoint {
  public get = (query: any) =>
    this.httpClient.GET("/relations/price_agreements", { params: { query } })

  public store = (body: any, relation: any) =>
    this.httpClient.POST("/relations/{relation}/price_agreements", {
      params: { path: { relation } },
      body
    })

  public delete = (relation: any, priceAgreement: any) =>
    this.httpClient.DELETE(
      "/relations/{relation}/price_agreements/{priceAgreement}",
      {
        params: { path: { relation, priceAgreement } }
      }
    )

  public getArticles = (query: any, relation: any) =>
    this.httpClient.GET("/relations/{relation}/price_agreements/articles", {
      params: { query, path: { relation } }
    })

  public batch = {
    store: (body: any) =>
      this.httpClient.POST("/relations/price_agreements/batch", {
        body
      }),
    update: (body: any) =>
      this.httpClient.PUT("/relations/price_agreements/batch", {
        body
      }),
    delete: (body: any) =>
      this.httpClient.DELETE("/relations/price_agreements/batch", {
        body
      })
  }
}
