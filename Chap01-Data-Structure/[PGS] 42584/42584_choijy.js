// 스택/큐 > 주식가격
// https://school.programmers.co.kr/learn/courses/30/lessons/42584?language=javascript

function solution(prices) {
  let answer = [];

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] === 1) {
      answer.push(prices.length - i - 1);
      continue;
    }

    let sec = 0;
    for (let j = i + 1; j < prices.length; j++) {
      sec++;
      if (prices[j] < prices[i]) break;
    }
    answer.push(sec);
  }

  return answer;
}

function otherSolution(prices) {
  let answer = new Array(prices.length).fill(0);
  let stack = [];

  for (let i = 0; i < prices.length; i++) {
    while (stack.length > 0 && prices[stack[stack.length - 1]] > prices[i]) {
      let idx = stack.pop();
      answer[idx] = i - idx;
    }

    stack.push(i);
  }

  while (stack.length > 0) {
    let idx = stack.pop();
    answer[idx] = prices.length - idx - 1;
  }
  return answer;
}

console.log(otherSolution([1, 2, 3, 2, 3]));
