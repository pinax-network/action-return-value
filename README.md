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

```yaml
$ bun examples/customvalue.ts
{
  name: "customvalue",
  data: {
    message: "hello",
    extra: "world",
    number: 123
  },
  return_value_hex_data: "00000000001aa36a05776f726c647b00000000000000",
  value: {
    message: "hello",
    extra: "world",
    number: 123
  }
}
```