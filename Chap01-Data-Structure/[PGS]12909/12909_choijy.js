// 스택/큐 > 올바른 괄호
// https://school.programmers.co.kr/learn/courses/30/lessons/12909

/* 나의 풀이 */
function solution(str) {
  const stack = [];
  for (const s of str) {
    if (s === "(") stack.push("(");
    else if (s === ")" && stack[stack.length - 1] === "(") stack.pop();
    else return false;
  }

  return stack.length === 0;
}

/* 다른 풀이 */
function anotherSolution(str) {
  let bal = 0;

  for (const s of str) {
    bal += s === "(" ? 1 : -1;
    if (bal < 0) return false;
  }

  return bal === 0 ? true : false;
}

/* 아래는 출력 테스트용 코드 */
console.log(solution("()()"));
console.log(solution("(((((("));
console.log(solution("))))))))))("));
console.log(solution("(()("));
