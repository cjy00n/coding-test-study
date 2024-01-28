def solution(progresses, speeds):
    answer = []
    '''
    while progresses:
        sum = 0
        for i in range(len(progresses)):
            progresses[i] += speeds[i]

        while progresses and progresses[0] >= 100:
            del progresses[0], speeds[0]
            sum  += 1

        if sum > 0:
            answer.append(sum)'''
    queue = deque(progresses)
    while queue:
        sum = 0
        for i in range(len(progresses)):
            progresses[i] += speeds[i]

        while queue and queue[-1] >= 100:
            queue.popleft()
            sum += 1

        if sum > 0:
            answer.append(sum)
    return answer