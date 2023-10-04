import { BaseEndpoint } from "../Base";
import { Addresses } from "./Addresses";
import { ContactPersons } from "./ContactPersons";
import { Revenue } from "./Revenue";
import { IBANs } from "./IBANs";
import { Mandates } from "./Mandates";
import { PriceAgreements } from "./PriceAgreements";
export declare class Relations extends BaseEndpoint {
    readonly addresses: Addresses;
    readonly contactPersons: ContactPersons;
    readonly revenue: Revenue;
    readonly IBANs: IBANs;
    readonly mandates: Mandates;
    readonly priceAgreements: PriceAgreements;
    constructor(httpClient: any);
    get: (query: any) => Promise<import("openapi-fetch").FetchResponse<{
        parameters: {
            query?: {
                page?: number | undefined;
                per_page?: number | undefined;
                include?: ("outstandingDeposits" | "status" | "updated_after" | "include_hidden" | "deliveryAddress" | "contactAddress")[] | undefined;
                include_hidden?: boolean | undefined;
                updatedAfter?: string | undefined;
                postcode?: string | undefined;
                number?: string | undefined;
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
    store: (body: any) => Promise<import("openapi-fetch").FetchResponse<{
        requestBody?: {
            content: {
                "application/json": {
                    id?: number | undefined;
                    gender?: "" | "F" | "M" | "V" | undefined;
                    firstname?: string | undefined;
                    lastname?: string | undefined;
                    company?: string | undefined;
                    companyPrefix?: string | undefined;
                    phone?: string | undefined;
                    phoneMobile?: string | undefined;
                    phoneWork?: string | undefined;
                    fax?: string | undefined;
                    email?: string | undefined;
                    initials?: string | undefined;
                    website?: string | undefined;
                    vatNumber?: string | undefined;
                    chamberOfCommerceNumber?: string | undefined;
                    types?: number[] | undefined;
                    status?: {
                        active?: boolean | undefined;
                        verified?: boolean | undefined;
                        defunct?: boolean | undefined;
                    } | undefined;
                    group?: number | undefined;
                    applyGroupProperties?: boolean | undefined;
                    paymentConditions?: {
                        orderType?: number | undefined;
                        paymentCondition?: number | undefined;
                    }[] | undefined;
                    externalCode?: number | undefined;
                    customFields?: {
                        fieldName?: string | undefined;
                    } | undefined;
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
    getById: (query: any, relation: any) => Promise<import("openapi-fetch").FetchResponse<{
        parameters: {
            query?: {
                include?: ("outstandingDeposits" | "status" | "updated_after" | "include_hidden" | "deliveryAddress" | "contactAddress")[] | undefined;
            } | undefined;
            path: {
                relation: number;
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": {
                        id?: number | undefined;
                        gender?: "" | "F" | "M" | "V" | undefined;
                        firstname?: string | undefined;
                        lastname?: string | undefined;
                        company?: string | undefined;
                        companyPrefix?: string | undefined;
                        phone?: string | undefined;
                        phoneMobile?: string | undefined;
                        phoneWork?: string | undefined;
                        fax?: string | undefined;
                        email?: string | undefined;
                        initials?: string | undefined;
                        website?: string | undefined;
                        vatNumber?: string | undefined;
                        chamberOfCommerceNumber?: string | undefined;
                        types?: number[] | undefined;
                        status?: {
                            active?: boolean | undefined;
                            verified?: boolean | undefined;
                            defunct?: boolean | undefined;
                        } | undefined;
                        group?: number | undefined;
                        applyGroupProperties?: boolean | undefined;
                        paymentConditions?: {
                            orderType?: number | undefined;
                            paymentCondition?: number | undefined;
                        }[] | undefined;
                        externalCode?: number | undefined;
                        customFields?: {
                            fieldName?: string | undefined;
                        } | undefined;
                    };
                };
            };
            404: {
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
    update: (body: any, relation: any) => Promise<import("openapi-fetch").FetchResponse<{
        parameters: {
            path: {
                relation: number;
            };
        };
        requestBody?: {
            content: {
                "application/json": {
                    id?: number | undefined;
                    gender?: "" | "F" | "M" | "V" | undefined;
                    firstname?: string | undefined;
                    lastname?: string | undefined;
                    company?: string | undefined;
                    companyPrefix?: string | undefined;
                    phone?: string | undefined;
                    phoneMobile?: string | undefined;
                    phoneWork?: string | undefined;
                    fax?: string | undefined;
                    email?: string | undefined;
                    initials?: string | undefined;
                    website?: string | undefined;
                    vatNumber?: string | undefined;
                    chamberOfCommerceNumber?: string | undefined;
                    types?: number[] | undefined;
                    status?: {
                        active?: boolean | undefined;
                        verified?: boolean | undefined;
                        defunct?: boolean | undefined;
                    } | undefined;
                    group?: number | undefined;
                    applyGroupProperties?: boolean | undefined;
                    paymentConditions?: {
                        orderType?: number | undefined;
                        paymentCondition?: number | undefined;
                    }[] | undefined;
                    externalCode?: number | undefined;
                    customFields?: {
                        fieldName?: string | undefined;
                    } | undefined;
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
    portalAuthCheck: (body: any) => Promise<import("openapi-fetch").FetchResponse<{
        requestBody?: {
            content: {
                "application/json": {
                    email?: string | undefined;
                    password?: string | undefined;
                };
            };
        } | undefined;
        responses: {
            200: {
                content: {
                    "application/json": Record<string, never>;
                };
            };
            403: {
                content: {
                    "application/json": Record<string, never>;
                };
            };
            422: {
                content: {
                    "application/json": Record<string, never>;
                };
            };
        };
    }>>;
    external: {
        get: (sourceRelation: any, externalId: any) => Promise<import("openapi-fetch").FetchResponse<{
            parameters: {
                path: {
                    sourceRelation: number;
                    externalId: number;
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
        store: (body: any, sourceRelation: any, externalId: any) => Promise<import("openapi-fetch").FetchResponse<{
            parameters: {
                path: {
                    sourceRelation: number;
                    externalId: string;
                };
            };
            requestBody?: {
                content: {
                    "application/json": {
                        id?: number | undefined;
                        gender?: "" | "F" | "M" | "V" | undefined;
                        firstname?: string | undefined;
                        lastname?: string | undefined;
                        company?: string | undefined;
                        companyPrefix?: string | undefined;
                        phone?: string | undefined;
                        phoneMobile?: string | undefined;
                        phoneWork?: string | undefined;
                        fax?: string | undefined;
                        email?: string | undefined;
                        initials?: string | undefined;
                        website?: string | undefined;
                        vatNumber?: string | undefined;
                        chamberOfCommerceNumber?: string | undefined;
                        types?: number[] | undefined;
                        status?: {
                            active?: boolean | undefined;
                            verified?: boolean | undefined;
                            defunct?: boolean | undefined;
                        } | undefined;
                        group?: number | undefined;
                        applyGroupProperties?: boolean | undefined;
                        paymentConditions?: {
                            orderType?: number | undefined;
                            paymentCondition?: number | undefined;
                        }[] | undefined;
                        externalCode?: number | undefined;
                        customFields?: {
                            fieldName?: string | undefined;
                        } | undefined;
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
    };
}
