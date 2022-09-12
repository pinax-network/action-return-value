import { push_custom_value } from "../src/utils"
import { ACCOUNT, CUSTOM_MESSAGE } from "../src/config"
import { Serializer, Struct, Name } from "@greymass/eosio"

class CustomType extends Struct {
    static abiName = 'custom'
    static abiFields = [{name: 'message', type: 'name'}, {name: 'extra', type: 'string'}]
    declare message: Name;
    declare extra: string;
}

export function hex_to_string( hex: string )
{
    return Buffer.from(hex, "hex").toString("utf-8").replace("\x16", "");
}

// // function hex_to_string(data: string ) {
// //     return Serializer.decode({data, type: 'custom', customTypes: [CustomType]});
// // }

// // const data = "00000000001aa36a0d6578747261206d657373616765";

console.log(hex_to_string("00000000001aa36a0d6578747261206d657373616765"))



console.log({ ACCOUNT, CUSTOM_MESSAGE });
const { transaction_id, processed } = await push_custom_value(CUSTOM_MESSAGE);

for ( const { return_value_hex_data } of processed.action_traces ) {
    console.log({ return_value_hex_data, transaction_id });
    const value = hex_to_string(return_value_hex_data);
    console.log({ value });
}