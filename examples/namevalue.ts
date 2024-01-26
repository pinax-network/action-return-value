import { Name, AnyAction } from "@wharfkit/session"
import { compute_transaction, decode } from "../src/utils.js"
import { authorization } from "../src/config.js"

const action: AnyAction = {
    account: "actions.eosn",
    name: "namevalue",
    authorization,
    data: {
        message: "foobar"
    },
}

const { transaction_id, processed } = await compute_transaction(action);

for ( const { return_value_hex_data } of processed.action_traces ) {
    console.log({ return_value_hex_data, transaction_id });
    const value = decode(return_value_hex_data, Name);
    console.log({ value });
}