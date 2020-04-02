/**
 * Create a function that takes an array of strings
 * and returns an array with only the strings that have numbers in them.
 * If there are no strings containing numbers, return an empty array.
 *
 * Notes:
 * - The strings can contain white spaces or any type of characters.
 * - No regex allowed
 *
 */

function numInStr(arr) {
	// write your code here
}

console.log(numInStr(['abc', 'abc10'])); // ['abc10']
console.log(numInStr(['abc', 'ab10c', 'a10bc', 'bcd'])); // ['ab10c', 'a10bc']
console.log(numInStr(['1', 'a', ' ', 'b'])); // ['1']
console.log(numInStr(['rct', 'ABC', 'Test', 'xYz'])); // []
console.log(numInStr(['this IS', '10xYZ', 'xy2K77', 'Z1K2W0', 'xYz'])); // ['10xYZ', 'xy2K77', 'Z1K2W0']
console.log(numInStr(['-/>', '10bc', 'abc '])); // ['10bc']
