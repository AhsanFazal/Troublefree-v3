import { BaseEndpoint } from "./Base";
export declare class Assets extends BaseEndpoint {
    get: (query: any) => Promise<import("openapi-fetch").FetchResponse<{
        parameters: {
            query?: {
                page?: number | undefined;
                per_page?: number | undefined;
                onlyRoot?: boolean | undefined;
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
        requestBody?: {
            content: {
                "application/json": {
                    id?: number | undefined;
                    assetClass?: number | undefined;
                    owner?: number | undefined;
                    name?: string | undefined;
                    description?: string | undefined;
                    parentAsset?: number | undefined;
                    article?: number | undefined;
                    mainUser?: number | undefined;
                    address?: number | undefined;
                    addressRoom?: number | undefined;
                    commissionedAt?: string | undefined;
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
    getById: (asset: any) => Promise<import("openapi-fetch").FetchResponse<{
        parameters: {
            path: {
                asset: number;
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": {
                        id?: number | undefined;
                        assetClass?: number | undefined;
                        owner?: number | undefined;
                        name?: string | undefined;
                        description?: string | undefined;
                        parentAsset?: number | undefined;
                        article?: number | undefined;
                        mainUser?: number | undefined;
                        address?: number | undefined;
                        addressRoom?: number | undefined;
                        commissionedAt?: string | undefined;
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
    updateById: (asset: any, body: any) => Promise<import("openapi-fetch").FetchResponse<{
        parameters: {
            path: {
                asset: number;
            };
        };
        requestBody?: {
            content: {
                "application/json": {
                    id?: number | undefined;
                    assetClass?: number | undefined;
                    owner?: number | undefined;
                    name?: string | undefined;
                    description?: string | undefined;
                    parentAsset?: number | undefined;
                    article?: number | undefined;
                    mainUser?: number | undefined;
                    address?: number | undefined;
                    addressRoom?: number | undefined;
                    commissionedAt?: string | undefined;
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
    deleteById: (asset: any) => Promise<import("openapi-fetch").FetchResponse<{
        parameters: {
            path: {
                asset: number;
            };
        };
        responses: {
            204: {
                content: {};
            };
        };
    }>>;
    external: {
        updateBySourceRelationId: (sourceRelation: any, externalId: any, body: any) => Promise<import("openapi-fetch").FetchResponse<{
            parameters: {
                query?: {
                    include?: ("project" | "prePaidTotalAmount" | "orderSources" | "debtor" | "employee" | "invoicingCondition" | "lines")[] | undefined;
                } | undefined;
                path: {
                    sourceRelation: number;
                    externalId: string;
                };
            };
            requestBody?: {
                content: {
                    "application/json": {
                        id: number;
                        issuedAt?: string | undefined;
                        updatedAt?: string | undefined;
                        debtor: {
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
                        invoiceRelation?: {
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
                        reference?: string | undefined;
                        orderType?: number | undefined;
                        employee: {
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
                        deliveryAt?: string | undefined;
                        deliveryDateUntil?: string | undefined;
                        deliveryMethod?: number | undefined;
                        deliveryPreferredTime?: string | undefined;
                        commentAboveLines?: string | undefined;
                        commentBelowLines?: string | undefined;
                        internalComment?: string | undefined;
                        deliveryAddress?: {
                            attentionOf?: string | undefined;
                            street?: string | undefined;
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
                        delivered?: number | undefined;
                        invoiced?: number | undefined;
                        reserved?: number | undefined;
                        releaseInvoicingCondition?: number | undefined;
                        extraComment?: string | undefined;
                        lines: {
                            id: number;
                            headerNumber?: number | undefined;
                            headerText?: string | undefined;
                            sortOrder?: number | undefined;
                            quantity?: number | undefined;
                            quantityReserved?: number | undefined;
                            quantityPicked?: number | undefined;
                            quantityToDeliver?: number | undefined;
                            unit?: string | undefined;
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
                            }[] | undefined;
                            description?: string | undefined;
                            remark?: string | undefined;
                            price?: number | undefined;
                        }[];
                        invoicingNotBefore?: string | undefined;
                        invoicingCondition?: number | undefined;
                        customFields?: {
                            fieldName?: string | undefined;
                        } | undefined;
                        pickingLocation?: string | undefined;
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
