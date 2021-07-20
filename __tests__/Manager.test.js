const Manager = require("../lib/Manager");

describe("New Intern Instance", () => {
  const e = new Manager("name", 1, "email@email.com", "5551231234");

  it("should be a typeof object", () => {
    expect(typeof e).toBe("object");
  });

  it("should mirror the values passed in", () => {
    expect(e.name).toBe("name");
    expect(e.id).toBe(1);
    expect(e.email).toBe("email@email.com");
    expect(e.officeNumber).toBe("5551231234");
  });

  it("the functions should also return the values stored in object", () => {
    expect(e.getName()).toBe("name");
    expect(e.getId()).toBe(1);
    expect(e.getEmail()).toBe("email@email.com");
  });
  it("the role specific functions should also return the values", () => {
    expect(e.getOfficeNumber()).toBe("5551231234");
    expect(e.getRole()).toBe("Manager");
  });
});
