const assert = require('assert');

const Rooster = require('../index');

describe('Rooster', () => {
  describe('.announceDawn', () => {
    it('returns a rooster call', () => {
      // Setup
      const expected = 'cock-a-doodle-doo!';
      // Exercise
      const announceDawn = Rooster.announceDawn();
      // Verify
      assert.strictEqual(announceDawn, expected);
    });
  });
  describe('.timeAtDawn', () => {
    it('returns its argument as a string', () => {
      // Setup
      const input = 11;
      const expected = '11';
      // Exercise
      const timeAtDawn = Rooster.timeAtDawn(input);
      // Verify
      assert.strictEqual(timeAtDawn, expected);
    });
    it('throws an error if passed a number less than 0', () => {
      // Setup
      const less = -1;
      // Exercise + Verify
      assert.throws(() => {
        Rooster.timeAtDawn(less);
      },
      RangeError
      );
    });
    it('throws an error if passed a number greater than 23', () => {
      // Setup
      const greater = 24;
      // Exercise
      const timeAtDawnGreater = () => Rooster.timeAtDawn(greater);
      // Verify
      assert.throws(timeAtDawnGreater, RangeError);
    });
  });
});