import { BaseEndpoint } from "./Base"

export class Files extends BaseEndpoint {
  public download = (query: any, file: any) =>
    this.httpClient.GET("/files/{file}/download", {
      params: { query, path: { file } }
    })
}
