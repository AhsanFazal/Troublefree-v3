describe("endpoints", () => {
  const filePath = "../../src/endpoints"
  const excluded = ["index.ts", "Base.ts"]
  it("should export all endpoints", () => {
    const fs = require("fs")
    const path = require("path")
    const files = fs.readdirSync(path.resolve(__dirname, filePath))
    const endpoints = files
      .filter((file: string) => !excluded.includes(file))
      .map((file: string) => file.replace(".ts", ""))
    expect(endpoints).toMatchSnapshot()
  })
})
