import { push_action, hex_to_string } from "../src/utils"

const action = "numbervalue"
const message = "hello";
console.log({ action, message });
const { transaction_id, processed } = await push_action(action, "hello");

for ( const { return_value_hex_data } of processed.action_traces ) {
    console.log({ return_value_hex_data, transaction_id });
    const value = hex_to_string(return_value_hex_data);
    console.log({ value });
}