def dfs(visit, graph, s):
    visit[s] = 1

    for h in graph[s]:
        if visit[h] == 0:
            dfs(visit, graph, h)


def solution(n, computers):
    answer = 0
    visit = [0] * n
    graph = [[] for m in range(n)]

    for i in range(n):
        for j in range(n):
            if computers[i][j] == 1 and i != j:
                graph[i].append(j)
    l = 0
    while sum(visit) < n:
        if visit[l] == 0:
            dfs(visit, graph, l)
            answer += 1
        l += 1

    return answer