import { BaseEndpoint } from "./Base"

export class Documents extends BaseEndpoint {
  public store = (body: any, document: any) =>
    this.httpClient.POST("/documents/{document}/mail", {
      params: { path: { document } },
      body
    })

  public getLayout = (type: any, document: any) =>
    this.httpClient.GET("/layouts/{type}/{document}", {
      params: { path: { document, type } }
    })
}
