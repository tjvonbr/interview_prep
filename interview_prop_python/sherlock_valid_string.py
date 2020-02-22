"""
Given a string, return YES if the frequency of characters is the same OR
if one character at one string can be removed to make the above statement True.
Otherwise, return NO
"""

def sherlock_valid_string(s):
    freq_counter = {}

    for i in s:
        if i not in freq_counter:
            freq_counter[i] = 1
        elif i in freq_counter:
            freq_counter[i] += 1

    print(freq_counter[0])



sherlock_valid_string('abcc')