import { BaseEndpoint } from "./Base"

export class Articles extends BaseEndpoint {
  public async get(query: any) {
    return this.httpClient.GET("/articles", { params: { query } })
  }
}
