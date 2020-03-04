def minimum_swap(arr):
    length = len(arr)
   
    sorted_list = sorted(arr)
    print(sorted_list)

    for i in range(length):
        j = i + 1
        for j in range(length):
            if arr[i] < arr[j]:
                continue
            if arr[i] > arr[j]:
                bigger_num = arr[i]
                smaller_num = arr[j]
                arr[j] = bigger_num
                arr[i] = smaller_num

    print(arr)

minimum_swap([1, 7, 2, 3, 0])