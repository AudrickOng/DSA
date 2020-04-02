# Create a function that takes an array of strings
# and returns an array with only the strings that have numbers in them.
# If there are no strings containing numbers, return an empty array.
# 
# Notes:
# - The strings can contain white spaces or any type of characters.
# - No regex allowed

def num_in_str(lst):
    # start by overwriting line 11
    pass


print(num_in_str(['abc', 'abc10'])) # ['abc10']
print(num_in_str(['abc', 'ab10c',  'a10bc', 'bcd'])) # ['ab10c', 'a10bc']
print(num_in_str(['1', 'a' , ' ' ,'b'])) # ['1']
print(num_in_str(['rct', 'ABC', 'Test', 'xYz'])) # []
print(num_in_str(['this IS','10xYZ', 'xy2K77', 'Z1K2W0', 'xYz'])) # ['10xYZ', 'xy2K77', 'Z1K2W0']
print(num_in_str(['-/>', '10bc', 'abc '])) # ['10bc']