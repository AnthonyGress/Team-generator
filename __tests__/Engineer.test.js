const Engineer = require("../lib/Engineer");

describe("New Engineer Instance", () => {
  const e = new Engineer("name", 1, "email@email.com", "github");

  it("should be a typeof object", () => {
    expect(typeof e).toBe("object");
  });

  it("should mirror the values passed in", () => {
    expect(e.name).toBe("name");
    expect(e.id).toBe(1);
    expect(e.email).toBe("email@email.com");
    expect(e.github).toBe("github");
  });

  it("the functions should also return the values stored in object", () => {
    expect(e.getName()).toBe("name");
    expect(e.getId()).toBe(1);
    expect(e.getEmail()).toBe("email@email.com");
  });
  it("the role specific functions should also return the values", () => {
  expect(e.getGithub()).toBe("github");
  expect(e.getRole()).toBe("Engineer");
  });
});
