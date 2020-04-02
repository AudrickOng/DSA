/**
 * Create a function that groups a sorted array of numbers based on a size parameter.
 * The size represents the maximum length of each sub-array.
 *
 * Notes:
 * - Try to not use any built-in methods, except .push()
 * - If there are missing parameters, display Invalid Input
 * - If it is not groupable or the size is invalid, display Not Groupable
 */

function group(arr, size) {
	// write your code here
}

console.log(group([3, 1, 2, 4], 2)); // [[1, 2], [3, 4]]
console.log(group([])); // Invalid Input
console.log(group([1, 11, 44, 66, 45, 89], 3)); // [[1, 11, 44], [45, 66, 89]]
console.log(group([], 2)); // Not Groupable
console.log(group([11, 64, 67, 23, 54, 65, 87, 19, 75, 45], 4));
// [[11, 19, 23, 45], [54, 64, 65, 67], [75, 87]]
console.log(group([12, 42, 33], 1)); // [[12], [33], [42]]
console.log(group([1, 5, 3, 7], -2)); // Not Groupable
console.log(group()); // Invalid Input
