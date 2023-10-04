import fs from "fs"
import path from "path"

import * as endpoints from "../../src/endpoints"
import { BaseEndpoint } from "../../src/endpoints/Base"

const rootDir = path.resolve(__dirname, "../../src/endpoints")
const excludedFiles = ["index.ts", "Base.ts"]

const getEndpointNames = (): string[] => {
  const files = fs.readdirSync(rootDir)
  return files
    .filter((file: string) => !excludedFiles.includes(file))
    .map((file: string) => file.replace(".ts", ""))
}

const checkEndpointFunctions = (instance: any, className: string) => {
  const propertyNames = Object.getOwnPropertyNames(instance)
  propertyNames.forEach((propertyName: string) => {
    test(`Check ${propertyName} in ${className}`, () => {
      const property = instance[propertyName]
      if (typeof property !== "function") return

      const functionString = property.toString()
      if (!functionString.includes("this.httpClient.")) return

      const httpMethodMatch = functionString.match(/this.httpClient\.(\w+)\(/)
      const httpMethod = httpMethodMatch ? httpMethodMatch[1] : ""
      if (["POST", "PUT"].includes(httpMethod)) {
        checkBodyParam(functionString, propertyName, className, httpMethod)
      }
    })
  })
}

const checkBodyParam = (
  functionString: string,
  functionName: string,
  className: string,
  httpMethod: string
) => {
  // Check if the function has a body parameter
  if (!/body\s*(,|\))/.test(functionString)) {
    throw new Error(
      `Function "${functionName}" in ${className} uses ${httpMethod} but does not have a 'body' parameter.`
    )
  }
  // TODO: Check if body is passed in the second argument of this.httpClient
  // Example: this.httpClient.POST("/offers", { params: { query }, body })
}

describe("endpoints", () => {
  let endpointNames: string[]

  beforeAll(() => {
    endpointNames = getEndpointNames()
  })

  it("should export all endpoints", () => {
    expect(endpointNames).toMatchSnapshot()
  })
  Object.values(endpoints).forEach((EndpointClass: any) => {
    const instance = new EndpointClass()
    checkEndpointFunctions(instance, EndpointClass.name)
    const propertyNames = Object.getOwnPropertyNames(instance)

    propertyNames.forEach((propertyName: string) => {
      const property = instance[propertyName]
      if (property instanceof BaseEndpoint) {
        checkEndpointFunctions(
          property,
          `${EndpointClass.name}.${propertyName}`
        )
      } else if (typeof property === "object") {
        checkEndpointFunctions(
          property,
          `${EndpointClass.name}.${propertyName}`
        )
      }
    })
  })
})
