import { BaseEndpoint } from "./Base"

export class Project extends BaseEndpoint {
  public get = (query: any) =>
    this.httpClient.GET("/projects", { params: { query } })

  public create = (query: any, body: any) =>
    this.httpClient.POST("/projects", { params: { query }, body })

  public getById = (project: any) =>
    this.httpClient.GET("/projects/{project}", {
      params: { path: { project } }
    })

  public update = (project: any, body: any) =>
    this.httpClient.PUT("/projects/{project}", {
      params: { path: { project } },
      body
    })

  public delete = (project: any) =>
    this.httpClient.DELETE("/projects/{project}", {
      params: { path: { project } }
    })
}
