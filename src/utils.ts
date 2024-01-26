import { Transaction, AnyAction, SignedTransaction, Serializer } from "@wharfkit/session"
import { rpc, PRIVATE_KEY } from "./config.js";

export function hex_to_string( hex: string ) {
    return Buffer.from(hex, "hex").toString("utf-8").replace("\x16", "");
}

export function decode(return_value_hex_data: string, type: any) {
    return Serializer.decode({data: return_value_hex_data, type}).toString()
}

export async function compute_transaction( action: AnyAction ) {
    const info = await rpc.v1.chain.get_info();
    const header = info.getTransactionHeader();
    const transaction = Transaction.from({ ...header, actions: [action] });
    const signatures = [PRIVATE_KEY.signDigest(transaction.signingDigest(info.chain_id))];
    const signedTransaction = SignedTransaction.from({ ...transaction, signatures });
    return rpc.v1.chain.compute_transaction(signedTransaction);
}