def return_squares(n):
    squares = [i*i for i in range(n)]
    _sum = sum(squares)

    return _sum


print(return_squares(11))