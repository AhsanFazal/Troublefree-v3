import { BaseEndpoint } from "./Base"

export class Documents extends BaseEndpoint {
  public store = async (body: any, document: any) =>
    this.httpClient.POST("/documents/{document}/mail", {
      params: { path: { document } },
      body
    })

  public getLayout = async (type: any, document: any) =>
    this.httpClient.GET("/layouts/{type}/{document}", {
      params: { path: { document, type } }
    })
}
