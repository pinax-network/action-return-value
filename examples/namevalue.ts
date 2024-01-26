import { Name } from "@wharfkit/session"
import { compute_transaction, create_action, decode } from "../src/utils.js"

const name = "namevalue";
const data = { message: "foobar" };
const action = create_action(name, data);
const { processed } = await compute_transaction(action);
const { return_value_hex_data } = processed.action_traces[0];
const value = decode(return_value_hex_data, Name);
console.log({ name, data, return_value_hex_data, value });
