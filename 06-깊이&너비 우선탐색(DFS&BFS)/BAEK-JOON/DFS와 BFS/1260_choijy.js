// 입력값 처리
let fs = require("fs");
let input = fs.readFileSync("dev_stdin.txt").toString().split("\n");
const [N, M, V] = input[0].split(" ").map((i) => parseInt(i));

// 풀이 시작
const graph = Array.from({ length: N + 1 }, () => []);
const visitedDFS = Array(N).fill(false);
const visitedBFS = Array(N).fill(false);

for (let i = 1; i < input.length; i++) {
  if (input[i] !== "") {
    const [start, end] = input[i].split(" ").map((i) => parseInt(i));
    graph[start].push(end);
    graph[end].push(start);
  }
}

graph.forEach((edges) => edges.sort((a, b) => a - b)); // 번호 작은 것 부터 방문(문제의 조건 )

// DFS
const dfsResult = [];

function DFS(v) {
  dfsResult.push(v);
  visitedDFS[v] = true;

  for (const n of graph[v]) {
    if (!visitedDFS[n]) {
      DFS(n);
    }
  }
}

// BFS
const bfsResult = [];

function BFS(v) {
  const queue = [v];
  visitedBFS[v] = true;

  while (queue.length > 0) {
    const n = queue.shift();
    bfsResult.push(n);
    for (const m of graph[n]) {
      if (!visitedBFS[m]) {
        visitedBFS[m] = true;
        queue.push(m);
      }
    }
  }
}

DFS(V);
BFS(V);

console.log(dfsResult.join(" "));
console.log(bfsResult.join(" "));
