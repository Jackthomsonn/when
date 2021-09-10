const assert = require('assert');
const {when} = require("../bin/when");

describe('when', () => {
  describe('match found', () => {
    it('should return a value', () => {
      const when_factory = when([{
        match_on: {a: {}},
        do: () => "Test done..."
      }])
      
      const result = when_factory(null, null, {})

      const actual_message = result.value({a: "1"})

      assert.equal(actual_message, "Test done...")
    });
  });

  describe('no match found', () => {
    it('should return a value', () => {
      const build_when = when([{
        match_on: {a: {}},
        do: () => "Test done..."
      }])
      
      const result = build_when(null, null, {})

      const actual_message = result.value({b: "1"})

      assert.equal(actual_message, "No matching clause")
    });
  });
});
