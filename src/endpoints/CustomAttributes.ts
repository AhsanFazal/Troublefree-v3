import { BaseEndpoint } from "./Base"

export class CustomAttributes extends BaseEndpoint {
  public get = (choicelist: any) =>
    this.httpClient.GET("/choicelists/{choicelist}", {
      params: { path: { choicelist } }
    })
}
