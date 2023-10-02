"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const src_1 = __importDefault(require("../src"));
const config = {
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    company: process.env.COMPANY
};
const client = new src_1.default(config);
/**
 * This example demonstrates how to get a list of articles.
 */
function getArticles() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { data, error: _ } = yield client.endpoints.articles.get({});
            return data;
        }
        catch (error) {
            throw error;
        }
    });
}
