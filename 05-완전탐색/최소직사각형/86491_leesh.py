def solution(sizes):
    small = []
    big = []

    for i in sizes:
        if i[0] < i[1]:
            small.append(i[0])
            big.append(i[1])
        else:
            small.append(i[1])
            big.append(i[0])
    return max(small) * max(big)