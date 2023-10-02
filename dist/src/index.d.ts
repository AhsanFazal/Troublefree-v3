import * as endpoints from "./endpoints";
export interface ClientConfig {
    username: string;
    password: string;
    company: string;
}
type EndpointTypes = typeof endpoints;
type EndpointClassInstances = {
    [K in keyof EndpointTypes]: InstanceType<EndpointTypes[K]>;
};
type EndpointInstances = {
    [K in Extract<keyof EndpointClassInstances, string> as `${K extends `${infer First}${infer Rest}` ? Lowercase<First> : ""}${K extends `${infer First}${infer Rest}` ? Rest : ""}`]: EndpointClassInstances[K];
};
export default class Troublefree {
    private httpClient;
    private accessToken?;
    private baseURL;
    endpoints: EndpointInstances;
    constructor(config: ClientConfig);
    private initializeEndpoints;
}
export {};
