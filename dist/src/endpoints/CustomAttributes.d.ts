import { BaseEndpoint } from "./Base";
export declare class CustomAttributes extends BaseEndpoint {
    get: (choicelist: any) => Promise<import("openapi-fetch").FetchResponse<{
        parameters: {
            path: {
                choicelist: number;
            };
        };
        responses: {
            200: {
                content: {
                    "application/json": {
                        id?: number | undefined;
                        listNumber?: number | undefined;
                        name?: string | undefined;
                    }[];
                };
            };
        };
    }>>;
}
