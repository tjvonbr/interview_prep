"""
Write a function that takes two integers and 
returns True if n is a multiple of m and returns 
false otherwise
"""

def is_multiple(n, m):
    if n % m == 0:
        return True
    else:
        return False

print(is_multiple(10, 2))