def solution(answers):
    s1 = [1, 2, 3, 4, 5]
    s2 = [2, 1, 2, 3, 2, 4, 2, 5]
    s3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    count = [0, 0, 0]
    
    for i in range (len(answers)):
        if (answers[i] == s1[i % 5]):
            count[0] += 1
        if (answers[i] == s2[i % 8]):
            count[1] += 1
        if (answers[i] == s3[i % 10]):
            count[2] += 1
    
    answer = list(filter(lambda x: count[x] == max(count), range(len(count))))
    answer = [i+1 for i in answer]
    return answer

print(solution([1, 2, 3, 4, 5]))
