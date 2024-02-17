// 완전탐색 - 피로도
// https://school.programmers.co.kr/learn/courses/30/lessons/87946

function solution(k, dungeons) {
  const visited = Array(dungeons.length).fill(false); // 방문 배열 초기화
  let max = 0;

  // 완전탐색을 위한 DFS(남은피로도, 현재 카운트)
  function dfs(k, cnt) {
    // 던전의 수만큼 반복
    for (let i = 0; i < dungeons.length; i++) {
      // 방문하지 않았고, 현재 피로도가 최소 피로도보다 크거나 같은 경우 (방문 가능)
      if (!visited[i] && k >= dungeons[i][0]) {
        visited[i] = true; // 방문 여부 true
        dfs(k - dungeons[i][1], cnt + 1); // 피로도 감소, 카운트 1증가 dfs 재귀
        visited[i] = false; // dfs가 종료되어 돌아오면, 방문 여부 false로 (visited 초기화)
      }
    }
    if (max < cnt) max = cnt;
  }

  dfs(k, 0);
  return max;
}
function beforeSolution(k, dungeons) {
  const size = dungeons.length; // 던전의 고유 갯수
  let answer = 0;

  const getAvailableCount = (min, minus) => {
    const count = dungeons.filter(([a]) => a <= k - minus).length;
    console.log(min, minus, min <= k - minus ? -1 + count : count);
    return min <= k - minus ? -1 + count : count;
  };

  for (let i = 0; i < size; i++) {
    // 던전을 돌 때마다 아래와 같은 순으로 dungeons가 정렬되고, 가장 앞에 오는 던전을 배열에서 지운다.
    // 1. 소모피로도를 소모했을 때, 입장 가능한 던전 수가 많은 순
    // 2. 1이 같으면, 소모피로도가 작은 순

    dungeons.sort(
      ([a, b], [c, d]) =>
        getAvailableCount(c, d) - getAvailableCount(a, b) || b - d
    );

    const [min, minus] = dungeons.shift(); // 가장 앞에 있는 던전 꺼내기
    if (min <= k) {
      k -= minus;
      answer++;
    } else {
      return answer;
    } // 만약 입장 못한면, 뒤에 있는 배열은 탐색할 필요 없이 종료
  }
  return answer;
}

console.log(
  solution(40, [
    [40, 20],
    [10, 10],
    [10, 10],
    [10, 10],
    [10, 10],
  ])
);

console.log(
  solution(80, [
    [80, 20],
    [50, 40],
    [30, 10],
    [10, 10],
  ])
);
