// 음식물 피하기
// https://www.acmicpc.net/problem/1743

// 입력값 처리
let fs = require("fs");
let input = fs.readFileSync("dev_stdin.txt").toString().split("\n");
const [N, M, K] = input[0].split(" ").map((i) => parseInt(i));

const map = Array.from({ length: N }, () =>
  Array.from({ length: M }, () => false)
);
const visited = Array.from({ length: N }, () => Array(M).fill(false));

for (let i = 1; i <= K; i++) {
  const [x, y] = input[i].split(" ").map(Number);
  map[x - 1][y - 1] = true;
}

const dx = [0, 1, 0, -1];
const dy = [1, 0, -1, 0];

let max = 0;
let count = 0;

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (!visited[i][j] && map[i][j]) {
      count = 0;
      dfs(i, j);
      max = Math.max(max, count);
    }
  }
}
console.log(max);

function dfs(x, y) {
  count++;
  visited[x][y] = true;
  for (let i = 0; i < 4; i++) {
    const nextX = x + dx[i];
    const nextY = y + dy[i];

    if (
      nextX >= 0 &&
      nextY >= 0 &&
      nextX < N &&
      nextY < M &&
      map[nextX][nextY] &&
      !visited[nextX][nextY]
    ) {
      dfs(nextX, nextY);
    }
  }
  return count;
}
