import { push_action } from "../src/utils.js"
import { Serializer, ABI } from "@wharfkit/antelope"

const abi = ABI.from({
    structs: [
        {
            base: '',
            name: 'custom',
            fields: [
                {name: 'message', type: 'name'},
                {name: 'extra', type: 'string'},
                {name: 'number', type: 'uint64'},
            ],
        }
    ],
})

function decode(data: string) {
    const object = Serializer.decode({data, type: 'custom', abi}) as any;
    return {
        message: object.message.toString(),
        extra: object.extra.toString(),
        number: object.number.toString(),
    }
}

const action = "customvalue"
const data = {message: "hello", extra: "world", number: 123};
console.log({ action, data });

const { transaction_id, processed } = await push_action(action, data);

for ( const { return_value_hex_data } of processed.action_traces ) {
    console.log({ return_value_hex_data, transaction_id });
    const value = decode(return_value_hex_data);
    console.log({ value });
}