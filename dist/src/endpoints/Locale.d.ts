import { BaseEndpoint } from "./Base";
export declare class Locale extends BaseEndpoint {
    countries: () => Promise<import("openapi-fetch").FetchResponse<{
        responses: {
            200: {
                content: {
                    "application/json": {
                        id?: number | undefined;
                        name?: string | undefined;
                        isoCode?: string | undefined;
                        euMember?: boolean | undefined;
                        sticky?: boolean | undefined;
                    }[];
                };
            };
        };
    }>>;
}
