// 완전탐색 - 모의고사
// https://school.programmers.co.kr/learn/courses/30/lessons/42840

// a1,a2,a3은 각 수포자의 찍는 방식의 패턴이다.
// score은 각 수포자의 점수가 저장되는 배열이다.
// answers 배열을 순회하면서 answer의 인덱스를 각 수포자의 패턴의 길이를 나눈 나머지 값과 같다면
// score 배열의 각 값을 1씩 증가시킨다.
// score 배열의 요소 중 max값과 같다면 result에 push한다.

function solution(answers) {
  const a1 = [1, 2, 3, 4, 5];
  const a2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const a3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  const score = [0, 0, 0];

  answers.forEach((a, i) => {
    if (a === a1[i % a1.length]) score[0]++;
    if (a === a2[i % a2.length]) score[1]++;
    if (a === a3[i % a3.length]) score[2]++;
  });

  const result = [];
  const max = Math.max(score[0], score[1], score[2]);

  if (score[0] === max) result.push(1);
  if (score[1] === max) result.push(2);
  if (score[2] === max) result.push(3);

  return result;
}

console.log(solution([1, 2, 3, 4, 5]));
console.log(solution([1, 3, 2, 4, 2]));
