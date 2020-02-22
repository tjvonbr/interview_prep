def divide(a, b):
    if a % b == 0:
        a = a / b
    return a

def is_ugly(n):
    n = divide(n, 2)
    n = divide(n, 3)
    n = divide(n, 5)
        
    if n == 1:
        return 1
    else:
        return 0

def get_nth_ugly_num(n):
    i = 1
    count = 1

    while n > count:
        i += 1
        if is_ugly(i):
            count += 1
    return i

print(get_nth_ugly_num(10))