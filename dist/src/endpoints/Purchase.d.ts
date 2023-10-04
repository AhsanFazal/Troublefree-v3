import { BaseEndpoint } from "./Base";
export declare class Purchase extends BaseEndpoint {
    invoices: {
        get: (query: any) => Promise<import("openapi-fetch").FetchResponse<{
            parameters: {
                query?: {
                    page?: number | undefined;
                    per_page?: number | undefined;
                    include?: ("lines" | "attachments" | "lines.receiptLineAssignments" | "lines.suppliers" | "lines.purchaseOrderLines" | "lines.hasAssignments" | "lines.packingSlipNumber" | "suppliers" | "totalPrice" | "purchaseOrders" | "assignments")[] | undefined;
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
        getById: (query: any, purchase_invoice: any) => Promise<import("openapi-fetch").FetchResponse<{
            parameters: {
                query?: {
                    include?: ("lines" | "attachments" | "lines.receiptLineAssignments" | "lines.suppliers" | "lines.purchaseOrderLines" | "lines.hasAssignments" | "lines.packingSlipNumber" | "suppliers" | "totalPrice" | "purchaseOrders" | "assignments")[] | undefined;
                } | undefined;
                path: {
                    purchase_invoice: number;
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
        create: (query: any, body: any) => Promise<import("openapi-fetch").FetchResponse<{
            parameters: {
                query?: {
                    include?: ("lines" | "attachments" | "lines.receiptLineAssignments" | "lines.suppliers" | "lines.purchaseOrderLines" | "lines.hasAssignments" | "lines.packingSlipNumber" | "suppliers" | "totalPrice" | "purchaseOrders" | "assignments")[] | undefined;
                } | undefined;
            };
            requestBody?: {
                content: {
                    "application/json": {
                        id?: number | undefined;
                        lines?: {
                            id?: number | undefined;
                            finalPrice?: string | undefined;
                            receivedAt?: string | undefined;
                            purchaseInvoice?: any | undefined;
                            originalPurchasePrice?: string | undefined;
                            quantity?: string | undefined;
                            vat?: number | undefined;
                            discount?: string | undefined;
                            purchasePrice?: string | undefined;
                            salesPrice?: string | undefined;
                            description?: string | undefined;
                        }[] | undefined;
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
                        packingSlipNumber?: string | undefined;
                        description?: string | undefined;
                        reference?: string | undefined;
                        final?: boolean | undefined;
                        exportedAt?: string | undefined;
                        createdAt?: string | undefined;
                        invoiceNumber?: string | undefined;
                        invoicedAt?: string | undefined;
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
        update: (query: any, purchase_invoice: any, body: any) => Promise<import("openapi-fetch").FetchResponse<{
            parameters: {
                query?: {
                    include?: ("lines" | "attachments" | "lines.receiptLineAssignments" | "lines.suppliers" | "lines.purchaseOrderLines" | "lines.hasAssignments" | "lines.packingSlipNumber" | "suppliers" | "totalPrice" | "purchaseOrders" | "assignments")[] | undefined;
                } | undefined;
                path: {
                    purchase_invoice: number;
                };
            };
            requestBody?: {
                content: {
                    "application/json": {
                        id?: number | undefined;
                        lines?: {
                            id?: number | undefined;
                            finalPrice?: string | undefined;
                            receivedAt?: string | undefined;
                            purchaseInvoice?: any | undefined;
                            originalPurchasePrice?: string | undefined;
                            quantity?: string | undefined;
                            vat?: number | undefined;
                            discount?: string | undefined;
                            purchasePrice?: string | undefined;
                            salesPrice?: string | undefined;
                            description?: string | undefined;
                        }[] | undefined;
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
                        packingSlipNumber?: string | undefined;
                        description?: string | undefined;
                        reference?: string | undefined;
                        final?: boolean | undefined;
                        exportedAt?: string | undefined;
                        createdAt?: string | undefined;
                        invoiceNumber?: string | undefined;
                        invoicedAt?: string | undefined;
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
    externalInvoices: {
        get: (sourceRelation: any, externalId: any, query: any) => Promise<import("openapi-fetch").FetchResponse<{
            parameters: {
                query?: {
                    include?: ("lines" | "attachments" | "lines.receiptLineAssignments" | "lines.suppliers" | "lines.purchaseOrderLines" | "lines.hasAssignments" | "lines.packingSlipNumber" | "suppliers" | "totalPrice" | "purchaseOrders" | "assignments")[] | undefined;
                } | undefined;
                path: {
                    sourceRelation: number;
                    externalId: string;
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
        update: (sourceRelation: any, externalId: any, query: any, body: any) => Promise<import("openapi-fetch").FetchResponse<{
            parameters: {
                query?: {
                    include?: ("lines" | "attachments" | "lines.receiptLineAssignments" | "lines.suppliers" | "lines.purchaseOrderLines" | "lines.hasAssignments" | "lines.packingSlipNumber" | "suppliers" | "totalPrice" | "purchaseOrders" | "assignments")[] | undefined;
                } | undefined;
                path: {
                    sourceRelation: number;
                    externalId: string;
                };
            };
            requestBody?: {
                content: {
                    "application/json": {
                        id?: number | undefined;
                        lines?: {
                            id?: number | undefined;
                            finalPrice?: string | undefined;
                            receivedAt?: string | undefined;
                            purchaseInvoice?: any | undefined;
                            originalPurchasePrice?: string | undefined;
                            quantity?: string | undefined;
                            vat?: number | undefined;
                            discount?: string | undefined;
                            purchasePrice?: string | undefined;
                            salesPrice?: string | undefined;
                            description?: string | undefined;
                        }[] | undefined;
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
                        packingSlipNumber?: string | undefined;
                        description?: string | undefined;
                        reference?: string | undefined;
                        final?: boolean | undefined;
                        exportedAt?: string | undefined;
                        createdAt?: string | undefined;
                        invoiceNumber?: string | undefined;
                        invoicedAt?: string | undefined;
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
        delete: (sourceRelation: any, externalId: any) => Promise<import("openapi-fetch").FetchResponse<{
            parameters: {
                path: {
                    sourceRelation: number;
                    externalId: string;
                };
            };
            responses: {
                204: {
                    content: {};
                };
            };
        }>>;
    };
    orders: {
        get: (query: any) => Promise<import("openapi-fetch").FetchResponse<{
            parameters: {
                query?: {
                    page?: number | undefined;
                    per_page?: number | undefined;
                    include?: ("lines" | "supplier")[] | undefined;
                    orderby?: string | undefined;
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
        getById: (query: any, purchase_order: any) => Promise<import("openapi-fetch").FetchResponse<{
            parameters: {
                query?: {
                    include?: ("lines" | "supplier")[] | undefined;
                } | undefined;
                path: {
                    purchase_order: number;
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
        create: (query: any, body: any) => Promise<import("openapi-fetch").FetchResponse<{
            parameters: {
                query?: {
                    markAsOrdered?: boolean | undefined;
                    include?: ("lines" | "supplier")[] | undefined;
                } | undefined;
            };
            requestBody?: {
                content: {
                    "application/json": {
                        id?: number | undefined;
                        createdAt?: string | undefined;
                        orderedAt?: string | undefined;
                        deliveryAt?: string | undefined;
                        reference?: string | undefined;
                        customer?: {
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
                        deliveryMethod?: number | undefined;
                        deliveryAddress?: {
                            attentionOf?: string | undefined;
                            street?: string | undefined;
                            number?: string | undefined;
                            district?: string | undefined;
                            city?: string | undefined;
                            countryName?: string | undefined;
                            postcode?: string | undefined;
                            GLN?: string | undefined;
                        } | undefined;
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
                        supplierComment?: string | undefined;
                        supplierOrderNumber?: string | undefined;
                        lines?: {
                            id?: number | undefined;
                            salesOrder?: number | undefined;
                            unit?: number | undefined;
                            baseQuantity?: Record<string, never> | undefined;
                            originalBaseQuantity?: Record<string, never> | undefined;
                            baseQuantityDelivered?: Record<string, never> | undefined;
                            quantityDelivered?: Record<string, never> | undefined;
                            description?: string | undefined;
                            comment?: string | undefined;
                            article?: number | undefined;
                            articleCode?: string | undefined;
                        }[] | undefined;
                        orderLineSortBy?: string | undefined;
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
        update: (query: any, purchase_order: any, body: any) => Promise<import("openapi-fetch").FetchResponse<{
            parameters: {
                query?: {
                    include?: ("lines" | "supplier")[] | undefined;
                } | undefined;
                path: {
                    purchase_order: number;
                };
            };
            requestBody?: {
                content: {
                    "application/json": {
                        id?: number | undefined;
                        createdAt?: string | undefined;
                        orderedAt?: string | undefined;
                        deliveryAt?: string | undefined;
                        reference?: string | undefined;
                        customer?: {
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
                        deliveryMethod?: number | undefined;
                        deliveryAddress?: {
                            attentionOf?: string | undefined;
                            street?: string | undefined;
                            number?: string | undefined;
                            district?: string | undefined;
                            city?: string | undefined;
                            countryName?: string | undefined;
                            postcode?: string | undefined;
                            GLN?: string | undefined;
                        } | undefined;
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
                        supplierComment?: string | undefined;
                        supplierOrderNumber?: string | undefined;
                        lines?: {
                            id?: number | undefined;
                            salesOrder?: number | undefined;
                            unit?: number | undefined;
                            baseQuantity?: Record<string, never> | undefined;
                            originalBaseQuantity?: Record<string, never> | undefined;
                            baseQuantityDelivered?: Record<string, never> | undefined;
                            quantityDelivered?: Record<string, never> | undefined;
                            description?: string | undefined;
                            comment?: string | undefined;
                            article?: number | undefined;
                            articleCode?: string | undefined;
                        }[] | undefined;
                        orderLineSortBy?: string | undefined;
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
        delete: (purchase_order: any) => Promise<import("openapi-fetch").FetchResponse<{
            parameters: {
                path: {
                    purchase_order: number;
                };
            };
            responses: {
                204: {
                    content: {};
                };
            };
        }>>;
    };
    externalOrders: {
        get: (sourceRelation: any, externalId: any, query: any) => Promise<import("openapi-fetch").FetchResponse<{
            parameters: {
                query?: {
                    include?: ("lines" | "supplier")[] | undefined;
                } | undefined;
                path: {
                    sourceRelation: number;
                    externalId: string;
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
        update: (sourceRelation: any, externalId: any, query: any, body: any) => Promise<import("openapi-fetch").FetchResponse<{
            parameters: {
                query?: {
                    markAsOrdered?: boolean | undefined;
                    include?: ("lines" | "supplier")[] | undefined;
                } | undefined;
                path: {
                    sourceRelation: number;
                    externalId: string;
                };
            };
            requestBody?: {
                content: {
                    "application/json": {
                        id?: number | undefined;
                        createdAt?: string | undefined;
                        orderedAt?: string | undefined;
                        deliveryAt?: string | undefined;
                        reference?: string | undefined;
                        customer?: {
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
                        deliveryMethod?: number | undefined;
                        deliveryAddress?: {
                            attentionOf?: string | undefined;
                            street?: string | undefined;
                            number?: string | undefined;
                            district?: string | undefined;
                            city?: string | undefined;
                            countryName?: string | undefined;
                            postcode?: string | undefined;
                            GLN?: string | undefined;
                        } | undefined;
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
                        supplierComment?: string | undefined;
                        supplierOrderNumber?: string | undefined;
                        lines?: {
                            id?: number | undefined;
                            salesOrder?: number | undefined;
                            unit?: number | undefined;
                            baseQuantity?: Record<string, never> | undefined;
                            originalBaseQuantity?: Record<string, never> | undefined;
                            baseQuantityDelivered?: Record<string, never> | undefined;
                            quantityDelivered?: Record<string, never> | undefined;
                            description?: string | undefined;
                            comment?: string | undefined;
                            article?: number | undefined;
                            articleCode?: string | undefined;
                        }[] | undefined;
                        orderLineSortBy?: string | undefined;
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
        delete: (sourceRelation: any, externalId: any) => Promise<import("openapi-fetch").FetchResponse<{
            parameters: {
                path: {
                    sourceRelation: number;
                    externalId: string;
                };
            };
            responses: {
                204: {
                    content: {};
                };
            };
        }>>;
    };
    receipts: {
        get: (query: any) => Promise<import("openapi-fetch").FetchResponse<{
            parameters: {
                query?: {
                    page?: number | undefined;
                    per_page?: number | undefined;
                    include?: ("lines" | "lines.article" | "supplier" | "deliveryMethod" | "lines.comment" | "lines.unit" | "lines.warehouse" | "purchaseOrderNumbers")[] | undefined;
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
        getById: (query: any, purchase_receipt: any) => Promise<import("openapi-fetch").FetchResponse<{
            parameters: {
                query?: {
                    include?: ("lines" | "lines.article" | "supplier" | "deliveryMethod" | "lines.comment" | "lines.unit" | "lines.warehouse" | "purchaseOrderNumbers")[] | undefined;
                } | undefined;
                path: {
                    purchase_receipt: number;
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
        update: (query: any, purchase_receipt: any, body: any) => Promise<import("openapi-fetch").FetchResponse<{
            parameters: {
                query?: {
                    include?: ("lines" | "lines.article" | "supplier" | "deliveryMethod" | "lines.comment" | "lines.unit" | "lines.warehouse" | "purchaseOrderNumbers")[] | undefined;
                } | undefined;
                path: {
                    purchase_receipt: number;
                };
            };
            requestBody?: {
                content: {
                    "application/json": {
                        id?: number | undefined;
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
                        lines?: {
                            id?: number | undefined;
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
                            articleBarcode?: string | undefined;
                            unit?: string | undefined;
                            baseQuantity?: string | undefined;
                        }[] | undefined;
                        packingSlipNumber?: string | undefined;
                        reference?: string | undefined;
                        deliveryAt?: string | undefined;
                        completedAt?: string | undefined;
                        receivedStatus?: number | undefined;
                        deliveryMethod?: {
                            id?: number | undefined;
                            description?: string | undefined;
                            type?: number | undefined;
                        } | undefined;
                        deliveryAddress?: {
                            attentionOf?: string | undefined;
                            street?: string | undefined;
                            number?: string | undefined;
                            district?: string | undefined;
                            city?: string | undefined;
                            postcode?: string | undefined;
                            email?: string | undefined;
                            phone?: string | undefined;
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
        revert: (body: any, purchase_receipt: any) => Promise<import("openapi-fetch").FetchResponse<{
            parameters: {
                path: {
                    purchase_receipt: number;
                };
            };
            responses: {
                200: {
                    content: {};
                };
            };
        }>>;
        complete: (body: any, purchase_receipt: any) => Promise<import("openapi-fetch").FetchResponse<{
            parameters: {
                query?: {
                    include?: ("lines" | "lines.article" | "supplier" | "deliveryMethod" | "lines.comment" | "lines.unit" | "lines.warehouse" | "purchaseOrderNumbers")[] | undefined;
                } | undefined;
                path: {
                    purchase_receipt: number;
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
        revertCompletion: (body: any, purchase_receipt: any) => Promise<import("openapi-fetch").FetchResponse<{
            parameters: {
                query?: {
                    include?: ("lines" | "lines.article" | "supplier" | "deliveryMethod" | "lines.comment" | "lines.unit" | "lines.warehouse" | "purchaseOrderNumbers")[] | undefined;
                } | undefined;
                path: {
                    purchase_receipt: number;
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
