import { BaseEndpoint } from "../Base";
export declare class IBANs extends BaseEndpoint {
    get: (relation: any) => Promise<import("openapi-fetch").FetchResponse<{
        parameters: {
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
    create: (relation: any, body: any) => Promise<import("openapi-fetch").FetchResponse<{
        parameters: {
            path: {
                relation: number;
            };
        };
        requestBody?: {
            content: {
                "application/json": {
                    id?: number | undefined;
                    relation?: number | undefined;
                    iban?: string | undefined;
                    bic?: string | undefined;
                    default?: boolean | undefined;
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
    update: (relation: any, iban: any, body: any) => Promise<import("openapi-fetch").FetchResponse<{
        parameters: {
            path: {
                relation: number;
                iban: number;
            };
        };
        requestBody?: {
            content: {
                "application/json": {
                    id?: number | undefined;
                    relation?: number | undefined;
                    iban?: string | undefined;
                    bic?: string | undefined;
                    default?: boolean | undefined;
                };
            };
        } | undefined;
        responses: {
            202: {
                content: {
                    "application/json": Record<string, never>;
                };
            };
        };
    }>>;
    delete: (relation: any, iban: any) => Promise<import("openapi-fetch").FetchResponse<{
        parameters: {
            path: {
                relation: number;
                iban: number;
            };
        };
        responses: {
            204: {
                content: {};
            };
        };
    }>>;
}
