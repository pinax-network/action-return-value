import { Transaction, Action, SignedTransaction, ABI } from "@greymass/eosio"
import { rpc, ACCOUNT, ACTOR, PRIVATE_KEY } from "./config";

export function hex_to_string( hex: string )
{
    return Buffer.from(hex, "hex").toString("utf-8").replace("\x16", "");
}

export const abi = ABI.from({
    version: 'eosio::abi/1.1',
    structs: [
        {
            name: 'returnvalue',
            base: '',
            fields: [{
                name: "message",
                type: "name"
            }]
        }
    ],
    actions: [
        {
            name: 'returnvalue',
            type: 'returnvalue',
            ricardian_contract: ""
        }
    ],
})

export async function push_return_value( message: string ) {
    const action = Action.from({
        authorization: [ { actor: ACTOR, permission: 'active' } ],
        account: ACCOUNT,
        name: 'returnvalue',
        data: { message },
    }, abi)
    return push_transaction( [action] );
}

export async function push_transaction( actions: Action[] ) {
    const info = await rpc.v1.chain.get_info();
    const header = info.getTransactionHeader();
    const transaction = Transaction.from({ ...header, actions });
    const signatures = [PRIVATE_KEY.signDigest(transaction.signingDigest(info.chain_id))];
    const signedTransaction = SignedTransaction.from({ ...transaction, signatures });
    try {
        const result = await rpc.v1.chain.push_transaction(signedTransaction)
        return result;
    } catch (e: any) {
        const error = e?.error?.details[0].message.replace("assertion failure with message: ", "");
        throw Error(error || e);
    }
}