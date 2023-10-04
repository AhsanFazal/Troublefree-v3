import { BaseEndpoint } from "./Base";
export declare class Articles extends BaseEndpoint {
    get: (query: any) => Promise<import("openapi-fetch").FetchResponse<{
        parameters: {
            query?: {
                updated_after?: string | undefined;
                webshop_only?: boolean | undefined;
                page?: number | undefined;
                per_page?: number | undefined;
                include?: ("mainArticle" | "customFields")[] | undefined;
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
    store: (query: any, body: any) => Promise<import("openapi-fetch").FetchResponse<{
        parameters: {
            query?: {
                include?: ("mainArticle" | "customFields")[] | undefined;
            } | undefined;
        };
        requestBody?: {
            content: {
                "application/json": {
                    id: number;
                    barCode?: string | undefined;
                    manufacturerCode?: string | undefined;
                    code?: string | undefined;
                    unit?: string | undefined;
                    extraDescription?: string | undefined;
                    manufacturer?: number | undefined;
                    group?: number | undefined;
                    endOfLife?: boolean | undefined;
                    suppliers?: {
                        id?: number | undefined;
                        article?: any | undefined;
                        supplier?: {
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
                        supplierArticleCode?: string | undefined;
                        description?: string | undefined;
                        purchasePriceGross?: string | undefined;
                        discountRate?: string | undefined;
                        purchasePrice?: string | undefined;
                        differentPurchasePrice?: string | undefined;
                        recommendedRetailPrice?: string | undefined;
                        orderQuantity?: string | undefined;
                        purchaseQuantityIncrement?: string | undefined;
                        unitsPerSupplierPackage?: string | undefined;
                        preferredSupplier?: boolean | undefined;
                        obsolete?: boolean | undefined;
                    }[] | undefined;
                    packageWeight?: number | undefined;
                    unitPerM2?: number | undefined;
                    M2PerUnit?: number | undefined;
                    purchaseQuantityIncrement?: number | undefined;
                    purchaseQuantityMinimum?: number | undefined;
                    unitsPerPackage?: number | undefined;
                    layersPerPackage?: number | undefined;
                    dimensions?: {
                        length?: number | undefined;
                        width?: number | undefined;
                        height?: number | undefined;
                    } | undefined;
                    mainArticle?: number | undefined;
                    surchargeArticle?: number | undefined;
                    depositArticle?: number | undefined;
                    customFields?: {
                        fieldName?: string | undefined;
                    } | undefined;
                    description: string;
                    images?: Record<string, never> | undefined;
                    purchaseObligation?: "unit" | "package" | "layer" | "package_mini" | "package_mini_layer" | undefined;
                    salesPrice?: {
                        exclVat?: number | undefined;
                        inclVat?: number | undefined;
                    } | undefined;
                    resalePrice?: {
                        exclVat?: number | undefined;
                        inclVat?: number | undefined;
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
    update: (article: any, query: any, body: any) => Promise<import("openapi-fetch").FetchResponse<{
        parameters: {
            query?: {
                include?: ("mainArticle" | "customFields")[] | undefined;
            } | undefined;
            path: {
                article: number;
            };
        };
        requestBody?: {
            content: {
                "application/json": {
                    id: number;
                    barCode?: string | undefined;
                    manufacturerCode?: string | undefined;
                    code?: string | undefined;
                    unit?: string | undefined;
                    extraDescription?: string | undefined;
                    manufacturer?: number | undefined;
                    group?: number | undefined;
                    endOfLife?: boolean | undefined;
                    suppliers?: {
                        id?: number | undefined;
                        article?: any | undefined;
                        supplier?: {
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
                        supplierArticleCode?: string | undefined;
                        description?: string | undefined;
                        purchasePriceGross?: string | undefined;
                        discountRate?: string | undefined;
                        purchasePrice?: string | undefined;
                        differentPurchasePrice?: string | undefined;
                        recommendedRetailPrice?: string | undefined;
                        orderQuantity?: string | undefined;
                        purchaseQuantityIncrement?: string | undefined;
                        unitsPerSupplierPackage?: string | undefined;
                        preferredSupplier?: boolean | undefined;
                        obsolete?: boolean | undefined;
                    }[] | undefined;
                    packageWeight?: number | undefined;
                    unitPerM2?: number | undefined;
                    M2PerUnit?: number | undefined;
                    purchaseQuantityIncrement?: number | undefined;
                    purchaseQuantityMinimum?: number | undefined;
                    unitsPerPackage?: number | undefined;
                    layersPerPackage?: number | undefined;
                    dimensions?: {
                        length?: number | undefined;
                        width?: number | undefined;
                        height?: number | undefined;
                    } | undefined;
                    mainArticle?: number | undefined;
                    surchargeArticle?: number | undefined;
                    depositArticle?: number | undefined;
                    customFields?: {
                        fieldName?: string | undefined;
                    } | undefined;
                    description: string;
                    images?: Record<string, never> | undefined;
                    purchaseObligation?: "unit" | "package" | "layer" | "package_mini" | "package_mini_layer" | undefined;
                    salesPrice?: {
                        exclVat?: number | undefined;
                        inclVat?: number | undefined;
                    } | undefined;
                    resalePrice?: {
                        exclVat?: number | undefined;
                        inclVat?: number | undefined;
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
    delete: (article: any) => Promise<import("openapi-fetch").FetchResponse<{
        parameters: {
            path: {
                article: number;
            };
        };
        responses: {
            204: {
                content: {};
            };
        };
    }>>;
    groups: {
        batch: (query: any, body: any) => Promise<import("openapi-fetch").FetchResponse<{
            requestBody?: {
                content: {
                    "application/json": {
                        data?: {
                            id: number;
                            name: string;
                            mainGroup?: number | undefined;
                            images?: number[] | undefined;
                        }[] | undefined;
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
        get: (query: any) => Promise<import("openapi-fetch").FetchResponse<{
            parameters: {
                query?: {
                    include_hidden?: boolean | undefined;
                    page?: number | undefined;
                    per_page?: number | undefined;
                    include?: "customFields"[] | undefined;
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
        store: (query: any, body: any) => Promise<import("openapi-fetch").FetchResponse<{
            parameters: {
                query?: {
                    include?: "customFields"[] | undefined;
                } | undefined;
            };
            requestBody?: {
                content: {
                    "application/json": {
                        id: number;
                        name: string;
                        mainGroup?: number | undefined;
                        images?: number[] | undefined;
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
        getById: (article_group: any) => Promise<import("openapi-fetch").FetchResponse<{
            parameters: {
                query?: {
                    include?: "customFields"[] | undefined;
                } | undefined;
                path: {
                    article_group: number;
                };
            };
            responses: {
                200: {
                    content: {
                        "application/json": {
                            id: number;
                            name: string;
                            mainGroup?: number | undefined;
                            images?: number[] | undefined;
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
        updateById: (article_group: any, query: any, body: any) => Promise<import("openapi-fetch").FetchResponse<{
            parameters: {
                query?: {
                    include?: "customFields"[] | undefined;
                } | undefined;
                path: {
                    article_group: number;
                };
            };
            requestBody?: {
                content: {
                    "application/json": {
                        id: number;
                        name: string;
                        mainGroup?: number | undefined;
                        images?: number[] | undefined;
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
        deleteById: (article_group: any) => Promise<import("openapi-fetch").FetchResponse<{
            parameters: {
                path: {
                    article_group: number;
                };
            };
            responses: {
                204: {
                    content: {};
                };
            };
        }>>;
    };
    mainGroups: {
        batch: (query: any, body: any) => Promise<import("openapi-fetch").FetchResponse<{
            requestBody?: {
                content: {
                    "application/json": {
                        data?: {
                            id: number;
                            articleGroups: number[];
                            name: string;
                            images?: number[] | undefined;
                        }[] | undefined;
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
        get: (query: any) => Promise<import("openapi-fetch").FetchResponse<{
            parameters: {
                query?: {
                    page?: number | undefined;
                    per_page?: number | undefined;
                    include?: "customFields"[] | undefined;
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
        store: (query: any, body: any) => Promise<import("openapi-fetch").FetchResponse<{
            parameters: {
                query?: {
                    include?: "customFields"[] | undefined;
                } | undefined;
            };
            requestBody?: {
                content: {
                    "application/json": {
                        id: number;
                        articleGroups: number[];
                        name: string;
                        images?: number[] | undefined;
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
        getById: (article_main_group: any) => Promise<import("openapi-fetch").FetchResponse<{
            parameters: {
                query?: {
                    include?: "customFields"[] | undefined;
                } | undefined;
                path: {
                    article_main_group: number;
                };
            };
            responses: {
                200: {
                    content: {
                        "application/json": {
                            id: number;
                            articleGroups: number[];
                            name: string;
                            images?: number[] | undefined;
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
        updateById: (article_main_group: any, query: any, body: any) => Promise<import("openapi-fetch").FetchResponse<{
            parameters: {
                query?: {
                    include?: "customFields"[] | undefined;
                } | undefined;
                path: {
                    article_main_group: number;
                };
            };
            requestBody?: {
                content: {
                    "application/json": {
                        id: number;
                        articleGroups: number[];
                        name: string;
                        images?: number[] | undefined;
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
        deleteById: (article_main_group: any) => Promise<import("openapi-fetch").FetchResponse<{
            parameters: {
                path: {
                    article_main_group: number;
                };
            };
            responses: {
                204: {
                    content: {};
                };
            };
        }>>;
    };
    translationFields: {
        get: (article: any, field: any, query: any) => Promise<import("openapi-fetch").FetchResponse<{
            parameters: {
                query?: {
                    language?: string | undefined;
                } | undefined;
                path: {
                    article: number;
                    field: string;
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
        store: (article: any, field: any, body: any) => Promise<import("openapi-fetch").FetchResponse<{
            parameters: {
                path: {
                    article: number;
                    field: string;
                };
            };
            requestBody?: {
                content: {
                    "application/json": {
                        language?: number | undefined;
                        text?: string | undefined;
                    };
                };
            } | undefined;
            responses: {
                200: {
                    content: {};
                };
                201: {
                    content: {};
                };
            };
        }>>;
        delete: (article: any, field: any, query: any) => Promise<import("openapi-fetch").FetchResponse<{
            parameters: {
                query?: {
                    language?: string | undefined;
                } | undefined;
                path: {
                    article: number;
                    field: string;
                };
            };
            responses: {
                204: {
                    content: {};
                };
            };
        }>>;
    };
    mainArticles: {
        batch: (query: any, body: any) => Promise<import("openapi-fetch").FetchResponse<{
            requestBody?: {
                content: {
                    "application/json": {
                        data?: {
                            id: number;
                            group?: number | undefined;
                            name: string;
                            description?: string | undefined;
                            images?: number[] | undefined;
                        }[] | undefined;
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
        get: (query: any) => Promise<import("openapi-fetch").FetchResponse<{
            parameters: {
                query?: {
                    include_hidden?: boolean | undefined;
                    page?: number | undefined;
                    per_page?: number | undefined;
                    include?: "customFields"[] | undefined;
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
        store: (query: any, body: any) => Promise<import("openapi-fetch").FetchResponse<{
            parameters: {
                query?: {
                    include?: "customFields"[] | undefined;
                } | undefined;
            };
            requestBody?: {
                content: {
                    "application/json": {
                        id: number;
                        group?: number | undefined;
                        name: string;
                        description?: string | undefined;
                        images?: number[] | undefined;
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
        getById: (main_article: any) => Promise<import("openapi-fetch").FetchResponse<{
            parameters: {
                query?: {
                    include?: "customFields"[] | undefined;
                } | undefined;
                path: {
                    main_article: number;
                };
            };
            responses: {
                200: {
                    content: {
                        "application/json": {
                            id: number;
                            group?: number | undefined;
                            name: string;
                            description?: string | undefined;
                            images?: number[] | undefined;
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
        updateById: (main_article: any, query: any, body: any) => Promise<import("openapi-fetch").FetchResponse<{
            parameters: {
                query?: {
                    include?: "customFields"[] | undefined;
                } | undefined;
                path: {
                    main_article: number;
                };
            };
            requestBody?: {
                content: {
                    "application/json": {
                        id: number;
                        group?: number | undefined;
                        name: string;
                        description?: string | undefined;
                        images?: number[] | undefined;
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
        deleteById: (main_article: any) => Promise<import("openapi-fetch").FetchResponse<{
            parameters: {
                path: {
                    main_article: number;
                };
            };
            responses: {
                204: {
                    content: {};
                };
            };
        }>>;
    };
    warehouseStock: {
        get: (warehouse: any, query: any) => Promise<import("openapi-fetch").FetchResponse<{
            parameters: {
                query?: {
                    updatedAfter?: string | undefined;
                    page?: number | undefined;
                    per_page?: number | undefined;
                } | undefined;
                path: {
                    warehouse: string;
                };
            };
            responses: {
                200: {
                    content: {};
                };
            };
        }>>;
        mutate: (article: any, warehouse: any, body: any) => Promise<import("openapi-fetch").FetchResponse<{
            parameters: {
                path: {
                    article: number;
                    warehouse: string;
                };
            };
            requestBody?: {
                content: {
                    "application/json": {
                        id?: number | undefined;
                        mutationReason?: {
                            id?: number | undefined;
                            reason?: string | undefined;
                            isDefault?: boolean | undefined;
                        } | undefined;
                        mutationAmount?: number | undefined;
                        newStock?: number | undefined;
                        totalPrice?: number | undefined;
                        userName?: string | undefined;
                        createdAt?: string | undefined;
                        exportedAt?: string | undefined;
                        action?: string | undefined;
                        explanation?: string | undefined;
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
        getById: (article: any, warehouse: any) => Promise<import("openapi-fetch").FetchResponse<{
            parameters: {
                path: {
                    article: number;
                    warehouse: string;
                };
            };
            responses: {
                200: {
                    content: {
                        "application/json": {
                            article?: number | undefined;
                            warehouse?: number | undefined;
                            quantity?: number | undefined;
                            minimum?: number | undefined;
                            maximum?: number | undefined;
                        };
                    };
                };
            };
        }>>;
        updateById: (article: any, warehouse: any, body: any) => Promise<import("openapi-fetch").FetchResponse<{
            parameters: {
                path: {
                    article: number;
                    warehouse: string;
                };
            };
            requestBody?: {
                content: {
                    "application/json": {
                        article?: number | undefined;
                        warehouse?: number | undefined;
                        quantity?: number | undefined;
                        minimum?: number | undefined;
                        maximum?: number | undefined;
                    };
                };
            } | undefined;
            responses: {
                200: {
                    content: {};
                };
            };
        }>>;
    };
    stock: {
        update: (body: any) => Promise<import("openapi-fetch").FetchResponse<{
            requestBody?: {
                content: {
                    "application/json": {
                        article?: number | undefined;
                        warehouse?: number | undefined;
                        quantity?: number | undefined;
                        minimum?: number | undefined;
                        maximum?: number | undefined;
                    };
                };
            } | undefined;
            responses: {
                200: {
                    content: {};
                };
            };
        }>>;
    };
}
