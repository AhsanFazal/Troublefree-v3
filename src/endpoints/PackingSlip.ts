import { BaseEndpoint } from "./Base"

export class PackingSlip extends BaseEndpoint {
  get = (query: any) =>
    this.httpClient.GET("/packing_slips", { params: { query } })
}
