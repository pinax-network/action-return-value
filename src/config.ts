import { APIClient } from "@wharfkit/session"

export const ACCOUNT = "actions.eosn";
export const rpc = new APIClient({ url: "https://eos.api.eosnation.io" });
export const abi = (await rpc.v1.chain.get_abi(ACCOUNT)).abi
