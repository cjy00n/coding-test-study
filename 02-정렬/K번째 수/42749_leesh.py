def solution(array, commands):
    answer = []
    for i in range(len(commands)):
        new_arr = array[commands[i][0]-1:commands[i][1]]
        new_arr.sort()
        answer.append(new_arr[commands[i][2]-1])
    print(answer)
    return answer