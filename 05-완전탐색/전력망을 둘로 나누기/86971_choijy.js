// 완전탐색 - 전력망을 둘로 나누기
// https://school.programmers.co.kr/learn/courses/30/lessons/86971

function solution(n, wires) {
  let min = n;
  let graph;
  const visited = Array(n + 1).fill(false); // 방문 배열
  for (let i = 0; i < wires.length; i++) {
    graph = Array.from(Array(n + 1), () => Array());
    wires.forEach(([start, end], idx) => {
      // i에 해당하지 않는 wires로 인접리스트로 채우기 (i번째 선을 끊었을 경우라고 생각)
      if (idx !== i) {
        graph[start].push(end);
        graph[end].push(start);
      }
    });

    dfs(1); // 1부터 dfs 탐색

    const count = visited.filter((i) => i).length; // 트리 한개의 노드 수
    const another = n - count;
    const diff = Math.abs(count - another);

    if (min > diff) min = diff;
    visited.fill(false); // visited 초기화
  }

  function dfs(v) {
    visited[v] = true;
    for (const i of graph[v]) {
      if (!visited[i]) dfs(i);
    }
  }

  return min;
}

function mySolution(n, wires) {
  let min = n;
  const visited = Array(n + 1).fill(false); // 방문 배열

  let graph;

  // wires 중 하나(i)를 제거한 상태에서 각각 dfs 돌리기
  for (let i = 0; i < wires.length; i++) {
    graph = Array.from(Array(n + 1), () => Array());
    const temp = wires.slice(0); // 얕은 배열 복사
    temp.splice(i, 1);
    temp.forEach(([start, end]) => {
      // 인접리스트 채우기
      graph[start].push(end);
      graph[end].push(start);
    });

    for (let i = 1; i <= n; i++) {
      if (!visited[i]) {
        dfs(i);
      }
      const count = visited.filter((i) => i).length; // 트리 한개의 노드 수
      const another = n - count;
      const diff = Math.abs(count - another);

      if (min > diff) min = diff;

      visited.fill(false);
    }
  }

  function dfs(v) {
    visited[v] = true;

    for (const i of graph[v]) {
      if (!visited[i]) dfs(i);
    }
  }

  return min;
}

console.log(
  solution(4, [
    [1, 2],
    [2, 3],
    [3, 4],
  ])
);
