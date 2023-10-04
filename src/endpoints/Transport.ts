import { BaseEndpoint } from "./Base"

export class Transport extends BaseEndpoint {
  public get = (query: any) =>
    this.httpClient.GET("/transport/transport_rides", { params: { query } })

  public store = (query: any, body: any) =>
    this.httpClient.POST("/transport/transport_rides", {
      params: { query },
      body
    })

  public external = {
    update: (sourceRelation: any, externalId: any, body: any) =>
      this.httpClient.PUT(
        "/transport/transport_rides/external/{sourceRelation}/{externalId}",
        { params: { path: { sourceRelation, externalId } }, body }
      ),
    delete: (sourceRelation: any, externalId: any) =>
      this.httpClient.DELETE(
        "/transport/transport_rides/external/{sourceRelation}/{externalId}",
        { params: { path: { sourceRelation, externalId } } }
      )
  }

  public delete = (transport_ride: any) =>
    this.httpClient.DELETE("/transport/transport_rides/{transport_ride}", {
      params: { path: { transport_ride } }
    })
}
