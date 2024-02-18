from itertools import permutations


def solution(k, dungeons):
    total = []
    for i in permutations(dungeons, len(dungeons)):
        total.append(list(i))

    max_dungeons = []
    i = 0
    while i < len(total):
        s = k
        count = 0
        for j in total[i]:
            if s >= j[0]:
                s -= j[1]
                count += 1
            elif s < j[0]:
                break

        max_dungeons.append(count)
        i += 1

    return max(max_dungeons)