// 깊이/너비 우선탐색(DFS/BFS) - 네트워크
// https://school.programmers.co.kr/learn/courses/30/lessons/43162

function mySolution(n, computers) {
  const visited = Array(n).fill(false); // 방문 배열 초기화

  let count = 0;

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      DFS(i);
      // DFS가 종료되면 이곳으로 되돌아오게 되고,
      // 더 이상 순회할 노드가 없으며, 하나로 연결된 네트워크는 모두 순회했음을 의미함
      count++;
    }
  }

  function DFS(c) {
    visited[c] = true;

    for (let i = 0; i < n; i++) {
      // 방문하지 않은 노드이면서, c와 i가 연결되어있으면 DFS 함수 재귀호출
      if (!visited[i] && computers[c][i]) DFS(i);
    }
    return;
  }

  return count;
}

console.log(
  solution(3, [
    [1, 1, 0],
    [1, 1, 0],
    [0, 0, 1],
  ])
);
