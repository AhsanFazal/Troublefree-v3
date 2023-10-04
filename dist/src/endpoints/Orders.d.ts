import { BaseEndpoint } from "./Base";
export declare class Orders extends BaseEndpoint {
    get: (query: any) => Promise<import("openapi-fetch").FetchResponse<{
        parameters: {
            query?: {
                page?: number | undefined;
                per_page?: number | undefined;
                include?: ("project" | "prePaidTotalAmount" | "orderSources" | "debtor" | "employee" | "invoicingCondition" | "lines")[] | undefined;
                orderby?: string | undefined;
                search?: string | undefined;
                status?: "not_completed" | "not_delivered" | "not_invoiced" | "completed" | "ready_for_delivery" | "delivered_invoiced_locked" | "partially_delivered" | "not_invoiced_and_not_delivered" | "not_reserved" | "delivered" | "reserved" | "reserved_deliver_locked" | "invoiced" | "invoice_locked" | "no_receipt_not_delivered" | "paid_not_completed" | "paid_not_delivered" | "in_shipment" | undefined;
                withoutSourceFor?: string | undefined;
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
                include?: ("project" | "prePaidTotalAmount" | "orderSources" | "debtor" | "employee" | "invoicingCondition" | "lines")[] | undefined;
            } | undefined;
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
            201: {
                content: {
                    "application/json": Record<string, never>;
                };
            };
        };
    }>>;
    getById: (order: any) => Promise<import("openapi-fetch").FetchResponse<{
        parameters: {
            query?: {
                include?: ("project" | "prePaidTotalAmount" | "orderSources" | "employee" | "invoicingCondition" | "lines.article" | "lines.lineTotal" | "lines.unitPrice")[] | undefined;
            } | undefined;
            path: {
                order: number;
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
    update: (order: any, body: any) => Promise<import("openapi-fetch").FetchResponse<{
        parameters: {
            query?: {
                include?: ("project" | "prePaidTotalAmount" | "orderSources" | "debtor" | "employee" | "invoicingCondition" | "lines")[] | undefined;
            } | undefined;
            path: {
                order: number;
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
    delete: (order: any) => Promise<import("openapi-fetch").FetchResponse<{
        parameters: {
            path: {
                order: number;
            };
        };
        responses: {
            204: {
                content: {};
            };
        };
    }>>;
    preview: (body: any, query: any) => Promise<import("openapi-fetch").FetchResponse<{
        parameters: {
            query?: {
                include?: ("project" | "prePaidTotalAmount" | "orderSources" | "debtor" | "employee" | "invoicingCondition" | "lines")[] | undefined;
            } | undefined;
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
    storePayment: (order: any, body: any) => Promise<import("openapi-fetch").FetchResponse<{
        parameters: {
            query?: {
                include?: ("order" | "paymentMethod")[] | undefined;
            } | undefined;
            path: {
                order: number;
            };
        };
        requestBody?: {
            content: {
                "application/json": {
                    amount: number;
                    method: number;
                    currency?: number | undefined;
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
    invoice: (order: any, body: any) => Promise<import("openapi-fetch").FetchResponse<{
        parameters: {
            path: {
                order: number;
            };
        };
        responses: {
            201: {
                content: {};
            };
        };
    }>>;
    deliver: (order: any, body: any) => Promise<import("openapi-fetch").FetchResponse<{
        parameters: {
            path: {
                order: number;
            };
        };
        requestBody: {
            content: {
                "application/json": {
                    batchDelivery?: boolean | undefined;
                    packingSlip?: {
                        work?: string | undefined;
                        deliveryMethod?: number | undefined;
                        pickedUpBy?: string | undefined;
                        employee?: number | undefined;
                        completeDelivery?: boolean | undefined;
                    } | undefined;
                    items?: {
                        orderLineId?: number | undefined;
                        quantity?: string | undefined;
                        serialNumbers?: string[] | undefined;
                    }[] | undefined;
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
    external: {
        updateBySourceRelationId: (sourceRelation: any, externalId: any, query: any, body: any) => Promise<import("openapi-fetch").FetchResponse<{
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
        deliver: (sourceRelation: any, externalId: any, body: any) => Promise<import("openapi-fetch").FetchResponse<{
            parameters: {
                path: {
                    sourceRelation: number;
                    externalId: string;
                };
            };
            requestBody: {
                content: {
                    "application/json": {
                        packingSlip?: {
                            work?: string | undefined;
                            deliveryMethod?: number | undefined;
                            pickedUpBy?: string | undefined;
                            employee?: number | undefined;
                            externalId?: string | undefined;
                            completeDelivery?: boolean | undefined;
                        } | undefined;
                        items?: {
                            orderLineExternalId?: string | undefined;
                            quantity?: string | undefined;
                            serialNumbers?: string[] | undefined;
                        }[] | undefined;
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
    };
}
