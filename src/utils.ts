import { Transaction, SignedTransaction, Serializer, AnyAction, Action } from "@wharfkit/session"
import { rpc, PRIVATE_KEY, authorization } from "./config.js";
import { abi } from "./abi.js";

export function hex_to_string( hex: string ) {
    return Buffer.from(hex, "hex").toString("utf-8").replace("\x16", "");
}

export function decode(return_value_hex_data: string, type: any) {
    const decoded = Serializer.decode({data: return_value_hex_data, type, abi});
    if ( typeof decoded === "string" ) return decoded;
    if ( typeof decoded === "number" ) return decoded;
    if ( Array.isArray(decoded) ) return decoded;
    const keys = Object.keys(decoded);
    const json = {};
    for ( const key of keys ) {
        try {
            json[key] = decoded[key].toJSON();
        } catch (e) {
            json[key] = decoded[key];
        }
    }
    return json;
}

export function create_action( name: string, data: any ) {
    return Action.from({
        account: "actions.eosn",
        name,
        authorization,
        data,
    }, abi);
}

export async function compute_transaction( action: Action ) {
    const info = await rpc.v1.chain.get_info();
    const header = info.getTransactionHeader();
    const transaction = Transaction.from({ ...header, actions: [action] });
    const signatures = [PRIVATE_KEY.signDigest(transaction.signingDigest(info.chain_id))];
    const signedTransaction = SignedTransaction.from({ ...transaction, signatures });
    return rpc.v1.chain.compute_transaction(signedTransaction);
}