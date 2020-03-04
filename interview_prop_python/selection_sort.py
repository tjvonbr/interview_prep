def selection_sort(unsorted_arr):
    print(unsorted_arr)

    # Create iterator starting at index 1 and ending at n-1
    for i in range(1, len(unsorted_arr)):
        curr_index = unsorted_arr[i]
        j = i
        
        while j > 0 and unsorted_arr[j-1] > curr_index:
            unsorted_arr[j] = unsorted_arr[j-1]
            j -= 1
        unsorted_arr[j] = curr_index

    return unsorted_arr

print(selection_sort([1, 3, 2, 6, 4, 2]))