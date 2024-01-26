import { Serializer, ABI, AnyAction } from "@wharfkit/session"
import { compute_transaction } from "../src/utils.js"
import { authorization } from "../src/config.js";

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

const action: AnyAction = {
    account: "actions.eosn",
    name: "customvalue",
    authorization,
    data: {
        message: "hello",
        extra: "world",
        number: 123
    },
}

const { transaction_id, processed } = await compute_transaction(action);

for ( const { return_value_hex_data } of processed.action_traces ) {
    console.log({ return_value_hex_data, transaction_id });
    const value = decode(return_value_hex_data);
    console.log({ value });
}