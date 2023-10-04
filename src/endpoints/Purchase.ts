import { BaseEndpoint } from "./Base"

export class Purchase extends BaseEndpoint {
  public invoices = {
    get: (query: any) =>
      this.httpClient.GET("/purchase/invoices", { params: { query } }),
    getById: (query: any, purchase_invoice: any) =>
      this.httpClient.GET("/purchase/invoices/{purchase_invoice}", {
        params: { query, path: { purchase_invoice } }
      }),
    create: (query: any, body: any) =>
      this.httpClient.POST("/purchase/invoices", { params: { query }, body }),
    update: (query: any, purchase_invoice: any, body: any) =>
      this.httpClient.PUT("/purchase/invoices/{purchase_invoice}", {
        params: { query, path: { purchase_invoice } },
        body
      })
  }

  public externalInvoices = {
    get: (sourceRelation: any, externalId: any, query: any) =>
      this.httpClient.GET(
        "/purchase/invoices/external/{sourceRelation}/{externalId}",
        {
          params: { query, path: { sourceRelation, externalId } }
        }
      ),
    update: (sourceRelation: any, externalId: any, query: any, body: any) =>
      this.httpClient.PUT(
        "/purchase/invoices/external/{sourceRelation}/{externalId}",
        {
          params: { query, path: { sourceRelation, externalId } },
          body
        }
      ),
    delete: (sourceRelation: any, externalId: any) =>
      this.httpClient.DELETE(
        "/purchase/invoices/external/{sourceRelation}/{externalId}",
        { params: { path: { sourceRelation, externalId } } }
      )
  }

  public orders = {
    get: (query: any) =>
      this.httpClient.GET("/purchase/orders", { params: { query } }),
    getById: (query: any, purchase_order: any) =>
      this.httpClient.GET("/purchase/orders/{purchase_order}", {
        params: { query, path: { purchase_order } }
      }),
    create: (query: any, body: any) =>
      this.httpClient.POST("/purchase/orders", { params: { query }, body }),
    update: (query: any, purchase_order: any, body: any) =>
      this.httpClient.PUT("/purchase/orders/{purchase_order}", {
        params: { query, path: { purchase_order } },
        body
      }),
    delete: (purchase_order: any) =>
      this.httpClient.DELETE("/purchase/orders/{purchase_order}", {
        params: { path: { purchase_order } }
      })
  }

  public externalOrders = {
    get: (sourceRelation: any, externalId: any, query: any) =>
      this.httpClient.GET(
        "/purchase/orders/external/{sourceRelation}/{externalId}",
        {
          params: { query, path: { sourceRelation, externalId } }
        }
      ),
    update: (sourceRelation: any, externalId: any, query: any, body: any) =>
      this.httpClient.PUT(
        "/purchase/orders/external/{sourceRelation}/{externalId}",
        {
          params: { query, path: { sourceRelation, externalId } },
          body
        }
      ),
    delete: (sourceRelation: any, externalId: any) =>
      this.httpClient.DELETE(
        "/purchase/orders/external/{sourceRelation}/{externalId}",
        { params: { path: { sourceRelation, externalId } } }
      )
  }

  public receipts = {
    get: (query: any) =>
      this.httpClient.GET("/purchase/receipts", { params: { query } }),
    getById: (query: any, purchase_receipt: any) =>
      this.httpClient.GET("/purchase/receipts/{purchase_receipt}", {
        params: { query, path: { purchase_receipt } }
      }),
    update: (query: any, purchase_receipt: any, body: any) =>
      this.httpClient.PUT("/purchase/receipts/{purchase_receipt}", {
        params: { query, path: { purchase_receipt } },
        body
      }),
    revert: (purchase_receipt: any) =>
      this.httpClient.POST("/purchase/receipts/{purchase_receipt}/revert", {
        params: { path: { purchase_receipt } }
      }),
    complete: (purchase_receipt: any) =>
      this.httpClient.POST("/purchase/receipts/{purchase_receipt}/complete", {
        params: { path: { purchase_receipt } }
      }),
    revertCompletion: (purchase_receipt: any) =>
      this.httpClient.POST(
        "/purchase/receipts/{purchase_receipt}/revert_completion",
        {
          params: { path: { purchase_receipt } }
        }
      )
  }
}
