import { BaseEndpoint } from "./Base";
export declare class Files extends BaseEndpoint {
    download: (query: any, file: any) => Promise<import("openapi-fetch").FetchResponse<{
        parameters: {
            query?: {
                inline?: boolean | undefined;
            } | undefined;
            path: {
                file: number;
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": string;
                };
            };
        };
    }>>;
    upload: (query: any, body: any) => Promise<import("openapi-fetch").FetchResponse<{
        requestBody: {
            content: {
                "multipart/form-data": {
                    file: string;
                };
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": Record<string, never>;
                };
            };
            201: {
                content: {
                    "application/json": Record<string, never>;
                };
            };
        };
    }>>;
}
