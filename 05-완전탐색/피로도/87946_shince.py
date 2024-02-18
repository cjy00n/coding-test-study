# dungeons = [최소필요피로도, 소모피로도]
from itertools import permutations

def solution(k, dungeons):
    answer = 0
   
    n = len(dungeons)
    for i in permutations(dungeons, n):
        tmp = k
        cnt = 0

        for need, spend in i:
            if tmp >= need:
                tmp -= spend
                cnt += 1
        answer = max(answer, cnt)
    
    return answer