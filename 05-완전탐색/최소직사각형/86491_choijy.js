// 완전탐색 - 최소직사각형
// https://school.programmers.co.kr/learn/courses/30/lessons/86491

function mySolution(sizes) {
  // 테스트 결과의 평균 시간은 약 4.79ms

  // 1. 가로와 세로 중 더 긴 길이를 가로로 생각하기
  // 2. 각 명함의 가로의 길이 중 최댓값 * 세로의 길이 중 최뎃값이 result

  sizes = sizes.map(([r, c]) => (r >= c ? [r, c] : [c, r]));
  const w_max = sizes.sort((a, b) => b[0] - a[0])[0][0];
  const h_max = sizes.sort((a, b) => b[1] - a[1])[0][1];

  return w_max * h_max;
}

function solution(sizes) {
  // 테스트 결과의 평균 시간은 약 4.96ms
  sizes = sizes.map(([r, c]) => (r >= c ? [r, c] : [c, r]));

  let max = [0, 0];

  sizes.forEach(([w, h]) => {
    if (w > max[0]) max[0] = w;
    if (h > max[1]) max[1] = h;
  });

  return max[0] * max[1];
}

console.log(
  solution([
    [60, 50],
    [30, 70],
    [60, 30],
    [80, 40],
  ])
);
console.log(
  solution([
    [14, 4],
    [19, 6],
    [6, 16],
    [18, 7],
    [7, 11],
  ])
);
