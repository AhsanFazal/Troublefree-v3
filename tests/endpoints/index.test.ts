import fs from "fs"
import path from "path"

import * as endpoints from "../../src/endpoints"

const rootDir = path.resolve(__dirname, "../../src/endpoints")
const excludedFiles = ["index.ts", "Base.ts"]

const getEndpointNames = (): string[] => {
  const files = fs.readdirSync(rootDir)
  return files
    .filter((file: string) => !excludedFiles.includes(file))
    .map((file: string) => file.replace(".ts", ""))
}

const checkBodyParam = (
  functionString: string,
  functionName: string,
  className: string,
  httpMethod: string
) => {
  if (!/body\s*(,|\))/.test(functionString)) {
    throw new Error(
      `Function "${functionName}" in ${className} uses ${httpMethod} but does not have a 'body' parameter.`
    )
  }
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
    const propertyNames = Object.getOwnPropertyNames(instance)

    propertyNames.forEach((propertyName: string) => {
      // Check if property is a function
      if (typeof instance[propertyName] !== "function") return
      const functionName = propertyName
      test(`Check ${functionName} in ${EndpointClass.name}`, () => {
        const property = instance[functionName]
        if (typeof property !== "function") return

        const functionString = property.toString()
        if (!functionString.includes("this.httpClient.")) return

        const httpMethodMatch = functionString.match(/this.httpClient\.(\w+)\(/)
        const httpMethod = httpMethodMatch ? httpMethodMatch[1] : ""
        if (["POST", "PUT"].includes(httpMethod)) {
          checkBodyParam(
            functionString,
            functionName,
            EndpointClass.name,
            httpMethod
          )
        }
      })
    })
  })
})
