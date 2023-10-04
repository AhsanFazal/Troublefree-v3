import { BaseEndpoint } from "./Base";
export declare class Documents extends BaseEndpoint {
    store: (body: any, document: any) => Promise<import("openapi-fetch").FetchResponse<{
        parameters: {
            path: {
                document: number;
            };
        };
        requestBody?: {
            content: {
                "application/json": {
                    contactperson?: number | undefined;
                    to?: string[] | undefined;
                    cc?: string[] | undefined;
                    bcc?: string[] | undefined;
                    subject?: string | undefined;
                    body?: string | undefined;
                };
            };
        } | undefined;
        responses: {
            200: {
                content: {};
            };
        };
    }>>;
    getLayout: (type: any, document: any) => Promise<import("openapi-fetch").FetchResponse<{
        parameters: {
            path: {
                type: string;
                document: number;
            };
        };
        responses: {
            200: {
                content: {
                    "application/pdf": string;
                };
            };
        };
    }>>;
}
