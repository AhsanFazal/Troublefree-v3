import { BaseEndpoint } from "./Base";
export declare class PackingSlip extends BaseEndpoint {
    get: (query: any) => Promise<import("openapi-fetch").FetchResponse<{
        parameters: {
            query?: {
                page?: number | undefined;
                per_page?: number | undefined;
                debtor?: number | undefined;
                date?: string | undefined;
                lowestIdFirst?: boolean | undefined;
                include?: ("order" | "debtor" | "employee" | "lines.orderLine")[] | undefined;
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
