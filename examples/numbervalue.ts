import { AnyAction, UInt64 } from "@wharfkit/session"
import { compute_transaction, decode } from "../src/utils.js"
import { authorization } from "../src/config.js"

const action: AnyAction = {
    account: "actions.eosn",
    name: "numbervalue",
    authorization,
    data: {
        number: 123
    },
}

const { processed, transaction_id } = await compute_transaction(action);

for ( const { return_value_hex_data } of processed.action_traces ) {
    console.log({ return_value_hex_data, transaction_id });
    const value = decode(return_value_hex_data, UInt64);
    console.log({ value });
}