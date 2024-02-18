from itertools import permutations

def solution(numbers):
    n = len(numbers)
    arr = []
    for i in range(1, n+1):
        for j in permutations(numbers, i):
            num = ''.join(map(str, j))
            arr.append(int(num))
    
    arr = list(set(arr)) # 중복 제거
    answer = len(arr)
    
    for i in range(len(arr)):
        if arr[i] < 2:
            answer -= 1
            continue
        for j in range(2, arr[i]):
            if arr[i] % j == 0:
                answer -= 1
                print(arr[i])
                break
    return answer
