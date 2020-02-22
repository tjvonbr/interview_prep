"""
Given a string, make sure no consecutive indices have matching characters.
Return the minimum number of deletions you'd have to make.
"""

def alternate_characters(s):
    count = 0

    for i in range(len(s)-1):
        k = i + 1
        
        if s[i] == s[k]:
            count += 1
        else:
            continue

    print(count)





alternate_characters('AABAAB')