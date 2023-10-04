import { BaseEndpoint } from "./Base"

export class KnowledgeBase extends BaseEndpoint {
  public explanations = {
    get: (query: any) =>
      this.httpClient.GET("/knowledge_base/explanations", {
        params: { query }
      }),
    post: (query: any, body: any) =>
      this.httpClient.POST("/knowledge_base/explanations", {
        params: { query },
        body
      }),
    getById: (query: any, explanation: any) =>
      this.httpClient.GET("/knowledge_base/explanations/{explanation}", {
        params: { query, path: { explanation } }
      }),
    updateById: (query: any, explanation: any, body: any) =>
      this.httpClient.PUT("/knowledge_base/explanations/{explanation}", {
        params: { query, path: { explanation } },
        body
      }),
    deleteById: (explanation: any) =>
      this.httpClient.DELETE("/knowledge_base/explanations/{explanation}", {
        params: { path: { explanation } }
      })
  }

  public menuItems = {
    get: (query: any) =>
      this.httpClient.GET("/knowledge_base/menuItems", { params: { query } }),
    post: (query: any, body: any) =>
      this.httpClient.POST("/knowledge_base/menuItems", {
        params: { query },
        body
      }),
    getById: (query: any, menuItem: any) =>
      this.httpClient.GET("/knowledge_base/menuItems/{menuItem}", {
        params: { query, path: { menuItem } }
      }),
    updateById: (query: any, menuItem: any, body: any) =>
      this.httpClient.PUT("/knowledge_base/menuItems/{menuItem}", {
        params: { query, path: { menuItem } },
        body
      })
  }

  public products = {
    get: (query: any) =>
      this.httpClient.GET("/knowledge_base/products", { params: { query } }),
    post: (query: any, body: any) =>
      this.httpClient.POST("/knowledge_base/products", {
        params: { query },
        body
      }),
    updateById: (query: any, product: any, body: any) =>
      this.httpClient.PUT("/knowledge_base/products/{product}", {
        params: { query, path: { product } },
        body
      })
  }
}
