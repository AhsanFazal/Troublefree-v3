"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Schedule = void 0;
const Base_1 = require("./Base");
class Schedule extends Base_1.BaseEndpoint {
    constructor() {
        super(...arguments);
        this.get = (query) => this.httpClient.GET("/exceptional_dates", { params: { query } });
    }
}
exports.Schedule = Schedule;
