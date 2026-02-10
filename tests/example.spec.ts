import { test, expect } from "@playwright/test";

test("get started link", async ({ request }) => {
  const response = await request.get("/WeatherForecast");
  console.log(JSON.stringify(response));
  expect(response.ok).toBeTruthy();
});
