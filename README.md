# EOSIO Action Return Value

## CDT

- [blanc++ v0.12.0](https://github.com/haderech/blanc)

## Quickstart

```bash
$ blanc++ exxample.cpp
$ cleos set contract <ACCOUNT> . example.wasm example.abi
```

## .env

```env
ACCOUNT="<ACCOUNT>"
PRIVATE_KEY="<EOSIO PRIVATE KEY>"
ENDPOINT="https://jungle4.api.eosnation.io"
```

## Testing

```bash
$ bun install
$ bun index.ts
{ message: "hello", value: "Validation has passed.", transaction_id: "d5127eb0a8bf94a0682bc61d4cb7f820870d5d9315dbdca90796c7cc5436614f" }
```