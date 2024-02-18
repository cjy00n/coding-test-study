from itertools import permutations


def primenumber(number):
    if number == 1:
        return False
    for i in range(2, int(number ** 0.5) + 1):
        if number % i == 0:
            return False
    return True


def solution(numbers):
    answer = 0
    arr = []
    for i in range(1, len(numbers) + 1):
        for j in permutations(numbers, i):
            temp = list(j)
            string = ''.join(s for s in temp)
            if string[0] != '0' and primenumber(int(string)) and string not in arr:
                answer += 1
                arr.append(string)

    return answer