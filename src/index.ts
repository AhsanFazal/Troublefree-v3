import createClient from "openapi-fetch"
import https from "https"
import * as endpoints from "./endpoints"
import { paths } from "./lib/api"

export interface ClientConfig {
  username: string
  password: string
  company: string
}

type EndpointTypes = typeof endpoints

type EndpointClassInstances = {
  [K in keyof EndpointTypes]: InstanceType<EndpointTypes[K]>
}

type EndpointInstances = {
  [K in Extract<
    keyof EndpointClassInstances,
    string
  > as `${K extends `${infer First}${infer Rest}`
    ? Lowercase<First>
    : ""}${K extends `${infer First}${infer Rest}`
    ? Rest
    : ""}`]: EndpointClassInstances[K]
}

export default class Troublefree {
  // Private properties
  private httpClient: ReturnType<typeof createClient<paths>>
  private baseURL: string = "https://retail.troublefree.nl/v3/api"

  // Public properties
  public endpoints: EndpointInstances = {} as any

  constructor(config: ClientConfig) {
    const basicAuth = Buffer.from(
      `${config.username}:${config.password}`
    ).toString("base64")

    console.log(`username: ${config.username}`)
    console.log(`password: ${config.password}`)
    console.log(`company: ${config.company}`)
    console.log(`basicAuth: ${basicAuth}`)
    this.httpClient = createClient<paths>({
      baseUrl: this.baseURL,
      headers: {
        authorization: `Basic ${basicAuth}`,
        company: config.company,
        "Content-Type": "application/json",
        Accept: "*/*"
      }
    })
    this.initializeEndpoints()
  }

  private initializeEndpoints(): void {
    for (const key in endpoints) {
      if (Object.prototype.hasOwnProperty.call(endpoints, key)) {
        const endpointKey = key as keyof EndpointClassInstances
        const lowerCaseKey = (endpointKey.charAt(0).toLowerCase() +
          endpointKey.slice(1)) as keyof EndpointInstances
        // Bypass TypeScript type checking by asserting as 'any'
        ;(this.endpoints as any)[lowerCaseKey] = new endpoints[endpointKey](
          this.httpClient
        )
      }
    }
    // Restore type safety by asserting back to EndpointInstances
    this.endpoints = this.endpoints as EndpointInstances
  }
}
