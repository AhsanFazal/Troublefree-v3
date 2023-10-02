import Troublefree, { ClientConfig } from "../src"
import * as endpoints from "../src/endpoints"

describe("Troublefree", () => {
  let client: Troublefree

  beforeAll(async () => {
    const config: ClientConfig = {
      username: "username",
      password: "password",
      company: "company"
    }
    client = new Troublefree(config)
  })

  it("should initialize with all defined endpoints", () => {
    for (const key in endpoints) {
      if (Object.prototype.hasOwnProperty.call(endpoints, key)) {
        const lowerCaseKey = key.charAt(0).toLowerCase() + key.slice(1)
        expect((client.endpoints as any)[lowerCaseKey]).toBeDefined()
        expect((client.endpoints as any)[lowerCaseKey]).toBeInstanceOf(
          (endpoints as any)[key]
        )
      }
    }
  })
})
