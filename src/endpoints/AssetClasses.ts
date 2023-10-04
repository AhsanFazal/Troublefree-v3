import { BaseEndpoint } from "./Base"

export class AssetClasses extends BaseEndpoint {
  public get = async (query: any) =>
    this.httpClient.GET("/asset_classes", { params: { query } })

  public store = async (query: any, body: any) =>
    this.httpClient.POST("/asset_classes", { params: { query }, body })

  public update = async (asset_class: any, body: any) =>
    this.httpClient.PUT("/asset_classes/{asset_class}", {
      params: { path: { asset_class } },
      body
    })

  public delete = async (asset_class: any) =>
    this.httpClient.DELETE("/asset_classes/{asset_class}", {
      params: { path: { asset_class } }
    })
}
