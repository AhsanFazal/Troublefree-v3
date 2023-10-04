import { BaseEndpoint } from "./Base"

export class AssetClasses extends BaseEndpoint {
  public get = (query: any) =>
    this.httpClient.GET("/asset_classes", { params: { query } })

  public store = (query: any, body: any) =>
    this.httpClient.POST("/asset_classes", { params: { query }, body })

  public update = (asset_class: any, body: any) =>
    this.httpClient.PUT("/asset_classes/{asset_class}", {
      params: { path: { asset_class } },
      body
    })

  public delete = (asset_class: any) =>
    this.httpClient.DELETE("/asset_classes/{asset_class}", {
      params: { path: { asset_class } }
    })
}
