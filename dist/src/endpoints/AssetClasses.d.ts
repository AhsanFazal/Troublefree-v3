import { BaseEndpoint } from "./Base";
export declare class AssetClasses extends BaseEndpoint {
    get: (query: any) => Promise<import("openapi-fetch").FetchResponse<{
        responses: {
            200: {
                content: {
                    "application/json": Record<string, never>;
                };
            };
        };
    }>>;
    store: (query: any, body: any) => Promise<import("openapi-fetch").FetchResponse<{
        requestBody?: {
            content: {
                "application/json": {
                    id?: number | undefined;
                    name?: string | undefined;
                    assetNameTemplate?: string | undefined;
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
    update: (asset_class: any, body: any) => Promise<import("openapi-fetch").FetchResponse<{
        parameters: {
            path: {
                asset_class: number;
            };
        };
        requestBody?: {
            content: {
                "application/json": {
                    id?: number | undefined;
                    name?: string | undefined;
                    assetNameTemplate?: string | undefined;
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
    delete: (asset_class: any) => Promise<import("openapi-fetch").FetchResponse<{
        parameters: {
            path: {
                asset_class: number;
            };
        };
        responses: {
            204: {
                content: {};
            };
        };
    }>>;
}
