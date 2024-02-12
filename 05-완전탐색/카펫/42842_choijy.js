// 완전탐색 - 카펫
// https://school.programmers.co.kr/learn/courses/30/lessons/42842

function solution(brown, yellow) {
  // yellow 칸의 가로 세로를 각각 x,y라고 하면 전체 카페트는 [x+2,y+2] 이다.
  // 2*(x+y)+4 = brown 을 만족하는 x,y를 찾는다.

  for (let x = 1; x <= Math.sqrt(yellow); x++) {
    // yellow의 약수가 되는 x를 찾는다.
    if (yellow % x === 0) {
      const y = yellow / x;
      if (2 * (x + y) + 4 === brown) {
        return x >= y ? [x + 2, y + 2] : [y + 2, x + 2];
      }
    }
  }
}

console.log(solution(10, 2));
console.log(solution(8, 1));
console.log(solution(24, 24));
