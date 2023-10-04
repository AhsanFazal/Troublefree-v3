import { BaseEndpoint } from "./Base"

export class AssetCustomFields extends BaseEndpoint {
  public get = async (query: any) =>
    this.httpClient.GET("/asset_custom_fields", { params: { query } })
}
