import { APIClient, PrivateKey } from "@greymass/eosio"

// required
if ( !process.env.PRIVATE_KEY ) throw new Error("[env.PRIVATE_KEY] is required");
if ( !process.env.ACCOUNT ) throw new Error("[env.ACCOUNT] is required");
export const PRIVATE_KEY = PrivateKey.from(process.env.PRIVATE_KEY)
export const ACCOUNT = process.env.ACCOUNT;

// optional
export const MESSAGE = process.env.MESSAGE || "hello";
export const ACTOR = process.env.ACTOR || ACCOUNT;
export const ENDPOINT = process.env.ENDPOINT || "https://kylin.api.eosnation.io";
if ( !ACTOR ) throw new Error("[env.ACTOR] is required");
if ( !ENDPOINT ) throw new Error("[env.ENDPOINT] is required");
if ( !MESSAGE ) throw new Error("[env.MESSAGE] is required");
export const CUSTOM_MESSAGE = {message: MESSAGE, extra: "extra"};

export const rpc = new APIClient({ url: ENDPOINT, fetch })