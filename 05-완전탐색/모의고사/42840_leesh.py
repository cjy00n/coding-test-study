def solution(answers):
    person = [0,0,0]
    answer = []
    num1 = [1,2,3,4,5] #5
    num2 = [2,1,2,3,2,4,2,5] #8
    num3 = [3,3,1,1,2,2,4,4,5,5] #10
    for i in range(len(answers)) :
        if answers[i] == num1[i%5]:
            person[0] +=1
        if answers[i] == num2[i%8] :
            person[1] += 1
        if answers[i] == num3[i%10] :
            person[2] += 1
    max_num = max(person)
    for i in range(len(person)) :
        if person[i] == max_num:
            answer.append(i+1)
    return answer