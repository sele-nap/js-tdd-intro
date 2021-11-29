const assert = require("assert");

function capitalizeFirstLetters(input) {
  return input
    .split(" ")
    .map(function (word) {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(" ");
}

assert.strictEqual(typeof capitalizeFirstLetters, "function");

assert.strictEqual(
  capitalizeFirstLetters("javaScript is good"),
  "Javascript Is Good"
);

assert.strictEqual(capitalizeFirstLetters("z"), "Z");

assert.strictEqual(capitalizeFirstLetters(""), "");
