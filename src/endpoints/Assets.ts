import { BaseEndpoint } from "./Base"

export class Assets extends BaseEndpoint {
  public async get(query: any) {
    return this.httpClient.GET("/assets", { params: { query } })
  }

  public async store(query: any, body: any) {
    return this.httpClient.POST("/assets", { params: { query }, body })
  }

  public async getById(asset: any) {
    return this.httpClient.GET("/assets/{asset}", {
      params: { path: { asset } }
    })
  }

  public async updateById(asset: any, body: any) {
    return this.httpClient.PUT("/assets/{asset}", {
      params: { path: { asset } },
      body
    })
  }

  public async deleteById(asset: any) {
    return this.httpClient.DELETE("/assets/{asset}", {
      params: { path: { asset } }
    })
  }

  public external = {
    updateBySourceRelationId: async (
      sourceRelation: any,
      externalId: any,
      body: any
    ) =>
      this.httpClient.PUT("/orders/external/{sourceRelation}/{externalId}", {
        params: { path: { sourceRelation, externalId } },
        body
      })
  }
}
