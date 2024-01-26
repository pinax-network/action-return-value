import { Transaction, SignedTransaction, Serializer, Action } from "@wharfkit/session"
import { abi, rpc } from "./config.js";

export function hex_to_string( hex: string ) {
    return Buffer.from(hex, "hex").toString("utf-8").replace("\x16", "");
}

export function decode(return_value_hex_data: string, type: any) {
    const decoded = Serializer.decode({data: return_value_hex_data, type, abi});
    if ( decoded.toJSON ) return decoded.toJSON();
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
        authorization: [],
        data,
    }, abi);
}

export async function read_only( action: Action ) {
    const info = await rpc.v1.chain.get_info();
    const header = info.getTransactionHeader();
    const transaction = Transaction.from({ ...header, actions: [action] });
    const signedTransaction = SignedTransaction.from({ ...transaction });
    return rpc.v1.chain.send_read_only_transaction(signedTransaction);
}