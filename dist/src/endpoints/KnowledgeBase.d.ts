import { BaseEndpoint } from "./Base";
export declare class KnowledgeBase extends BaseEndpoint {
    explanations: {
        get: (query: any) => Promise<import("openapi-fetch").FetchResponse<{
            parameters: {
                query?: {
                    page?: number | undefined;
                    per_page?: number | undefined;
                    include?: ("menuItem" | "author" | "menuItem.product" | "children")[] | undefined;
                    search?: string | undefined;
                    product?: number | undefined;
                    menuItem?: number | undefined;
                    newestFirst?: boolean | undefined;
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
        post: (query: any, body: any) => Promise<import("openapi-fetch").FetchResponse<{
            parameters: {
                query?: {
                    include?: ("menuItem" | "author" | "menuItem.product" | "children")[] | undefined;
                } | undefined;
            };
            requestBody?: {
                content: {
                    "application/json": {
                        id?: number | undefined;
                        title?: string | undefined;
                        shortDescription?: string | undefined;
                        longDescription?: string | undefined;
                        author?: {
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
                        hidden?: boolean | undefined;
                        children?: any[] | undefined;
                        parents?: any[] | undefined;
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
        getById: (query: any, explanation: any) => Promise<import("openapi-fetch").FetchResponse<{
            parameters: {
                query?: {
                    include?: ("menuItem" | "author" | "menuItem.product" | "children")[] | undefined;
                    skipIntern?: boolean | undefined;
                } | undefined;
                path: {
                    explanation: number;
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
        updateById: (query: any, explanation: any, body: any) => Promise<import("openapi-fetch").FetchResponse<{
            parameters: {
                query?: {
                    include?: ("menuItem" | "author" | "menuItem.product" | "children")[] | undefined;
                } | undefined;
                path: {
                    explanation: number;
                };
            };
            requestBody?: {
                content: {
                    "application/json": {
                        id?: number | undefined;
                        title?: string | undefined;
                        shortDescription?: string | undefined;
                        longDescription?: string | undefined;
                        author?: {
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
                        hidden?: boolean | undefined;
                        children?: any[] | undefined;
                        parents?: any[] | undefined;
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
        deleteById: (explanation: any) => Promise<import("openapi-fetch").FetchResponse<{
            parameters: {
                path: {
                    explanation: number;
                };
            };
            responses: {
                204: {
                    content: {};
                };
            };
        }>>;
    };
    menuItems: {
        get: (query: any) => Promise<import("openapi-fetch").FetchResponse<{
            parameters: {
                query?: {
                    product?: number | undefined;
                    include?: ("explanation" | "product" | "parentMenuItem" | "childMenuItems" | "explanation.children")[] | undefined;
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
        post: (query: any, body: any) => Promise<import("openapi-fetch").FetchResponse<{
            parameters: {
                query?: {
                    include?: ("explanation" | "product" | "parentMenuItem" | "childMenuItems" | "explanation.children")[] | undefined;
                } | undefined;
            };
            requestBody?: {
                content: {
                    "application/json": {
                        id?: number | undefined;
                        menuItemName?: string | undefined;
                        role?: boolean | undefined;
                        parentMenuItem?: any | undefined;
                        product?: {
                            id?: number | undefined;
                            productName?: string | undefined;
                            contactPerson?: {
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
        getById: (query: any, menuItem: any) => Promise<import("openapi-fetch").FetchResponse<{
            parameters: {
                query?: {
                    include?: ("explanation" | "product" | "parentMenuItem" | "childMenuItems" | "explanation.children")[] | undefined;
                } | undefined;
                path: {
                    menuItem: number;
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
        updateById: (query: any, menuItem: any, body: any) => Promise<import("openapi-fetch").FetchResponse<{
            parameters: {
                query?: {
                    include?: ("explanation" | "product" | "parentMenuItem" | "childMenuItems" | "explanation.children")[] | undefined;
                } | undefined;
                path: {
                    menuItem: number;
                };
            };
            requestBody?: {
                content: {
                    "application/json": {
                        id?: number | undefined;
                        menuItemName?: string | undefined;
                        role?: boolean | undefined;
                        parentMenuItem?: any | undefined;
                        product?: {
                            id?: number | undefined;
                            productName?: string | undefined;
                            contactPerson?: {
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
    };
    products: {
        get: (query: any) => Promise<import("openapi-fetch").FetchResponse<{
            parameters: {
                query?: {
                    include?: "contactPerson"[] | undefined;
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
        post: (query: any, body: any) => Promise<import("openapi-fetch").FetchResponse<{
            parameters: {
                query?: {
                    include?: "contactPerson"[] | undefined;
                } | undefined;
            };
            requestBody?: {
                content: {
                    "application/json": {
                        id?: number | undefined;
                        productName?: string | undefined;
                        contactPerson?: {
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
        updateById: (query: any, product: any, body: any) => Promise<import("openapi-fetch").FetchResponse<{
            parameters: {
                query?: {
                    include?: "contactPerson"[] | undefined;
                } | undefined;
                path: {
                    product: number;
                };
            };
            requestBody?: {
                content: {
                    "application/json": {
                        id?: number | undefined;
                        productName?: string | undefined;
                        contactPerson?: {
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
    };
}
