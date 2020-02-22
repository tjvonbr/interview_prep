S = 'trevorvonbruenchenhein' # 22
P = 'von' # 3

def find_pattern(T, P):
    n, m  = len(T), len(P)
    
    for i in range(n - m + 1):
        k = 0
        while k < m and T[i + k] == P[k]:
            k += 1
        if k == m:
            return i
    return -1

print(find_pattern(S, P))