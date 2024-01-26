import { read_only, decode } from "../src/utils.js"
import { ACCOUNT, rpc } from "../src/config.js";

const name = "namevalue";
const data = { message: "foobar" };
const { processed } = await read_only(rpc, ACCOUNT, name, data);
const { return_value_hex_data } = processed.action_traces[0];
const value = decode(return_value_hex_data, name);
console.log({ name, data, return_value_hex_data, value });
