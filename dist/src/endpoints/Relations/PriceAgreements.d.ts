import { BaseEndpoint } from "../Base";
export declare class PriceAgreements extends BaseEndpoint {
    get: (query: any) => Promise<import("openapi-fetch").FetchResponse<{
        parameters: {
            query?: {
                page?: number | undefined;
                per_page?: number | undefined;
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
                    relation?: number | undefined;
                    agreementType?: string | undefined;
                    article?: {
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
                    } | undefined;
                    conditionQuantity?: number | undefined;
                    conditionType?: string | undefined;
                    discountPercentage?: number | undefined;
                    fixedPrice?: number | undefined;
                    type?: number | undefined;
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
    delete: (relation: any, priceAgreement: any) => Promise<import("openapi-fetch").FetchResponse<{
        parameters: {
            path: {
                relation: number;
                priceAgreement: number;
            };
        };
        responses: {
            204: {
                content: {};
            };
        };
    }>>;
    getArticles: (query: any, relation: any) => Promise<import("openapi-fetch").FetchResponse<{
        parameters: {
            query?: {
                page?: number | undefined;
                per_page?: number | undefined;
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
    batch: {
        store: (body: any) => Promise<import("openapi-fetch").FetchResponse<{
            requestBody?: {
                content: {
                    "application/json": {
                        data?: {
                            id?: number | undefined;
                            relation?: number | undefined;
                            agreementType?: string | undefined;
                            article?: {
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
                            } | undefined;
                            conditionQuantity?: number | undefined;
                            conditionType?: string | undefined;
                            discountPercentage?: number | undefined;
                            fixedPrice?: number | undefined;
                            type?: number | undefined;
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
        update: (body: any) => Promise<import("openapi-fetch").FetchResponse<{
            requestBody?: {
                content: {
                    "application/json": {
                        data?: {
                            id?: number | undefined;
                            relation?: number | undefined;
                            agreementType?: string | undefined;
                            article?: {
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
                            } | undefined;
                            conditionQuantity?: number | undefined;
                            conditionType?: string | undefined;
                            discountPercentage?: number | undefined;
                            fixedPrice?: number | undefined;
                            type?: number | undefined;
                        }[] | undefined;
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
        delete: (body: any) => Promise<import("openapi-fetch").FetchResponse<{
            requestBody?: {
                content: {
                    "application/json": {
                        data?: {
                            id?: number | undefined;
                        }[] | undefined;
                    };
                };
            } | undefined;
            responses: {
                204: {
                    content: {};
                };
            };
        }>>;
    };
}
