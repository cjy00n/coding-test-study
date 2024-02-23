// 이분탐색 - 입국심사
// https://school.programmers.co.kr/learn/courses/30/lessons/43238

/* 이분탐색은 조건에 맞는 답은 여러개이지만 그 중 최소/최대를 구해야할 때 유용하다 */

/* 못품. 아래는 다른 사람 풀이임 */
function solution(n, times) {
  let low = 1;
  let high = Math.max(...times) * n;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const people = times.reduce((acc, time) => acc + Math.floor(mid / time), 0);
    // people은 mid분 동안 심사 가능한 사람의 수이다.
    // 심사관 한 명 다 mid분 동안 심사 가능한 사람의 수를 모두 더한 값
    if (people < n) {
      // mid분 동안 모두 심사하지 못하므로 최솟값 1증가
      low = mid + 1;
    } else {
      // mid분 동안 모두 심사 가능하므로 최댓갑 1 감소시킴
      high = mid - 1;
    }
  }
  return low;
}

console.log(solution(6, [7, 10]));
