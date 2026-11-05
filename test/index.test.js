"use strict";

const assert = require("node:assert/strict");
const test = require("node:test");
const { formatDate, formatGreeting, main } = require("../src/index.js");

const sampleDate = new Date(Date.UTC(2026, 10, 5, 12, 0, 0));

test("formats a UTC date as a readable calendar day", () => {
  assert.equal(formatDate(sampleDate), "Thursday, November 5, 2026");
});

test("greets a named person with the current date", () => {
  assert.equal(
    formatGreeting("ENTINNN", sampleDate),
    "Hello, ENTINNN! Today is Thursday, November 5, 2026.",
  );
});

test("uses a friendly default when the name is missing or blank", () => {
  assert.equal(
    formatGreeting(undefined, sampleDate),
    "Hello, there! Today is Thursday, November 5, 2026.",
  );
  assert.equal(
    formatGreeting("   ", sampleDate),
    "Hello, there! Today is Thursday, November 5, 2026.",
  );
});

test("main writes one greeting line to stdout", () => {
  let output = "";
  const stdout = {
    write(chunk) {
      output += chunk;
    },
  };

  main(["Ada"], stdout, sampleDate);

  assert.equal(output, "Hello, Ada! Today is Thursday, November 5, 2026.\n");
});
