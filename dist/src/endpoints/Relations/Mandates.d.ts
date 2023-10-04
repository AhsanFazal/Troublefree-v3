import { BaseEndpoint } from "../Base";
export declare class Mandates extends BaseEndpoint {
    get: (relation: any) => Promise<import("openapi-fetch").FetchResponse<{
        parameters: {
            query?: {
                showUnavailable?: boolean | undefined;
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
    create: (relation: any, body: any) => Promise<import("openapi-fetch").FetchResponse<{
        parameters: {
            path: {
                relation: number;
            };
        };
        requestBody?: {
            content: {
                "application/json": {
                    iban?: string | undefined;
                    type?: "ONE-OFF" | "RECURRENT" | undefined;
                    scheme?: "CORE" | "B2B" | undefined;
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
    delete: (relation: any, mandate: any) => Promise<import("openapi-fetch").FetchResponse<{
        parameters: {
            path: {
                relation: number;
                mandate: number;
            };
        };
        responses: {
            204: {
                content: {};
            };
        };
    }>>;
    sign: (body: any, relation: any, mandate: any) => Promise<import("openapi-fetch").FetchResponse<{
        parameters: {
            path: {
                relation: number;
                mandate: number;
            };
        };
        requestBody: {
            content: {
                "multipart/form-data": {
                    signature: string;
                    signedBy?: string | undefined;
                };
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
}
