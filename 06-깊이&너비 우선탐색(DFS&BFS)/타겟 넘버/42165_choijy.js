// 깊이/너비 우선탐색(DFS/BFS) - 타겟 넘버
// https://school.programmers.co.kr/learn/courses/30/lessons/43165

function solution(numbers, target) {
  let count = 0; // target과 같게 할 수 있는 방법의 수

  function dfs(idx, sum) {
    if (idx >= numbers.length) {
      // 이미 numbers배열을 모두 순회했으므로,
      // target과 현재 sum이 같으면 count를 1 증가시키고 리턴
      if (sum === target) count++;
      return;
    } else {
      // 현재 노드를 sum에 더할 때와, 뺄 때를 나누어 dfs를 호출
      dfs(idx + 1, sum + numbers[idx]);
      dfs(idx + 1, sum - numbers[idx]);
    }
  }

  dfs(0, 0); // 초기 인덱스 0, sum값 0으로 초기화

  return count;
}

console.log(solution([4, 1, 2, 1], 4));
console.log(solution([1, 1, 1, 1, 1], 3));
