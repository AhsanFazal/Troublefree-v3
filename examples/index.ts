import Troublefree, { ClientConfig } from "../src"

const config: ClientConfig = {
  username: process.env._USERNAME as string,
  password: process.env._PASSWORD as string,
  company: process.env._COMPANY as string
}

const client = new Troublefree(config)

/**
 * This example demonstrates how to get a list of articles.
 */
async function getArticles() {
  try {
    const { data, error: _ } = await client.endpoints.articles.get({})
    return data
  } catch (error) {
    throw error
  }
}
