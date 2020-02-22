from collections import Counter

def sock_merchant(n, arr):
    counter = Counter(arr)
    answer = 0

    for x in counter:
        answer += counter[x] // 2

    print(answer)

# Should return 4
sock_merchant(9, [1, 1, 2, 2, 3, 3, 4, 4, 1])