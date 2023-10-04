import { BaseEndpoint } from "../Base"

export class Revenue extends BaseEndpoint {
  public get = (query: any, relation: any) =>
    this.httpClient.GET("/relations/{relation}/revenue", {
      params: { query, path: { relation } }
    })

  public getByArticleGroup = (query: any, relation: any) =>
    this.httpClient.GET("/relations/{relation}/revenue/by_article_group", {
      params: { query, path: { relation } }
    })

  public getByMonth = (query: any, relation: any) =>
    this.httpClient.GET("/relations/{relation}/revenue/by_month", {
      params: { query, path: { relation } }
    })
}
