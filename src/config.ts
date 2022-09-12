import { APIClient, PrivateKey } from "@greymass/eosio"
import 'dotenv/config'

// required
if ( !process.env.PRIVATE_KEY ) throw new Error("[env.PRIVATE_KEY] is required");
if ( !process.env.ACCOUNT ) throw new Error("[env.ACCOUNT] is required");
export const PRIVATE_KEY = PrivateKey.from(process.env.PRIVATE_KEY)
export const ACCOUNT = process.env.ACCOUNT;

// optional
export const ACTOR = process.env.ACTOR || ACCOUNT;
export const ENDPOINT = process.env.ENDPOINT;
if ( !ACTOR ) throw new Error("[env.ACTOR] is required");
if ( !ENDPOINT ) throw new Error("[env.ENDPOINT] is required");

export const rpc = new APIClient({ url: ENDPOINT, fetch })

console.log({ACTOR, ENDPOINT});