"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ticketing = void 0;
const Base_1 = require("./Base");
class Ticketing extends Base_1.BaseEndpoint {
    constructor() {
        super(...arguments);
        this.scheduleEntries = {
            get: (query) => this.httpClient.GET("/ticketing/schedule_entries", { params: { query } }),
            store: (body, query) => this.httpClient.POST("/ticketing/schedule_entries", {
                params: { query },
                body
            }),
            update: (ticketingScheduleEntry, body) => this.httpClient.PUT("/ticketing/schedule_entries/{ticketingScheduleEntry}", {
                params: {
                    path: { ticketing_schedule_entry: ticketingScheduleEntry }
                },
                body
            }),
            delete: (ticketingScheduleEntry) => this.httpClient.DELETE("/ticketing/schedule_entries/{ticketingScheduleEntry}", {
                params: {
                    path: { ticketing_schedule_entry: ticketingScheduleEntry }
                }
            })
        };
    }
}
exports.Ticketing = Ticketing;
