import { BaseEndpoint } from "./Base";
export declare class Offers extends BaseEndpoint {
    get: (query: any) => Promise<import("openapi-fetch").FetchResponse<{
        parameters: {
            query?: {
                status_final?: boolean | undefined;
                page?: number | undefined;
                per_page?: number | undefined;
                include?: ("customFields" | "debtor" | "employee" | "lines" | "lines.article" | "lines.lineTotal" | "lines.unitPrice")[] | undefined;
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
    store: (body: any, query: any) => Promise<import("openapi-fetch").FetchResponse<{
        parameters: {
            query?: {
                include?: ("customFields" | "debtor" | "employee" | "lines" | "lines.article" | "lines.lineTotal" | "lines.unitPrice")[] | undefined;
            } | undefined;
        };
        requestBody?: {
            content: {
                "application/json": {
                    id?: number | undefined;
                    debtor?: {
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
                    issuedAt?: string | undefined;
                    reference?: string | undefined;
                    employee?: {
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
                    daysValid?: number | undefined;
                    deliveryMethod?: number | undefined;
                    deliveryAddress?: {
                        attentionOf?: string | undefined;
                        street?: string | undefined;
                        number?: string | undefined;
                        postcode?: string | undefined;
                        district?: string | undefined;
                        city?: string | undefined;
                        countryName?: string | undefined;
                        countryId?: number | undefined;
                        country?: {
                            id?: number | undefined;
                            name?: string | undefined;
                            isoCode?: string | undefined;
                            euMember?: boolean | undefined;
                            sticky?: boolean | undefined;
                        } | undefined;
                        email?: string | undefined;
                        phone?: string | undefined;
                        GLN?: string | undefined;
                    } | undefined;
                    paymentCondition?: number | undefined;
                    status?: {
                        id?: number | undefined;
                        description?: string | undefined;
                        final?: boolean | undefined;
                    } | undefined;
                    lines?: {
                        offer?: number | undefined;
                        quantity?: number | undefined;
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
                        description?: string | undefined;
                        manufacturer?: string | undefined;
                        price?: number | undefined;
                        costPrice?: number | undefined;
                    }[] | undefined;
                    customFields?: {
                        fieldName?: string | undefined;
                    } | undefined;
                    totalPrice?: {
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
    getById: (query: any, offer: any) => Promise<import("openapi-fetch").FetchResponse<{
        parameters: {
            query?: {
                include?: ("customFields" | "debtor" | "employee" | "lines" | "lines.article" | "lines.lineTotal" | "lines.unitPrice")[] | undefined;
            } | undefined;
            path: {
                offer: number;
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
    updateById: (body: any, query: any, offer: any) => Promise<import("openapi-fetch").FetchResponse<{
        parameters: {
            query?: {
                include?: ("customFields" | "debtor" | "employee" | "lines" | "lines.article" | "lines.lineTotal" | "lines.unitPrice")[] | undefined;
            } | undefined;
            path: {
                offer: number;
            };
        };
        requestBody?: {
            content: {
                "application/json": {
                    id?: number | undefined;
                    debtor?: {
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
                    issuedAt?: string | undefined;
                    reference?: string | undefined;
                    employee?: {
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
                    daysValid?: number | undefined;
                    deliveryMethod?: number | undefined;
                    deliveryAddress?: {
                        attentionOf?: string | undefined;
                        street?: string | undefined;
                        number?: string | undefined;
                        postcode?: string | undefined;
                        district?: string | undefined;
                        city?: string | undefined;
                        countryName?: string | undefined;
                        countryId?: number | undefined;
                        country?: {
                            id?: number | undefined;
                            name?: string | undefined;
                            isoCode?: string | undefined;
                            euMember?: boolean | undefined;
                            sticky?: boolean | undefined;
                        } | undefined;
                        email?: string | undefined;
                        phone?: string | undefined;
                        GLN?: string | undefined;
                    } | undefined;
                    paymentCondition?: number | undefined;
                    status?: {
                        id?: number | undefined;
                        description?: string | undefined;
                        final?: boolean | undefined;
                    } | undefined;
                    lines?: {
                        offer?: number | undefined;
                        quantity?: number | undefined;
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
                        description?: string | undefined;
                        manufacturer?: string | undefined;
                        price?: number | undefined;
                        costPrice?: number | undefined;
                    }[] | undefined;
                    customFields?: {
                        fieldName?: string | undefined;
                    } | undefined;
                    totalPrice?: {
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
    approve: (body: any, query: any, offer: any) => Promise<import("openapi-fetch").FetchResponse<{
        parameters: {
            query?: {
                orderDeliveryAt?: string | undefined;
                orderLocation?: number | undefined;
            } | undefined;
            path: {
                offer: number;
            };
        };
        requestBody: {
            content: {
                "multipart/form-data": {
                    signature: string;
                };
            };
        };
        responses: {
            201: {
                content: {
                    "application/json": Record<string, never>;
                };
            };
        };
    }>>;
}
