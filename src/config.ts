import { APIClient, PrivateKey, Chains, PublicKey } from "@wharfkit/session"

export const PRIVATE_KEY = PrivateKey.from("PVT_K1_2Cp6qeNCCRhfBeKzsh8ahvqR4ZV2e6nqZnUJsEVQSZkdkdNvaC") // disabled auth (can be shared publicly)
export const PUBLIC_KEY = PublicKey.from("PUB_K1_6het7SsmdXexc1UvXFk8pt6psh2UhKXS1VXEYh9ndMX4ouJm4Z")
export const ACTOR = "actions.eosn";
export const PERMISSION = "actions";
export const rpc = new APIClient({ url: Chains.EOS.url });
export const authorization = [{ actor: ACTOR, permission: PERMISSION }];
