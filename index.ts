import { push_return_value, hex_to_string } from "./src/utils"
import { ACCOUNT, MESSAGE } from "./src/config"

console.log({ ACCOUNT, MESSAGE });
const { transaction_id, processed } = await push_return_value(MESSAGE);

for ( const { return_value_hex_data } of processed.action_traces ) {
    const value = hex_to_string(return_value_hex_data);
    console.log({ value, return_value_hex_data, transaction_id });
}
