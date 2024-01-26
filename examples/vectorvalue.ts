import { ACCOUNT, abi, rpc } from "../src/config.js";
import { read_only, decode } from "../src/utils.js"

const name = "vectorvalue";
const data = { message: ["one", "two", "three"] };
const { processed } = await read_only(rpc, ACCOUNT, name, data);
const { return_value_hex_data } = processed.action_traces[0];
const value = decode(abi, return_value_hex_data, name);
console.log({ account: ACCOUNT, name, data, return_value_hex_data, value });
