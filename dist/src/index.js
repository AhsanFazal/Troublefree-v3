"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const openapi_fetch_1 = __importDefault(require("openapi-fetch"));
const endpoints = __importStar(require("./endpoints"));
class Troublefree {
    constructor(config) {
        this.baseURL = "https://retail.troublefree.com/v3/api";
        // Public properties
        this.endpoints = {};
        this.httpClient = (0, openapi_fetch_1.default)({
            baseUrl: this.baseURL,
            headers: {
                Authorization: `Basic ${Buffer.from(`${config.username}:${config.password}`).toString("base64")}`,
                Company: config.company,
                "Content-Type": "application/json"
            }
        });
        this.initializeEndpoints();
    }
    initializeEndpoints() {
        for (const key in endpoints) {
            if (Object.prototype.hasOwnProperty.call(endpoints, key)) {
                const endpointKey = key;
                const lowerCaseKey = (endpointKey.charAt(0).toLowerCase() +
                    endpointKey.slice(1));
                this.endpoints[lowerCaseKey] = new endpoints[endpointKey](this.httpClient);
            }
        }
        // Restore type safety by asserting back to EndpointInstances
        this.endpoints = this.endpoints;
    }
}
exports.default = Troublefree;
