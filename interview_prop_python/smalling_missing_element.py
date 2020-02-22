def smallest_missing(arr):
    # Idea 1:

    # Idea 2a:
        # Loop through the array
        for i in range(len(arr)):
            # Check that each array element matches its index
            if arr[i] != i:
            # If it doesn't, return i as our smallest missing element
                return i
        # Return the length of the array if we reach the end of the loop
        return arr[-1] + 1

    # Idea 2b

print(smallest_missing([0, 1, 2, 6, 9, 11, 15]))
print(smallest_missing([1, 2, 3, 4, 6, 9, 11, 15]))
print(smallest_missing([0, 1, 2, 3, 4, 5, 6]))
