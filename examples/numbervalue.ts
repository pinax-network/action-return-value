import { read_only, decode } from "../src/utils.js"
import { ACCOUNT, abi, rpc } from "../src/config.js";

const name = "numbervalue";
const data = { number: 123 };
const { processed } = await read_only(rpc, ACCOUNT, name, data);
const { return_value_hex_data } = processed.action_traces[0];
const value = decode(abi, return_value_hex_data, name);
console.log({ account: ACCOUNT, name, data, return_value_hex_data, value });
