import { push_action } from "../src/utils.js"
import { Serializer } from "@wharfkit/antelope"

function decode(data: string) {
    return Serializer.decode({data, type: 'string'}).toString()
}

const action = "stringvalue"
const data = {message: "hello"};
console.log({ action, data });
const { transaction_id, processed } = await push_action(action, data);

for ( const { return_value_hex_data } of processed.action_traces ) {
    console.log({ return_value_hex_data, transaction_id });
    const value = decode(return_value_hex_data);
    console.log({ value });
}