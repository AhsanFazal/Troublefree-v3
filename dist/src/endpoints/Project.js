"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Project = void 0;
const Base_1 = require("./Base");
class Project extends Base_1.BaseEndpoint {
    constructor() {
        super(...arguments);
        this.get = (query) => this.httpClient.GET("/projects", { params: { query } });
        this.create = (query, body) => this.httpClient.POST("/projects", { params: { query }, body });
        this.getById = (project) => this.httpClient.GET("/projects/{project}", {
            params: { path: { project } }
        });
        this.update = (project, body) => this.httpClient.PUT("/projects/{project}", {
            params: { path: { project } },
            body
        });
        this.delete = (project) => this.httpClient.DELETE("/projects/{project}", {
            params: { path: { project } }
        });
    }
}
exports.Project = Project;
