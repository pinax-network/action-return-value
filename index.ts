import { push_return_value } from "./src/utils"
import { ACCOUNT, MESSAGE } from "./src/config"

const { transaction_id, processed } = await push_return_value(MESSAGE);

for ( const { return_value_hex_data } of processed.action_traces ) {
    const value = Buffer.from(return_value_hex_data, "hex").toString("utf-8").replace("\x16", "");
    console.log({ACCOUNT, MESSAGE, value, transaction_id });
}
