import { make } from "./make";

describe("make.ts", () => {
  it("should instance User", () => {
    class User {
      id!: number;
      name!: string;
    }
    const user = make(User, {
      id: 1,
      name: "xxx",
    });

    expect(user).toBeInstanceOf(User);
    expect(user).toEqual({
      id: 1,
      name: "xxx",
    });
  });
});
