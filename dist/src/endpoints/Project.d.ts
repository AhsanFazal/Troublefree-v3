import { BaseEndpoint } from "./Base";
export declare class Project extends BaseEndpoint {
    get: (query: any) => Promise<import("openapi-fetch").FetchResponse<{
        parameters: {
            query?: {
                page?: number | undefined;
                per_page?: number | undefined;
                include?: ("relation" | "orders" | "customFields" | "contactPerson" | "attachments" | "events" | "labels" | "mainTask" | "parentTicket" | "primaryLabel" | "tasks" | "customFieldTypes")[] | undefined;
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
    create: (query: any, body: any) => Promise<import("openapi-fetch").FetchResponse<{
        parameters: {
            query?: {
                include?: ("relation" | "orders" | "customFields" | "contactPerson" | "attachments" | "events" | "labels" | "mainTask" | "parentTicket" | "primaryLabel" | "tasks" | "customFieldTypes")[] | undefined;
            } | undefined;
        };
        requestBody?: {
            content: {
                "application/json": {
                    id?: number | undefined;
                    relation?: {
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
                    } | undefined;
                    contactPerson?: {
                        id?: number | undefined;
                        relation?: {
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
                        } | undefined;
                        gender?: "" | "F" | "M" | "V" | undefined;
                        firstName?: string | undefined;
                        lastNamePrefix?: string | undefined;
                        lastName?: string | undefined;
                        phone?: string | undefined;
                        phoneMobile?: string | undefined;
                        phoneWork?: string | undefined;
                        email?: string | undefined;
                        position?: string | undefined;
                    } | undefined;
                    name?: string | undefined;
                    description?: string | undefined;
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
    getById: (project: any) => Promise<import("openapi-fetch").FetchResponse<{
        parameters: {
            query?: {
                include?: ("relation" | "orders" | "customFields" | "contactPerson" | "attachments" | "events" | "labels" | "mainTask" | "parentTicket" | "primaryLabel" | "tasks" | "customFieldTypes")[] | undefined;
            } | undefined;
            path: {
                project: number;
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
    update: (project: any, body: any) => Promise<import("openapi-fetch").FetchResponse<{
        parameters: {
            query?: {
                include?: ("relation" | "orders" | "customFields" | "contactPerson" | "attachments" | "events" | "labels" | "mainTask" | "parentTicket" | "primaryLabel" | "tasks" | "customFieldTypes")[] | undefined;
            } | undefined;
            path: {
                project: number;
            };
        };
        requestBody?: {
            content: {
                "application/json": {
                    id?: number | undefined;
                    relation?: {
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
                    } | undefined;
                    contactPerson?: {
                        id?: number | undefined;
                        relation?: {
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
                        } | undefined;
                        gender?: "" | "F" | "M" | "V" | undefined;
                        firstName?: string | undefined;
                        lastNamePrefix?: string | undefined;
                        lastName?: string | undefined;
                        phone?: string | undefined;
                        phoneMobile?: string | undefined;
                        phoneWork?: string | undefined;
                        email?: string | undefined;
                        position?: string | undefined;
                    } | undefined;
                    name?: string | undefined;
                    description?: string | undefined;
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
    delete: (project: any) => Promise<import("openapi-fetch").FetchResponse<{
        parameters: {
            path: {
                project: number;
            };
        };
        responses: {
            204: {
                content: {};
            };
        };
    }>>;
}
