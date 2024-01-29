// 스택/큐 > 프로세스
// https://school.programmers.co.kr/learn/courses/30/lessons/42587

const returnMax = (arr) => {
  let maxValue = 0;
  arr.forEach((p) => {
    if (p[0] >= maxValue) {
      maxValue = p[0];
    }
  });
  return maxValue;
};

function solution(priorities, location) {
  let arr = priorities.map((p, i) => [p, i]);
  let order = 0;

  while (true) {
    let maxValue = returnMax(arr);
    let temp = arr.shift();

    if (temp[0] !== maxValue) arr.push(temp);
    else {
      order++;
      if (temp[1] === location) break;
    }
  }

  return order;
}

function otherSolution(priorities, location) {
  let arr = priorities.map((p, i) => [p, i]);
  let order = 0;

  while (true) {
    let temp = arr.shift();

    if (arr.some((item) => item[0] > temp[0])) arr.push(temp);
    else {
      order++;
      if (temp[1] === location) break;
    }
  }

  return order;
}

/* 아래는 출력 테스트용 코드 */
console.log(solution([2, 1, 3, 2], 2));
console.log(solution([1, 1, 9, 1, 1, 1], 0));
