import { BaseEndpoint } from "./Base"

export class Locale extends BaseEndpoint {
  public countries = () => this.httpClient.GET("/countries", {})
}
