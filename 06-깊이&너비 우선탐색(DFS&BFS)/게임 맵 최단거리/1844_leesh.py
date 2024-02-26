from collections import deque


def solution(maps):
    n, m = len(maps), len(maps[0])
    visit = [[0 for _ in range(m)] for _ in range(n)]  # m, n 바뀌면 런타임 에러~~~~~
    dq = deque()
    dq.append((0, 0))
    dx = [1, 0, -1, 0]
    dy = [0, 1, 0, -1]

    while dq:
        x, y = dq.popleft()
        visit[x][y] = 1

        for i in range(4):
            mx, my = x + dx[i], y + dy[i]
            if 0 <= mx < n and 0 <= my < m:
                if visit[mx][my] == 0 and maps[mx][my] == 1:
                    dq.append((mx, my))
                    maps[mx][my] = maps[x][y] + 1

    if visit[n - 1][m - 1]:
        return maps[n - 1][m - 1]
    else:
        return -1
    