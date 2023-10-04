import { BaseEndpoint } from "../Base";
export declare class Revenue extends BaseEndpoint {
    get: (query: any, relation: any) => Promise<import("openapi-fetch").FetchResponse<{
        parameters: {
            query?: {
                start_date?: string | undefined;
                end_date?: string | undefined;
                include_draft_orders?: boolean | undefined;
            } | undefined;
            path: {
                relation: number;
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": Record<string, never>;
                };
            };
        };
    }>>;
    getByArticleGroup: (query: any, relation: any) => Promise<import("openapi-fetch").FetchResponse<{
        parameters: {
            query?: {
                start_date?: string | undefined;
                end_date?: string | undefined;
                include_draft_orders?: boolean | undefined;
            } | undefined;
            path: {
                relation: number;
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": number[];
                };
            };
        };
    }>>;
    getByMonth: (query: any, relation: any) => Promise<import("openapi-fetch").FetchResponse<{
        parameters: {
            query?: {
                start_date?: string | undefined;
                end_date?: string | undefined;
                include_draft_orders?: boolean | undefined;
            } | undefined;
            path: {
                relation: number;
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": {
                        year?: number | undefined;
                        month?: number | undefined;
                        revenue?: number | undefined;
                    }[];
                };
            };
        };
    }>>;
}
