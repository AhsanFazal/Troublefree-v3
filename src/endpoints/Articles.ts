import { BaseEndpoint } from "./Base"

export class Articles extends BaseEndpoint {
  public async get(query: any) {
    return this.httpClient.GET("/articles", { params: { query } })
  }

  public async store(query: any, body: any) {
    return this.httpClient.POST("/articles", { params: { query }, body })
  }

  public async update(article: any, query: any, body: any) {
    return this.httpClient.PUT("/articles/{article}", {
      params: { query, path: { article } },
      body
    })
  }

  public async delete(article: any) {
    return this.httpClient.DELETE("/articles/{article}", {
      params: { path: { article } }
    })
  }

  public groups = {
    batch: async (query: any, body: any) =>
      this.httpClient.POST("/article_groups/batch", {
        params: { query },
        body
      }),
    get: async (query: any) =>
      this.httpClient.GET("/article_groups", { params: { query } }),
    store: async (query: any, body: any) =>
      this.httpClient.POST("/article_groups", { params: { query }, body }),
    getById: async (article_group: any) =>
      this.httpClient.GET("/article_groups/{article_group}", {
        params: { path: { article_group } }
      }),
    updateById: async (article_group: any, query: any, body: any) =>
      this.httpClient.PUT("/article_groups/{article_group}", {
        params: { query, path: { article_group } },
        body
      }),
    deleteById: async (article_group: any) =>
      this.httpClient.DELETE("/article_groups/{article_group}", {
        params: { path: { article_group } }
      })
  }

  public mainGroups = {
    batch: async (query: any, body: any) =>
      this.httpClient.POST("/article_main_groups/batch", {
        params: { query },
        body
      }),
    get: async (query: any) =>
      this.httpClient.GET("/article_main_groups", { params: { query } }),
    store: async (query: any, body: any) =>
      this.httpClient.POST("/article_main_groups", { params: { query }, body }),
    getById: async (article_main_group: any) =>
      this.httpClient.GET("/article_main_groups/{article_main_group}", {
        params: { path: { article_main_group } }
      }),
    updateById: async (article_main_group: any, query: any, body: any) =>
      this.httpClient.PUT("/article_main_groups/{article_main_group}", {
        params: { query, path: { article_main_group } },
        body
      }),
    deleteById: async (article_main_group: any) =>
      this.httpClient.DELETE("/article_main_groups/{article_main_group}", {
        params: { path: { article_main_group } }
      })
  }

  public translationFields = {
    get: async (article: any, field: any, query: any) =>
      this.httpClient.GET("/articles/{article}/translations/{field}", {
        params: { query, path: { article, field } }
      }),
    store: async (article: any, field: any, body: any) =>
      this.httpClient.POST("/articles/{article}/translations/{field}", {
        params: { path: { article, field } },
        body
      }),
    delete: async (article: any, field: any, query: any) =>
      this.httpClient.DELETE("/articles/{article}/translations/{field}", {
        params: { path: { article, field }, query }
      })
  }
}
