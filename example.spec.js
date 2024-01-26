import { Blockchain } from "@proton/vert"
import { it, describe } from "node:test";
import assert from 'node:assert';

// Vert EOS VM
const blockchain = new Blockchain()

// contract
const code = blockchain.createContract('example', 'example', true);

describe('example', () => {
  it("init", async () => {
    await code.actions.numbervalue([123]).send();
    assert.ok(true)
  });
});
