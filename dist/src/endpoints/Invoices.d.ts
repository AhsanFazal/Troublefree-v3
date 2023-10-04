import { BaseEndpoint } from "./Base";
export declare class Invoices extends BaseEndpoint {
    get: (query: any) => Promise<import("openapi-fetch").FetchResponse<{
        parameters: {
            query?: {
                orderId?: string | undefined;
                debtor?: number | undefined;
                include?: ("debtor" | "lines" | "paymentCondition")[] | undefined;
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
}
