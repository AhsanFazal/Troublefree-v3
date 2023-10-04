import { BaseEndpoint } from "./Base"

export class AssetCustomFields extends BaseEndpoint {
  public async get(query: any) {
    return this.httpClient.GET("/asset_custom_fields", { params: { query } })
  }
}
