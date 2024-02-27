// 전쟁-전투
// https://www.acmicpc.net/problem/1303

// 입력값 처리
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
const [N, M] = input[0].split(" ").map((i) => parseInt(i));

const graph = Array.from({ length: M }, (_, i) => input[i + 1]); // B/W 저장 배열

const visited = Array.from({ length: M }, () => Array(N).fill(false)); // 방문 배열 초기화

const dx = [0, 1, 0, -1];
const dy = [1, 0, -1, 0];

let white = 0; // 우리 팀의 전력
let blue = 0; // 적팀의 전력

for (let i = 0; i < M; i++) {
  for (let j = 0; j < N; j++) {
    if (!visited[i][j]) {
      if (graph[i][j] === "W") {
        white += BFS(i, j);
      } else if (graph[i][j] === "B") blue += BFS(i, j);
    }
  }
}

console.log(white, blue);

// BFS

function BFS(x, y) {
  const queue = [[x, y]];
  let count = 1;
  visited[x][y] = true;
  while (queue.length > 0) {
    const [curX, curY] = queue.shift();
    for (let i = 0; i < 4; i++) {
      const nextX = curX + dx[i];
      const nextY = curY + dy[i];

      if (
        nextX >= 0 &&
        nextY >= 0 &&
        nextX < M &&
        nextY < N &&
        !visited[nextX][nextY] &&
        graph[curX][curY] === graph[nextX][nextY]
      ) {
        count++;
        visited[nextX][nextY] = true;
        queue.push([nextX, nextY]);
      }
    }
  }

  return count ** 2;
}
