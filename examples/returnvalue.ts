import { push_return_value } from "../src/utils"
import { ACCOUNT, MESSAGE } from "../src/config"

export function hex_to_string( hex: string )
{
    return Buffer.from(hex, "hex").toString("utf-8").replace("\x16", "");
}

console.log({ ACCOUNT, MESSAGE });
const { transaction_id, processed } = await push_return_value(MESSAGE);

for ( const { return_value_hex_data } of processed.action_traces ) {
    const value = hex_to_string(return_value_hex_data);
    console.log({ value, return_value_hex_data, transaction_id });
}
