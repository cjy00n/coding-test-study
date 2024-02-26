def solution(numbers, target):
    def dfs(i, sum_num):
        global answer
        if (i == len(numbers)):
            if sum_num == target:
                answer += 1
            return
        dfs(i + 1, sum_num + numbers[i])
        dfs(i + 1, sum_num - numbers[i])
        return

    global answer
    answer = 0
    dfs(0, 0)
    return answer