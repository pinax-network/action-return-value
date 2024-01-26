import { Blockchain } from "@proton/vert"
import { describe, it } from "bun:test";

// Vert EOS VM
const blockchain = new Blockchain()

// contract
const code = blockchain.createContract('actions', 'actions', true);

describe('actions', () => {
  it("numbervalue", async () => {
    await code.actions.numbervalue([123]).send();
  });
});
