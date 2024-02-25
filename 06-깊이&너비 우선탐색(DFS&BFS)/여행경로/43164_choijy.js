// 깊이/너비 우선탐색(DFS/BFS) - 여행경로
// https://school.programmers.co.kr/learn/courses/30/lessons/43164

function solution(tickets) {
  // 내가 푼 것 아님, 풀이보고 적은 것
  const answer = []; // 정답 중 알파벳 순서로 돈 것을 리턴해주기 위해 저장해놓음
  const goal = tickets.length + 1; // 여행티켓 갯수 + 1 만큼 여행을 한다
  const ch = Array.from({ length: tickets.length }, (_) => 0); // 사용여부 배열(0이면 사용x, 1이면 사용)

  const dfs = (path) => {
    if (path.length === goal) {
      // 가능한 여행 수만큼 하면 answer에 지금까지의 path를 push
      answer.push(path);
    } else {
      for (const i in tickets) {
        if (ch[i] === 0) {
          // 사용하지 않은 티켓이면서
          const [start, end] = tickets[i];
          if (path[path.length - 1] === start) {
            // 현재 경로의 가장 마지막 도착지가 티켓의 출발지면 여행 가능
            ch[i] = 1; // 티켓 사용
            dfs([...path, end]); // 현재 경로에 티켓의 도착지 추가하여 dfs 재귀호출
            ch[i] = 0; // 여기로 돌아온 것은 그 다음에 여행할 수 있는 곳이 없다는 것이므로, 다시 0으로 표시하고 for문을 다시 돌게된다.
          }
        }
      }
    }
  };

  dfs(["ICN"]);

  return answer.sort()[0]; // 가능한 정답들 중 알파벳 먼저 오는 순으로 푼 경로를 리턴
}

function mySolution(tickets) {
  // 테케1번만 실패
  // 연결리스트를 구현하고,(linked) dfs를 이용하여 품
  let answer = [];
  const linked = new Map(new Array());

  tickets.forEach(([start, end]) => {
    const temp = linked.get(start);
    if (temp) linked.set(start, [...temp, end].sort());
    else linked.set(start, [end]);
  });

  function dfs(airport) {
    answer.push(airport);
    const destinations = linked.get(airport);

    for (let i = 0; i < destinations.length; i++) {
      if (
        linked.get(destinations[i]) &&
        linked.get(destinations[i]).length > 0
      ) {
        dfs(destinations.splice(i, 1)[0]);
      }
    }

    if (destinations.length > 0) answer.push(destinations.shift());
  }

  dfs("ICN");
  return answer;
}

console.log(
  solution([
    ["ICN", "SFO"],
    ["ICN", "ATL"],
    ["SFO", "ATL"],
    ["ATL", "ICN"],
    ["ATL", "SFO"],
  ])
);
console.log(
  solution([
    ["ICN", "BOO"],
    ["ICN", "COO"],
    ["COO", "DOO"],
    ["DOO", "COO"],
    ["BOO", "DOO"],
    ["DOO", "BOO"],
    ["BOO", "ICN"],
    ["COO", "BOO"],
  ])
);

console.log(
  solution([
    ["ICN", "A"],
    ["A", "B"],
    ["A", "C"],
    ["C", "A"],
    ["B", "D"],
  ])
);
