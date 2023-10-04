import { BaseEndpoint } from "./Base";
export declare class Schedule extends BaseEndpoint {
    get: (query: any) => Promise<import("openapi-fetch").FetchResponse<{
        responses: {
            200: {
                content: {
                    "application/json": {
                        name?: string | undefined;
                        startsAt?: string | undefined;
                        endsAt?: string | undefined;
                        noDeliveries?: boolean | undefined;
                        noProduction?: boolean | undefined;
                        noWork?: boolean | undefined;
                    }[];
                };
            };
        };
    }>>;
}
