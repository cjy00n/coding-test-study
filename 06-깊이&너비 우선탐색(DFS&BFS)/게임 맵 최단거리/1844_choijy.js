// 깊이/너비 우선탐색(DFS/BFS) - 게임 맵 최단거리
// https://school.programmers.co.kr/learn/courses/30/lessons/1844

// 문제가 "목표 노드에 도착하는 경로가 여러 개일때 최단 경로를 찾는문제"이면 BFS로 문제를 풀어야 한다.
function solution(maps) {
  const n = maps.length;
  const m = maps[0].length;

  const dx = [0, 1, 0, -1]; // 우 하 좌 상
  const dy = [1, 0, -1, 0]; // 우 하 좌 상

  const visited = maps.map((row) => row.map((col) => (col ? false : true)));

  function BFS(x, y) {
    const queue = [];
    queue.push([x, y]);

    while (queue.length > 0) {
      const [curX, curY] = queue.shift();
      visited[curX][curY] = true;
      for (let i = 0; i < 4; i++) {
        const nextX = curX + dx[i];
        const nextY = curY + dy[i];
        if (nextX >= 0 && nextY >= 0 && nextX < n && nextY < m) {
          if (!visited[nextX][nextY] && maps[nextX][nextY]) {
            visited[nextX][nextY] = true;
            maps[nextX][nextY] = maps[curX][curY] + 1;
            queue.push([nextX, nextY]);
          }
        }
      }
    }
  }

  BFS(0, 0);
  return maps[n - 1][m - 1] === 1 ? -1 : maps[n - 1][m - 1];
}

function faildSolutionUsingDFS(maps) {
  // dfs로 풀었던 첫번째 답변
  // 정확성 테스트는 모두 통과하지만, 효율성 테스트는 모두 실패한다.
  // 문제가 "목표 노드에 도착하는 경로가 여러 개일때 최단 경로를 찾는문제"이면 BFS로 문제를 풀어야 한다.
  const n = maps.length;
  const m = maps[0].length;

  let answer = Infinity;

  const visited = maps.map((row) => row.map((col) => (col ? false : true)));

  function dfs(row, col, count) {
    if (row == n - 1 && col == m - 1) {
      count++;
      if (answer > count) answer = count;
      return;
    } else if (!visited[row][col]) {
      visited[row][col] = true;
      count++;
    } else if (visited[row][col]) return;

    if (row < n - 1) dfs(row + 1, col, count);
    if (row > 0) dfs(row - 1, col, count);
    if (col > 0) dfs(row, col - 1, count);
    if (col < m - 1) dfs(row, col + 1, count);

    if (maps[row][col]) visited[row][col] = false;
    return;
  }

  dfs(0, 0, 0);
  return answer === Infinity ? -1 : answer;
}

console.log(
  solution([
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 1],
    [0, 0, 0, 0, 1],
  ])
);

console.log(
  solution([
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 0],
    [0, 0, 0, 0, 1],
  ])
);
