// 완전탐색 - 모음 사전
// https://school.programmers.co.kr/learn/courses/30/lessons/84512

function solution(word) {
  const aeiou = ["A", "E", "I", "O", "U"];
  const size = aeiou.length;
  let count = 0;

  let find = false; // word를 찾았는지 여부
  dfs("");

  function dfs(v) {
    if (v.length > 5 || find) return; // 기존 단어가 이미 5글자거나, 찾았으면 리턴
    if (word === v) find = true; // 찾으면 find를 true로
    if (!find) count++; // 아직 못찾았으면 카운트 증가

    for (let i = 0; i < size; i++) {
      dfs(v + aeiou[i]);
    }
  }
  return count;
}

console.log(solution("AAAAE"));
console.log(solution("AAAE"));
console.log(solution("EIO"));
