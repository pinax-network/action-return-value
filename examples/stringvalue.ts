import { compute_transaction, create_action, decode } from "../src/utils.js"

const name = "stringvalue";
const data = { message: "hello world" };
const action = create_action(name, data);
const { processed } = await compute_transaction(action);
const { return_value_hex_data } = processed.action_traces[0];
const value = decode(return_value_hex_data, "string");
console.log({ name, data, return_value_hex_data, value });
