// 스택/큐 > 같은 숫자는 싫어
// school.programmers.co.kr/learn/courses/30/lessons/12906

function solution(arr) {
  const result = [];

  arr.forEach((item, idx) => {
    if (idx === 0 || arr[idx - 1] !== item) result.push(item);
  });

  return result;
}

/* 아래는 테스트 출력용 */
console.log(solution([1, 1, 3, 3, 0, 1, 1]));
console.log(solution([4, 4, 4, 3, 3]));
