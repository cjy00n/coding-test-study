def solution(citations):
    answer = []
    for c in citations:
        temp = 0
        for j in citations:
            if j >= c:
                temp += 1
        answer.append(c) if temp > c else answer.append(temp)

    return max(answer)