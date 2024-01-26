import { ACCOUNT, rpc } from "../src/config.js";
import { read_only, decode } from "../src/utils.js"

const name = "stringvalue";
const data = { message: "hello world" };
const { processed } = await read_only(rpc, ACCOUNT, name, data);
const { return_value_hex_data } = processed.action_traces[0];
const value = decode(return_value_hex_data, name);
console.log({ name, data, return_value_hex_data, value });
