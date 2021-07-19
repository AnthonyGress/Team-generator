const Employee = require('../lib/Employee');

test("Instantisise new Employee instance", () => {
  const e = new Employee();
  expect(type(e).toBe("object"));
})