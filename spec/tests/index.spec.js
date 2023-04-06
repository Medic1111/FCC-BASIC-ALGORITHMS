const foo = require("../../index");

// CELSIUS
describe("Testing Celsius to Fahren converter for: ", () => {
  it("Should return a number", () => {
    expect(typeof foo.converter(76)).toEqual("number");
  });
  it("Should properly convert the temperature 40 to 104", () => {
    expect(foo.converter(40)).toEqual(104);
  });
  it("Should properly convert the temperature -40 to -4", () => {
    expect(foo.converter(-20)).toEqual(-4);
  });
  it("Should properly convert the temperature 0 to 32", () => {
    expect(foo.converter(0)).toEqual(32);
  });
});

// REVERSE A STRING
describe("Testing reverse string for: ", () => {
  it("should return a string", () => {
    expect(typeof foo.reverseString("test")).toEqual("string");
  });
  it("should return olleh for hello", () => {
    expect(foo.reverseString("hello")).toEqual("olleh");
  });
  it("should return Howdy for ydwoH", () => {
    expect(foo.reverseString("Howdy")).toEqual("ydwoH");
  });
  it("should return Greetings from Earth for htraE morf sgniteerG", () => {
    expect(foo.reverseString("Greetings from Earth")).toEqual(
      "htraE morf sgniteerG"
    );
  });
});

// FACTORIZLIZE A NUMBER
describe("Testing Function Factorialize for:", () => {
  it("should return a number", () => {
    expect(typeof foo.factorialize(3)).toEqual("number");
  });
  it("should return 120 for 5", () => {
    expect(foo.factorialize(5)).toEqual(120);
  });
  it("should return 3628800 for 10", () => {
    expect(foo.factorialize(10)).toEqual(3628800);
  });
  it("should return 2432902008176640000 for 20", () => {
    expect(foo.factorialize(20)).toEqual(2432902008176640000);
  });
  it("should return 1 for 0", () => {
    expect(foo.factorialize(0)).toEqual(1);
  });
});

// FIND THE LONGEST WORD IN A STRING
describe("Testing findTheLongest for: ", () => {
  it("should return a number", () => {
    expect(
      typeof foo.findLongestWordLength(
        "The quick brown fox jumped over the lazy dog"
      )
    ).toEqual("number");
  });
  it("The quick brown fox jumped over the lazy dog = 6", () => {
    expect(
      foo.findLongestWordLength("The quick brown fox jumped over the lazy dog")
    ).toEqual(6);
  });
  it("May the force be with you = 5", () => {
    expect(foo.findLongestWordLength("May the force be with you")).toEqual(5);
  });
  it("Google do a barrel roll = 6", () => {
    expect(foo.findLongestWordLength("Google do a barrel roll")).toEqual(6);
  });
  it("What is the average airspeed velocity of an unladen swallow = 8", () => {
    expect(
      foo.findLongestWordLength(
        "What is the average airspeed velocity of an unladen swallow"
      )
    ).toEqual(8);
  });
  it("What if we try a super-long word such as otorhinolaryngology = 19", () => {
    expect(
      foo.findLongestWordLength(
        "What if we try a super-long word such as otorhinolaryngology"
      )
    ).toEqual(19);
  });
});

// RETURN THE LARGEST NUMBERS IN ARRAY
describe("Test largestOfFour for: ", () => {
  it("should return an array", () => {
    expect(
      typeof foo.largestOfFour([
        [4, 5, 1, 3],
        [13, 27, 18, 26],
        [32, 35, 37, 39],
        [1000, 1001, 857, 1],
      ])
    ).toEqual("object");
  });
  it("matrix should return [27, 5, 39, 1001]", () => {
    expect(
      foo.largestOfFour([
        [4, 5, 1, 3],
        [13, 27, 18, 26],
        [32, 35, 37, 39],
        [1000, 1001, 857, 1],
      ])
    ).toEqual([5, 27, 39, 1001]);
  });
  it("matrix should return [9, 35, 97, 1000000]", () => {
    expect(
      foo.largestOfFour([
        [4, 9, 1, 3],
        [13, 35, 18, 26],
        [32, 35, 97, 39],
        [1000000, 1001, 857, 1],
      ])
    ).toEqual([9, 35, 97, 1000000]);
  });
  it("matrix should return [25, 48, 21, -3]", () => {
    expect(
      foo.largestOfFour([
        [17, 23, 25, 12],
        [25, 7, 34, 48],
        [4, -10, 18, 21],
        [-72, -3, -17, -10],
      ])
    ).toEqual([25, 48, 21, -3]);
  });
});

// Confirm the Ending
describe("Testing confirmEnding for:", () => {
  it("should return a boolean", () => {
    expect(typeof foo.confirmEnding("Bastian", "n")).toEqual("boolean");
  });
  it("Bastian, n = true", () => {
    expect(foo.confirmEnding("Bastian", "n")).toEqual(true);
  });
  it(`"Congratulation", "on" = true`, () => {
    expect(foo.confirmEnding("Congratulation", "on")).toEqual(true);
  });
  it(`"Connor", "n" = false`, () => {
    expect(foo.confirmEnding("Connor", "n")).toEqual(false);
  });
  it(`"Walking on water and developing software from a specification are easy if both are frozen", "specification" = false`, () => {
    expect(
      foo.confirmEnding(
        "Walking on water and developing software from a specification are easy if both are frozen",
        "specification"
      )
    ).toEqual(false);
  });
  it(`"He has to give me a new name", "name" = true`, () => {
    expect(foo.confirmEnding("He has to give me a new name", "name")).toEqual(
      true
    );
  });
  it(`"Open sesame", "same" = true`, () => {
    expect(foo.confirmEnding("Open sesame", "same")).toEqual(true);
  });
  it(`"Open sesame", "sage" = false`, () => {
    expect(foo.confirmEnding("Open sesame", "sage")).toEqual(false);
  });
  it(`"Open sesame", "game" = false`, () => {
    expect(foo.confirmEnding("Open sesame", "game")).toEqual(false);
  });
  it(`"If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain" = false`, () => {
    expect(
      foo.confirmEnding(
        "If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing",
        "mountain"
      )
    ).toEqual(false);
  });
  it(`"Abstraction", "action" = true`, () => {
    expect(foo.confirmEnding("Abstraction", "action")).toEqual(true);
  });
});

// REPEAT A STRING
describe("Testing repeatString for: ", () => {
  it("should return a string", () => {
    expect(typeof foo.repeatStringNumTimes("*", 3)).toBe("string");
  });
  it(`"*", 3 = ***`, () => {
    expect(foo.repeatStringNumTimes("*", 3)).toBe("***");
  });
  it(`"abc", 3 = abcabcabc`, () => {
    expect(foo.repeatStringNumTimes("abc", 3)).toBe("abcabcabc");
  });
  it(`"abc", 4 = abcabcabcabc`, () => {
    expect(foo.repeatStringNumTimes("abc", 4)).toBe("abcabcabcabc");
  });
  it(`"*", 8 = ********`, () => {
    expect(foo.repeatStringNumTimes("*", 8)).toBe("********");
  });
  it(`"abc", -2 = ''`, () => {
    expect(foo.repeatStringNumTimes("abc", -2)).toBe("");
  });
  it(`"abc", 0 = ''`, () => {
    expect(foo.repeatStringNumTimes("abc", 0)).toBe("");
  });
});
