# n is the number of characters in the string
# s is a string of 'U's or 'D's

def counting_valleys(n, s):
    level = 0
    valleys = 0

    for direction in s:
        if direction == "U":
            level += 1
            if level == 0:
                valleys += 1
        else: level -= 1

    print(valleys) 

counting_valleys(8, "UDDDUDUU")