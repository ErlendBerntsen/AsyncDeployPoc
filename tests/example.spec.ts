import { test, expect } from "@playwright/test";
import { type User } from "../src/types/user";

test("get user", async ({ request }) => {
  const response = await request.get("/api/User");
  const user = (await response.json()) as User;
  console.log(JSON.stringify(user, null, 2));
  expect(user.firstName).toBe("Erlend");
  expect(user.lastName).toBe("Berntsen");
});
