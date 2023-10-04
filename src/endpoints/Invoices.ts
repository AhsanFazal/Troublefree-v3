import { BaseEndpoint } from "./Base"

export class Invoices extends BaseEndpoint {
  get = (query: any) => this.httpClient.GET("/invoices", { params: { query } })
}
