def solution(priorities, location):
    answer = 1
    queue = []
    exe = []
    # for j in range(len(priorities)) :
    while len(queue) != len(priorities):
        for j in range(len(priorities)):
            if max(priorities) == priorities[j]:
                queue.append(j)
                priorities[j] = 0
            if len(queue) == len(priorities): break

    return queue.index(location) + 1