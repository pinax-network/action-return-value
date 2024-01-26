import { read_only, create_action, decode } from "../src/utils.js"

const name = "vectorvalue";
const data = { message: ["one", "two", "three"] };
const action = create_action(name, data);
const { processed } = await read_only(action);
const { return_value_hex_data } = processed.action_traces[0];
const value = decode(return_value_hex_data, name);
console.log({ name, data, return_value_hex_data, value });
