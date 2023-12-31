import { BaseEndpoint } from "./Base"

export class Articles extends BaseEndpoint {
  public get = (query: any) =>
    this.httpClient.GET("/articles", { params: { query } })

  public store = (query: any, body: any) =>
    this.httpClient.POST("/articles", { params: { query }, body })

  public update = (article: any, query: any, body: any) =>
    this.httpClient.PUT("/articles/{article}", {
      params: { query, path: { article } },
      body
    })

  public delete = (article: any) =>
    this.httpClient.DELETE("/articles/{article}", {
      params: { path: { article } }
    })

  public groups = {
    batch: (query: any, body: any) =>
      this.httpClient.POST("/article_groups/batch", {
        params: { query },
        body
      }),
    get: (query: any) =>
      this.httpClient.GET("/article_groups", { params: { query } }),
    store: (query: any, body: any) =>
      this.httpClient.POST("/article_groups", { params: { query }, body }),
    getById: (article_group: any) =>
      this.httpClient.GET("/article_groups/{article_group}", {
        params: { path: { article_group } }
      }),
    updateById: (article_group: any, query: any, body: any) =>
      this.httpClient.PUT("/article_groups/{article_group}", {
        params: { query, path: { article_group } },
        body
      }),
    deleteById: (article_group: any) =>
      this.httpClient.DELETE("/article_groups/{article_group}", {
        params: { path: { article_group } }
      })
  }

  public mainGroups = {
    batch: (query: any, body: any) =>
      this.httpClient.POST("/article_main_groups/batch", {
        params: { query },
        body
      }),
    get: (query: any) =>
      this.httpClient.GET("/article_main_groups", { params: { query } }),
    store: (query: any, body: any) =>
      this.httpClient.POST("/article_main_groups", { params: { query }, body }),
    getById: (article_main_group: any) =>
      this.httpClient.GET("/article_main_groups/{article_main_group}", {
        params: { path: { article_main_group } }
      }),
    updateById: (article_main_group: any, query: any, body: any) =>
      this.httpClient.PUT("/article_main_groups/{article_main_group}", {
        params: { query, path: { article_main_group } },
        body
      }),
    deleteById: (article_main_group: any) =>
      this.httpClient.DELETE("/article_main_groups/{article_main_group}", {
        params: { path: { article_main_group } }
      })
  }

  public translationFields = {
    get: (article: any, field: any, query: any) =>
      this.httpClient.GET("/articles/{article}/translations/{field}", {
        params: { query, path: { article, field } }
      }),
    store: (article: any, field: any, body: any) =>
      this.httpClient.POST("/articles/{article}/translations/{field}", {
        params: { path: { article, field } },
        body
      }),
    delete: (article: any, field: any, query: any) =>
      this.httpClient.DELETE("/articles/{article}/translations/{field}", {
        params: { path: { article, field }, query }
      })
  }

  public mainArticles = {
    batch: (query: any, body: any) =>
      this.httpClient.POST("/main_articles/batch", {
        params: { query },
        body
      }),
    get: (query: any) =>
      this.httpClient.GET("/main_articles", { params: { query } }),
    store: (query: any, body: any) =>
      this.httpClient.POST("/main_articles", { params: { query }, body }),
    getById: (main_article: any) =>
      this.httpClient.GET("/main_articles/{main_article}", {
        params: { path: { main_article } }
      }),
    updateById: (main_article: any, query: any, body: any) =>
      this.httpClient.PUT("/main_articles/{main_article}", {
        params: { query, path: { main_article } },
        body
      }),
    deleteById: (main_article: any) =>
      this.httpClient.DELETE("/main_articles/{main_article}", {
        params: { path: { main_article } }
      })
  }

  public warehouseStock = {
    get: (warehouse: any, query: any) =>
      this.httpClient.GET("/articles/stock/warehouses/{warehouse}", {
        params: { query, path: { warehouse } }
      }),
    mutate: (article: any, warehouse: any, body: any) =>
      this.httpClient.POST(
        "/articles/{article}/stock/warehouses/{warehouse}/mutate",
        {
          params: { path: { article, warehouse } },
          body
        }
      ),
    getById: (article: any, warehouse: any) =>
      this.httpClient.GET("/articles/{article}/stock/warehouses/{warehouse}", {
        params: { path: { article, warehouse } }
      }),
    updateById: (article: any, warehouse: any, body: any) =>
      this.httpClient.PUT("/articles/{article}/stock/warehouses/{warehouse}", {
        params: { path: { article, warehouse } },
        body
      })
  }

  public stock = {
    update: (body: any) => this.httpClient.PUT("/articles/stock", { body })
  }
}
