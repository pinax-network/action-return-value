import { push_action, hex_to_string } from "../src/utils.js"

const action = "namevalue"
const data = {message: "hello"};
console.log({ action, data });
const { transaction_id, processed } = await push_action(action, data);

for ( const { return_value_hex_data } of processed.action_traces ) {
    console.log({ return_value_hex_data, transaction_id });
    const value = hex_to_string(return_value_hex_data);
    console.log({ value });
}