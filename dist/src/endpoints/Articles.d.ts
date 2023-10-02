import { BaseEndpoint } from "./Base";
export declare class Articles extends BaseEndpoint {
    get(query: any): Promise<import("openapi-fetch").FetchResponse<{
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
}
