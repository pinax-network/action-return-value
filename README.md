# Antelope `Action Return Value`

## CDT

- [Antelope CDT](https://github.com/AntelopeIO/cdt)

## Quickstart

```bash
$ npm run build

> build
> cdt-cpp actions.cpp
```

## Testing

```bash
$ npm install
$ bun test
```

## Computed Transaction

```json
{
    "id": "8ba1a455218e342957cfd67a74de83472d45dc10db6affa09260cd18133dda36",
    "block_num": 27697634,
    "block_time": "2022-08-03T16:38:06.500",
    "producer_block_id": null,
    "receipt": {
        "status": "executed",
        "cpu_usage_us": 227,
        "net_usage_words": 13
    },
    "elapsed": 227,
    "net_usage": 104,
    "scheduled": false,
    "action_traces": [
        {
            "action_ordinal": 1,
            "creator_action_ordinal": 0,
            "closest_unnotified_ancestor_action_ordinal": 0,
            "receipt": {
                "receiver": "abcabcabc333",
                "act_digest": "cde08ee0b6230758c0dd9766a946f2343c99947f7834216dea76af009c85a5af",
                "global_sequence": 29315371,
                "recv_sequence": 20,
                "auth_sequence": [
                    [
                        "abcabcabc333",
                        31
                    ]
                ],
                "code_sequence": 4,
                "abi_sequence": 4
            },
            "receiver": "abcabcabc333",
            "act": {
                "account": "abcabcabc333",
                "name": "returnvalue",
                "authorization": [
                    {
                        "actor": "abcabcabc333",
                        "permission": "active"
                    }
                ],
                "data": {
                    "name": "hello"
                },
                "hex_data": "00000000001aa36a"
            },
            "context_free": false,
            "elapsed": 55,
            "console": "",
            "trx_id": "8ba1a455218e342957cfd67a74de83472d45dc10db6affa09260cd18133dda36",
            "block_num": 27697634,
            "block_time": "2022-08-03T16:38:06.500",
            "producer_block_id": null,
            "account_ram_deltas": [],
            "except": null,
            "error_code": null,
            "return_value_hex_data": "1656616c69646174696f6e20686173207061737365642e",
            "inline_traces": []
        }
    ],
    "account_ram_delta": null,
    "except": null,
    "error_code": null
}
```