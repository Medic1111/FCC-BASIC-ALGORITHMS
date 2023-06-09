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

// TRUNCATE
describe("Testing truncate for: ", () => {
  it("should return a string", () => {
    expect(
      typeof foo.truncateString(
        "A-tisket a-tasket A green and yellow basket",
        8
      )
    ).toBe("string");
  });
  it(`"A-tisket a-tasket A green and yellow basket", 8 = A-tisket...`, () => {
    expect(
      foo.truncateString("A-tisket a-tasket A green and yellow basket", 8)
    ).toBe("A-tisket...");
  });
  it(`"Peter Piper picked a peck of pickled peppers", 11 = Peter Piper...`, () => {
    expect(
      foo.truncateString("Peter Piper picked a peck of pickled peppers", 11)
    ).toBe("Peter Piper...");
  });
  it(`"A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length = A-tisket a-tasket A green and yellow basket`, () => {
    expect(
      foo.truncateString(
        "A-tisket a-tasket A green and yellow basket",
        "A-tisket a-tasket A green and yellow basket".length
      )
    ).toBe("A-tisket a-tasket A green and yellow basket");
  });
  it(`"A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2 = A-tisket a-tasket A green and yellow basket`, () => {
    expect(
      foo.truncateString(
        "A-tisket a-tasket A green and yellow basket",
        "A-tisket a-tasket A green and yellow basket".length + 2
      )
    ).toBe("A-tisket a-tasket A green and yellow basket");
  });
  it(`"A-", 1 = A...`, () => {
    expect(foo.truncateString("A-", 1)).toBe("A...");
  });
  it(`"Absolutely Longer", 2 = Ab...`, () => {
    expect(foo.truncateString("Absolutely Longer", 2)).toBe("Ab...");
  });
});

// FINDERS KEEPERS
describe("Testinf findersKeepers for: ", () => {
  it("should return number or undefined", () => {
    expect(
      typeof foo.findElement([1, 3, 5, 8, 9, 10], function (num) {
        return num % 2 === 0;
      })
    ).toBe("number" || undefined);
  });
  it(`[1, 3, 5, 8, 9, 10], function (num) {
    return num % 2 === 0;
  } = 8`, () => {
    expect(
      foo.findElement([1, 3, 5, 8, 9, 10], function (num) {
        return num % 2 === 0;
      })
    ).toBe(8);
  });
  it(`[1, 3, 5, 9], function (num) {
    return num % 2 === 0;
  } = undefined`, () => {
    expect(
      foo.findElement([1, 3, 5, 9], function (num) {
        return num % 2 === 0;
      })
    ).toBe(undefined);
  });
});

// BOO WHO
describe("Testing booWho for: ", () => {
  it("should return boolean", () => {
    expect(typeof foo.booWho(true)).toBe("boolean");
  });
  it("should return true for true", () => {
    expect(foo.booWho(true)).toBe(true);
  });
  it("should return false for true", () => {
    expect(foo.booWho(false)).toBe(true);
  });
  it("should return [1, 2, 3] for false", () => {
    expect(foo.booWho([1, 2, 3])).toBe(false);
  });
  it("should return [].slice for false", () => {
    expect(foo.booWho([].slice)).toBe(false);
  });
  it("should return { 'a': 1 } for false", () => {
    expect(foo.booWho({ a: 1 })).toBe(false);
  });
  it("should return 1 for false", () => {
    expect(foo.booWho(1)).toBe(false);
  });
  it("should return NaN for false", () => {
    expect(foo.booWho(NaN)).toBe(false);
  });
  it("should return 'a' for false", () => {
    expect(foo.booWho("a")).toBe(false);
  });
  it("should return 'true' for false", () => {
    expect(foo.booWho("true")).toBe(false);
  });
  it("should return 'false' for false", () => {
    expect(foo.booWho("false")).toBe(false);
  });
});

// TitleCase
describe("Testing titleCase for: ", () => {
  it("should return a string", () => {
    expect(typeof foo.titleCase("I'm a little tea pot")).toBe("string");
  });
  it("I'm a little tea pot = I'm A Little Tea Pot", () => {
    expect(foo.titleCase("I'm a little tea pot")).toBe("I'm A Little Tea Pot");
  });
  it("sHoRt AnD sToUt = Short And Stout", () => {
    expect(foo.titleCase("sHoRt AnD sToUt")).toBe("Short And Stout");
  });
  it("HERE IS MY HANDLE HERE IS MY SPOUT = Here Is My Handle Here Is My Spout", () => {
    expect(foo.titleCase("HERE IS MY HANDLE HERE IS MY SPOUT")).toBe(
      "Here Is My Handle Here Is My Spout"
    );
  });
});

// Slice and Splice
describe("Testing frankenSplice for: ", () => {
  it("should return an array", () => {
    expect(typeof foo.frankenSplice([1, 2, 3], [4, 5], 1)).toBe("object");
  });
  it(`[1, 2, 3], [4, 5], 1 = [4, 1, 2, 3, 5]`, () => {
    expect(foo.frankenSplice([1, 2, 3], [4, 5], 1)).toEqual([4, 1, 2, 3, 5]);
  });
  it(`[1, 2, 3, 4], [], 0 = [1, 2, 3, 4]`, () => {
    expect(foo.frankenSplice([1, 2, 3, 4], [], 0)).toEqual([1, 2, 3, 4]);
  });
  it(`["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2, 0 = ["head", "shoulders", "claw", "tentacle", "knees", "toes"]`, () => {
    expect(
      foo.frankenSplice(
        ["claw", "tentacle"],
        ["head", "shoulders", "knees", "toes"],
        2,
        0
      )
    ).toEqual(["head", "shoulders", "claw", "tentacle", "knees", "toes"]);
  });
  it(`Should not mutate first array`, () => {
    let firstArr = [1, 2, 3, 4];
    let secondArr = [];
    foo.frankenSplice(firstArr, secondArr, 0);
    expect(firstArr).toEqual(firstArr);
  });
  it(`Should not mutate second array`, () => {
    let firstArr = [1, 2, 3, 4];
    let secondArr = [];
    foo.frankenSplice(firstArr, secondArr, 0);
    expect(secondArr).toEqual(secondArr);
  });
});

// FALSY BOUNCER
describe("Testing falsyBouncer for: ", () => {
  it("should return an array", () => {
    expect(typeof foo.bouncer([7, "ate", "", false, 9])).toBe("object");
  });
  it(`[7, "ate", "", false, 9] = [7, "ate", 9]`, () => {
    expect(foo.bouncer([7, "ate", "", false, 9])).toEqual([7, "ate", 9]);
  });
  it(`["a", "b", "c"] = ["a", "b", "c"]`, () => {
    expect(foo.bouncer(["a", "b", "c"])).toEqual(["a", "b", "c"]);
  });
  it(`[false, null, 0, NaN, undefined, ""] = []`, () => {
    expect(foo.bouncer([false, null, 0, NaN, undefined, ""])).toEqual([]);
  });
  it(`[null, NaN, 1, 2, undefined] = [1, 2]`, () => {
    expect(foo.bouncer([null, NaN, 1, 2, undefined])).toEqual([1, 2]);
  });
  it(`should not mutate original arr`, () => {
    let arr = [null, NaN, 1, 2, undefined];
    foo.bouncer([null, NaN, 1, 2, undefined]);
    expect(arr).toBe(arr);
  });
});

// WHERE DO I BELONG
describe("Testing whereDoIBelong for: ", () => {
  it(`should return a number`, () => {
    expect(typeof foo.getIndexToIns([10, 20, 30, 40, 50], 35)).toEqual(
      "number"
    );
  });
  it(`[10, 20, 30, 40, 50], 35 = 3`, () => {
    expect(foo.getIndexToIns([10, 20, 30, 40, 50], 35)).toEqual(3);
  });
  it(`[10, 20, 30, 40, 50], 30 = 2`, () => {
    expect(foo.getIndexToIns([10, 20, 30, 40, 50], 30)).toEqual(2);
  });
  it(`[40, 60], 50, 30 = 1`, () => {
    expect(foo.getIndexToIns([40, 60], 50, 30)).toEqual(1);
  });
  it(`[3, 10, 5], 3 = 0`, () => {
    expect(foo.getIndexToIns([3, 10, 5], 3)).toEqual(0);
  });
  it(`[5, 3, 20, 3], 5 = 2`, () => {
    expect(foo.getIndexToIns([5, 3, 20, 3], 5)).toEqual(2);
  });
  it(`[2, 20, 10], 19 = 2`, () => {
    expect(foo.getIndexToIns([2, 20, 10], 19)).toEqual(2);
  });
  it(`[], 1 = 0`, () => {
    expect(foo.getIndexToIns([], 1)).toEqual(0);
  });
});

// MUTATIONS
describe("Testing mutations for: ", () => {
  it("should return a boolean", () => {
    expect(typeof foo.mutation(["hello", "hey"])).toBe("boolean");
  });
  it(`["hello", "hey"] = false`, () => {
    expect(foo.mutation(["hello", "hey"])).toBe(false);
  });
  it(`["hello", "Hello"] = true`, () => {
    expect(foo.mutation(["hello", "Hello"])).toBe(true);
  });
  it(`["zyxwvutsrqponmlkjihgfedcba", "qrstu"] = true`, () => {
    expect(foo.mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"])).toBe(true);
  });
  it(`["Mary", "Army"] = true`, () => {
    expect(foo.mutation(["Mary", "Army"])).toBe(true);
  });
  it(`["Mary", "Aarmy"] = true`, () => {
    expect(foo.mutation(["Mary", "Aarmy"])).toBe(true);
  });
  it(`["Alien", "line"] = true`, () => {
    expect(foo.mutation(["Alien", "line"])).toBe(true);
  });
  it(`["floor", "for"] = true`, () => {
    expect(foo.mutation(["floor", "for"])).toBe(true);
  });
  it(`["Noel", "Ole"] = true`, () => {
    expect(foo.mutation(["Noel", "Ole"])).toBe(true);
  });
  it(`["hello", "neo"] = false`, () => {
    expect(foo.mutation(["hello", "neo"])).toBe(false);
  });
  it(`["voodoo", "no"] = false`, () => {
    expect(foo.mutation(["voodoo", "no"])).toBe(false);
  });
  it(`["ate", "date"] = false`, () => {
    expect(foo.mutation(["ate", "date"])).toBe(false);
  });
  it(`["Tiger", "Zebra"] = false`, () => {
    expect(foo.mutation(["Tiger", "Zebra"])).toBe(false);
  });
});

// CHUNKY MONKEY
describe(`testing chunkyMonkey for: `, () => {
  it(`returns an array`, () => {
    expect(typeof foo.chunkArrayInGroups(["a", "b", "c", "d"], 2)).toBe(
      "object"
    );
  });
  it(`["a", "b", "c", "d"], 2 = [["a", "b"], ["c", "d"]]`, () => {
    expect(foo.chunkArrayInGroups(["a", "b", "c", "d"], 2)).toEqual([
      ["a", "b"],
      ["c", "d"],
    ]);
  });
  it(`[0, 1, 2, 3, 4, 5], 3 = [[0, 1, 2], [3, 4, 5]]`, () => {
    expect(foo.chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3)).toEqual([
      [0, 1, 2],
      [3, 4, 5],
    ]);
  });
  it(`[0, 1, 2, 3, 4, 5], 2 = [[0, 1], [2, 3], [4, 5]]`, () => {
    expect(foo.chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2)).toEqual([
      [0, 1],
      [2, 3],
      [4, 5],
    ]);
  });
  it(`[0, 1, 2, 3, 4, 5], 4 = [[0, 1], [[0, 1, 2, 3], [4, 5]]`, () => {
    expect(foo.chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4)).toEqual([
      [0, 1, 2, 3],
      [4, 5],
    ]);
  });
  it(`[0, 1, 2, 3, 4, 5, 6], 3 = [[0, 1, 2], [3, 4, 5], [6]]`, () => {
    expect(foo.chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3)).toEqual([
      [0, 1, 2],
      [3, 4, 5],
      [6],
    ]);
  });
  it(`[0, 1, 2, 3, 4, 5, 6, 7, 8], 4 = [[0, 1, 2], [3, 4, 5], [6]]`, () => {
    expect(foo.chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4)).toEqual([
      [0, 1, 2, 3],
      [4, 5, 6, 7],
      [8],
    ]);
  });
  it(`[0, 1, 2, 3, 4, 5, 6, 7, 8], 2 = [[0, 1], [2, 3], [4, 5], [6, 7], [8]]`, () => {
    expect(foo.chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2)).toEqual([
      [0, 1],
      [2, 3],
      [4, 5],
      [6, 7],
      [8],
    ]);
  });
});
