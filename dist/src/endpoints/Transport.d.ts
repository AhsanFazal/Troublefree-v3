import { BaseEndpoint } from "./Base";
export declare class Transport extends BaseEndpoint {
    get: (query: any) => Promise<import("openapi-fetch").FetchResponse<{
        parameters: {
            query?: {
                page?: number | undefined;
                per_page?: number | undefined;
                include?: ("driver" | "items" | "vehicle")[] | undefined;
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
                include?: ("driver" | "items" | "vehicle")[] | undefined;
            } | undefined;
        };
        requestBody?: {
            content: {
                "application/json": {
                    id?: number | undefined;
                    driver?: {
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
                    vehicle?: {
                        id?: number | undefined;
                        name?: string | undefined;
                        palletPlaces?: number | undefined;
                        loadCapacity?: number | undefined;
                    } | undefined;
                    departureDate?: string | undefined;
                    departureTime?: string | undefined;
                    endTime?: string | undefined;
                    status?: number | undefined;
                    comment?: string | undefined;
                    items?: {
                        id?: number | undefined;
                        transportRide?: number | undefined;
                        order?: number | undefined;
                        packingSlip?: number | undefined;
                        sequenceNumber?: number | undefined;
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
    external: {
        update: (sourceRelation: any, externalId: any, body: any) => Promise<import("openapi-fetch").FetchResponse<{
            parameters: {
                query?: {
                    include?: ("driver" | "items" | "vehicle")[] | undefined;
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
                        driver?: {
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
                        vehicle?: {
                            id?: number | undefined;
                            name?: string | undefined;
                            palletPlaces?: number | undefined;
                            loadCapacity?: number | undefined;
                        } | undefined;
                        departureDate?: string | undefined;
                        departureTime?: string | undefined;
                        endTime?: string | undefined;
                        status?: number | undefined;
                        comment?: string | undefined;
                        items?: {
                            id?: number | undefined;
                            transportRide?: number | undefined;
                            order?: number | undefined;
                            packingSlip?: number | undefined;
                            sequenceNumber?: number | undefined;
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
                201: {
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
    delete: (transport_ride: any) => Promise<import("openapi-fetch").FetchResponse<{
        parameters: {
            path: {
                transport_ride: number;
            };
        };
        responses: {
            204: {
                content: {};
            };
        };
    }>>;
}
