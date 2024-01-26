import { UInt64 } from "@wharfkit/session"
import { read_only, create_action, decode } from "../src/utils.js"

const name = "numbervalue";
const data = { number: 123 };
const action = create_action(name, data);
const { processed } = await read_only(action);
const { return_value_hex_data } = processed.action_traces[0];
const value = decode(return_value_hex_data, UInt64);
console.log({ name, data, return_value_hex_data, value });
