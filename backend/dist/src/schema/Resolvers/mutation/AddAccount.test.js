"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const AddAccount_1 = __importDefault(require("./AddAccount"));
describe("checking addAccount function", () => {
    it("should return error for passport number", async () => {
        const result = await (0, AddAccount_1.default)(undefined, {
            userData: { name: "waddwa", passportNumber: "231", password: "312321" },
        }, undefined);
        chai_1.assert.deepEqual(result, {
            error: true,
            msg: "The passport number must consist of 9 digits and should not contain any letters or special characters.",
        });
    });
    it("should return error for password", async () => {
        const result = await (0, AddAccount_1.default)(undefined, {
            userData: {
                name: "waddwa",
                passportNumber: "923212341",
                password: "312321",
            },
        }, undefined);
        chai_1.assert.deepEqual(result, {
            error: true,
            msg: "password must be at least 8 characters",
        });
    });
    it("should return error for name", async () => {
        const result = await (0, AddAccount_1.default)(undefined, {
            userData: {
                name: "wad11dwa",
                passportNumber: "923212341",
                password: "312321",
            },
        }, undefined);
        chai_1.assert.deepEqual(result, {
            error: true,
            msg: "Validator failed for path `name` with value `wad11dwa`",
        });
    });
});
//# sourceMappingURL=AddAccount.test.js.map