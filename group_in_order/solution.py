# Create a function that groups a sorted list of numbers based on a size parameter.
# The size represents the maximum length of each sub-list.
#
# Notes:
# - Try to not use any built-in methods, except append
# - If there are missing parameters, display Invalid Input
# - If it is not groupable or the size is invalid, display Not Groupable

# try to fix the error on line 15 & 21
def group(lst = [], size = 1):
	# start by overwriting line 12
    pass

print(group([3, 1, 2, 4], 2)) # [[1, 2], [3, 4]]
print(group([])) # Invalid Input
print(group([1, 11, 44, 66, 45, 89], 3)) # [[1, 11, 44], [45, 66, 89]]
print(group([], 2)) # Not Groupable
print(group([11, 64, 67, 23, 54, 65, 87, 19, 75, 45], 4))
# [[11, 19, 23, 45], [54, 64, 65, 67], [75, 87]]
print(group([12, 42, 33], 1)) # [[12], [33], [42]]
print(group([1, 5, 3, 7], -2)) # Not Groupable
print(group()) # Invalid Input