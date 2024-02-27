// 미로 탐색
// https://www.acmicpc.net/problem/2178

// 입력값 처리
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
const [N, M] = input[0].split(" ").map((i) => parseInt(i));

const graph = Array.from({ length: N }, (_, i) =>
  input[i + 1].split("").map((i) => parseInt(i))
); // 미로 저장 배열

const visited = Array.from({ length: N }, () => Array(M).fill(false)); // 방문 배열 초기화

const dx = [0, 1, 0, -1];
const dy = [1, 0, -1, 0];

// BFS
const queue = [[0, 0]];
visited[0][0] = true;

while (queue.length > 0) {
  const [curX, curY] = queue.shift();
  const curCount = graph[curX][curY];

  for (let i = 0; i < 4; i++) {
    const nextX = curX + dx[i];
    const nextY = curY + dy[i];

    if (
      nextX >= 0 &&
      nextY >= 0 &&
      nextX < N &&
      nextY < M &&
      graph[nextX][nextY] > 0 &&
      !visited[nextX][nextY]
    ) {
      visited[nextX][nextY] = true;
      graph[nextX][nextY] = curCount + 1;
      queue.push([nextX, nextY]);
    }
  }
}

console.log(graph[N - 1][M - 1]); // 최종 답
