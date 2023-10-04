import { BaseEndpoint } from "./Base"

export class AssetClasses extends BaseEndpoint {
  public async get(query: any) {
    return this.httpClient.GET("/asset_classes", { params: { query } })
  }

  public async store(query: any, body: any) {
    return this.httpClient.POST("/asset_classes", { params: { query }, body })
  }

  public async update(asset_class: any, body: any) {
    return this.httpClient.PUT("/asset_classes/{asset_class}", {
      params: { path: { asset_class } },
      body
    })
  }

  public async delete(asset_class: any) {
    return this.httpClient.DELETE("/asset_classes/{asset_class}", {
      params: { path: { asset_class } }
    })
  }
}
