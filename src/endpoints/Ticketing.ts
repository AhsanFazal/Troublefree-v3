import { BaseEndpoint } from "./Base"

export class Ticketing extends BaseEndpoint {
  public scheduleEntries = {
    get: async (query: any) =>
      this.httpClient.GET("/ticketing/schedule_entries", { params: { query } }),

    store: async (body: any, query: any) =>
      this.httpClient.POST("/ticketing/schedule_entries", {
        params: { query },
        body
      }),

    update: async (ticketingScheduleEntry: any, body: any) =>
      this.httpClient.PUT(
        "/ticketing/schedule_entries/{ticketingScheduleEntry}",
        {
          params: {
            path: { ticketing_schedule_entry: ticketingScheduleEntry }
          },
          body
        }
      ),

    delete: async (ticketingScheduleEntry: any) =>
      this.httpClient.DELETE(
        "/ticketing/schedule_entries/{ticketingScheduleEntry}",
        {
          params: {
            path: { ticketing_schedule_entry: ticketingScheduleEntry }
          }
        }
      )
  }
}
