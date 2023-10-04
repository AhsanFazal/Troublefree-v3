import { BaseEndpoint } from "./Base"

export class Schedule extends BaseEndpoint {
  public get = (query: any) =>
    this.httpClient.GET("/exceptional_dates", { params: { query } })
}
