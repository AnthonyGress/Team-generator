const Intern = require("../lib/Intern");

describe("New Intern Instance", () => {
  const e = new Intern("name", 1, "email@email.com", "UCF");

  it("should be a typeof object", () => {
    expect(typeof e).toBe("object");
  });

  it("should mirror the values passed in", () => {
    expect(e.name).toBe("name");
    expect(e.id).toBe(1);
    expect(e.email).toBe("email@email.com");
    expect(e.school).toBe("UCF");
  });

  it("the functions should also return the values stored in object", () => {
    expect(e.getName()).toBe("name");
    expect(e.getId()).toBe(1);
    expect(e.getEmail()).toBe("email@email.com");
  });
  it("the role specific functions should also return the values", () => {
    expect(e.getSchool()).toBe("UCF");
    expect(e.getRole()).toBe("Intern");
  });
});
