// 정렬 > 가장 큰 수
// https://school.programmers.co.kr/learn/courses/30/lessons/42746

function solution(numbers) {
  const arr = numbers.sort((a, b) =>
    a[0] !== b[0]
      ? a[0] - b[0]
      : b.toString() + a.toString() - (a.toString() + b.toString())
  );

  return arr[0] === 0 ? "0" : arr.join("");
}

function otherSolution(numbers) {
  const answer = numbers.sort((a, b) => `${b}${a}` - `${a}${b}`).join("");
  return answer[0] === "0" ? "0" : answer;
}

console.log(solution([6, 10, 2]));
console.log(solution([3, 30, 34, 5, 9]));
console.log(solution([0, 0, 0]));
