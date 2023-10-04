import { BaseEndpoint } from "./Base";
export declare class Ticketing extends BaseEndpoint {
    scheduleEntries: {
        get: (query: any) => Promise<import("openapi-fetch").FetchResponse<{
            parameters: {
                query?: {
                    page?: number | undefined;
                    per_page?: number | undefined;
                    include?: ("employee" | "task" | "planningPeriod")[] | undefined;
                } | undefined;
            };
            responses: {
                200: {
                    content: {
                        "application/json": Record<string, never>;
                    };
                };
            };
        }>>;
        store: (body: any, query: any) => Promise<import("openapi-fetch").FetchResponse<{
            parameters: {
                query?: {
                    include?: ("employee" | "task" | "planningPeriod")[] | undefined;
                } | undefined;
            };
            requestBody?: {
                content: {
                    "application/json": {
                        name?: string | undefined;
                        task?: Record<string, never> | undefined;
                        startsAt?: string | undefined;
                        endsAt?: string | undefined;
                        employee?: number | undefined;
                        planningPeriod?: number | undefined;
                    };
                };
            } | undefined;
            responses: {
                201: {
                    content: {
                        "application/json": Record<string, never>;
                    };
                };
            };
        }>>;
        update: (ticketingScheduleEntry: any, body: any) => Promise<import("openapi-fetch").FetchResponse<{
            parameters: {
                query?: {
                    include?: ("employee" | "task" | "planningPeriod")[] | undefined;
                } | undefined;
                path: {
                    ticketing_schedule_entry: number;
                };
            };
            requestBody?: {
                content: {
                    "application/json": {
                        name?: string | undefined;
                        task?: Record<string, never> | undefined;
                        startsAt?: string | undefined;
                        endsAt?: string | undefined;
                        employee?: number | undefined;
                        planningPeriod?: number | undefined;
                    };
                };
            } | undefined;
            responses: {
                200: {
                    content: {
                        "application/json": Record<string, never>;
                    };
                };
            };
        }>>;
        delete: (ticketingScheduleEntry: any) => Promise<import("openapi-fetch").FetchResponse<{
            parameters: {
                path: {
                    ticketing_schedule_entry: number;
                };
            };
            responses: {
                204: {
                    content: {};
                };
            };
        }>>;
    };
}
