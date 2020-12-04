// Importing data elements, to save some space and time
const { range, letter, passwords } = require("./day2");
/***
 *
 *
 *
 *
 * Given the same example list from above:
 *
 *  1-3 a: abcde is valid: position 1 contains a and position 3 does not.
 *  1-3 b: cdefg is invalid: neither position 1 nor position 3 contains b.
 *  2-9 c: ccccccccc is invalid: both position 2 and position 9 contain c.
 *
 * How many passwords are valid according to the new interpretation of the policies?
 * (Be careful; Toboggan Corporate Policies have no concept of "index zero"!)
 */

const index = () => {
  const offset = 1; // Not zero indexed in problem
  const result = passwords.filter((element, index) => {
    const [policyFirstPosition, policySecondPosition] = range[index].split("-");
    const fixedPolicyFirstPosition = policyFirstPosition - offset;
    const fixedPolicySecondPosition = policySecondPosition - offset;
    const policyLetter = letter[index];
    const letterArray = element.split("");
    const firstLetter = letterArray[fixedPolicyFirstPosition];
    const secondLetter = letterArray[fixedPolicySecondPosition];
    if (firstLetter === policyLetter && secondLetter === policyLetter) {
      return false;
    } else if (firstLetter === policyLetter || secondLetter === policyLetter) {
      return true;
    } else {
      return false;
    }
  }).length;

  console.log(result);
  return result;
};

module.exports = { index };
