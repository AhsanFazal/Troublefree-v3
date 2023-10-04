import { BaseEndpoint } from "../Base";
export declare class Addresses extends BaseEndpoint {
    get: (query: any, relation: any) => Promise<import("openapi-fetch").FetchResponse<{
        parameters: {
            query?: {
                include?: "country (returns country model as country|null)"[] | undefined;
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
    store: (body: any, relation: any) => Promise<import("openapi-fetch").FetchResponse<{
        parameters: {
            path: {
                relation: number;
            };
        };
        requestBody?: {
            content: {
                "application/json": {
                    id?: number | undefined;
                    street?: string | undefined;
                    city?: string | undefined;
                    number?: string | undefined;
                    postcode?: string | undefined;
                    district?: string | undefined;
                    addressName?: string | undefined;
                    gln?: string | undefined;
                    country?: string | undefined;
                    isContact?: boolean | undefined;
                    isDelivery?: boolean | undefined;
                };
            };
        } | undefined;
        responses: {
            200: {
                content: {
                    "application/json": Record<string, never>;
                };
            };
            default: {
                content: {
                    "application/json": {
                        message: string;
                        errors?: {
                            attribute?: string[] | undefined;
                        } | undefined;
                        status_code: number;
                    };
                };
            };
        };
    }>>;
    getById: (query: any, relation: any, address: any) => Promise<import("openapi-fetch").FetchResponse<{
        parameters: {
            query?: {
                include?: "country (returns country model as country|null)"[] | undefined;
            } | undefined;
            path: {
                relation: number;
                address: number;
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
    updateById: (body: any, relation: any, address: any) => Promise<import("openapi-fetch").FetchResponse<{
        parameters: {
            path: {
                relation: number;
                address: number;
            };
        };
        requestBody?: {
            content: {
                "application/json": {
                    id?: number | undefined;
                    street?: string | undefined;
                    city?: string | undefined;
                    number?: string | undefined;
                    postcode?: string | undefined;
                    district?: string | undefined;
                    addressName?: string | undefined;
                    gln?: string | undefined;
                    country?: string | undefined;
                    isContact?: boolean | undefined;
                    isDelivery?: boolean | undefined;
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
    deleteById: (relation: any, address: any) => Promise<import("openapi-fetch").FetchResponse<{
        parameters: {
            path: {
                relation: number;
                address: number;
            };
        };
        responses: {
            204: {
                content: {};
            };
        };
    }>>;
    external: {
        store: (body: any, relation: any, sourceRelation: any, externalId: any) => Promise<import("openapi-fetch").FetchResponse<{
            parameters: {
                path: {
                    relation: number;
                    sourceRelation: number;
                    externalId: string;
                };
            };
            requestBody?: {
                content: {
                    "application/json": {
                        id?: number | undefined;
                        street?: string | undefined;
                        city?: string | undefined;
                        number?: string | undefined;
                        postcode?: string | undefined;
                        district?: string | undefined;
                        addressName?: string | undefined;
                        gln?: string | undefined;
                        country?: string | undefined;
                        isContact?: boolean | undefined;
                        isDelivery?: boolean | undefined;
                    };
                };
            } | undefined;
            responses: {
                200: {
                    content: {
                        "application/json": Record<string, never>;
                    };
                };
                default: {
                    content: {
                        "application/json": {
                            message: string;
                            errors?: {
                                attribute?: string[] | undefined;
                            } | undefined;
                            status_code: number;
                        };
                    };
                };
            };
        }>>;
    };
}
