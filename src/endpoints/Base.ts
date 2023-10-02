import Troublefree from ".."

export class BaseEndpoint {
  protected httpClient: Troublefree["httpClient"]

  constructor(httpClient: Troublefree["httpClient"]) {
    this.httpClient = httpClient
  }
}
