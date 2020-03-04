def binary_search(arr, n):
    # Init low and high to determine bounds of list you're operating on
    low = 0
    high = len(arr) - 1

    while low <= high:
        mid = int((low + high) / 2)
        guess = arr[mid]
        if guess == n:
            return mid
        elif guess > n:
            high = mid - 1
        else:
            low = mid + 1
    return None

# Should return the index, in this case index 5 
print(binary_search([1 ,3, 5, 7, 9, 11], 11))