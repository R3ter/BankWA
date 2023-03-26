import { assert } from "chai";\
import Deposit from "./Deposit";

describe("checking addAccount function", () => {
  it("should return error for passport number", async () => {
    const result = await Deposit(
      undefined,
      {
        userPassport:"",amount:100
      },
    );
    assert.deepEqual(result, {
      error: true,
      msg: "The passport number must consist of 9 digits and should not contain any letters or special characters.",
    });
  });
  it("should return error for password", async () => {
    const result = await AddAccount(
      undefined,
      {
        userData: {
          name: "waddwa",
          passportNumber: "923212341",
          password: "312321",
        },
      },
      undefined
    );
    assert.deepEqual(result, {
      error: true,
      msg: "password must be at least 8 characters",
    });
  });
  it("should return error for name", async () => {
    const result = await AddAccount(
      undefined,
      {
        userData: {
          name: "wad11dwa",
          passportNumber: "923212341",
          password: "312321",
        },
      },
      undefined
    );
    assert.deepEqual(result, {
      error: true,
      msg: "Validator failed for path `name` with value `wad11dwa`",
    });
  });
});
