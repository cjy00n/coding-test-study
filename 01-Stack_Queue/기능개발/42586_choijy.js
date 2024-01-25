// 스택/큐 > 기능개발
// https://school.programmers.co.kr/learn/courses/30/lessons/42586

// 나의 풀이
function solution(progresses, speeds) {
  var answer = [];
  const days = progresses.map((item, idx) =>
    Math.ceil((100 - item) / speeds[idx])
  );

  let max = days[0]; // 날짜를 나타내는 수, 가장 첫번째 작업이 걸리는 시간으로 초기 정의

  while (days.length > 0) {
    let num = 0; // 하루에 배포하는 작업의 개수
    if (max >= days[0]) {
      while (true) {
        if (days[0] <= max) {
          days.shift();
          num++;
        } else break;
      }
      answer.push(num);
    }
    max++;
  }
  return answer;
}

/* 아래는 테스트 출력용 */
console.log(solution([93, 30, 55], [1, 30, 5]));
console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]));

/*

다른 사람의 풀이

function solution(progresses, speeds) {
  var answer = [0];
  const days = progresses.map((item, idx) =>
    Math.ceil((100 - item) / speeds[idx])
  );

  let maxDay = days[0];

  for (let i = 0, j = 0; i < days.length; i++) {
    if (days[i] <= maxDay) {
      answer[j] += 1;
    } else {
      maxDay = days[i];
      answer[++j] = 1;
    }
  }
  return answer;
}
*/
/* 아래는 테스트 출력용 */
console.log(solution([93, 30, 55], [1, 30, 5]));
console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]));
