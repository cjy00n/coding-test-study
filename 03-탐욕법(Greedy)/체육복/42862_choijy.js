// 탐욕법(Greedy) > 체육복
// https://school.programmers.co.kr/learn/courses/30/lessons/42862

function solution(n, lost, reserve) {
  const student = new Array(n).fill(1);

  lost.forEach((el) => student[el - 1]--);
  reserve.forEach((el) => student[el - 1]++);

  student.forEach((el, i) => {
    if (el === 0) {
      if (student[i - 1] === 2) {
        student[i] = 1;
        student[i - 1] = 1;
      } else if (student[i + 1] === 2) {
        student[i] = 1;
        student[i + 1] = 1;
      }
    }
  });

  return student.filter((el) => el >= 1).length;
}

console.log(solution(5, [3, 5], [2, 4]));
console.log(solution(5, [2, 4], [3]));
console.log(solution(5, [3, 4], [4, 3]));
console.log(solution(5, [2, 3, 5], [2, 3, 4]));
