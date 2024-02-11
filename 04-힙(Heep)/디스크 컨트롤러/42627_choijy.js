// 힙(Heap) - 디스크 컨트롤러
// https://school.programmers.co.kr/learn/courses/30/lessons/42627

function mySolution(jobs) {
  let sum = 0; // 걸린시간 더하는 변수
  let sec = 0; // 현재 시간(ms)
  const size = jobs.length; // 작업의 갯수

  while (jobs.length > 0) {
    if (!jobs.some((j) => j[0] <= sec)) {
      sec++;
      continue;
    }

    const target = jobs
      .filter((j) => j[0] <= sec)
      .sort((a, b) => a[1] - b[1])[0];

    sec += target[1];
    sum = sum + (sec - target[0]);
    jobs.splice(jobs.indexOf(target), 1);
  }

  return Math.floor(sum / size);
}

function solution(jobs) {
  jobs.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
  const waiting = []; // 대기 중인 작업들
  const count = jobs.length; // 전체 작업의 갯수

  let sum = 0; // 걸린시간 더하는 변수
  let time = 0; // 현재 시각

  while (jobs.length + waiting.length) {
    let target; // 현재 작업
    while (jobs.length && jobs[0][0] <= time) {
      waiting.push(jobs[0] && jobs.shift());
    }
    if (waiting.length) {
      target = waiting.sort((a, b) => a[1] - b[1] || a[0] - b[0]).shift();
    } else {
      target = jobs.shift();
      time = target[0];
    }

    time += target[1];
    sum += time - target[0];
  }
  return Math.floor(sum / count);
}

console.log(
  solution([
    [0, 5],
    [1, 2],
    [5, 5],
  ])
);
console.log(
  solution([
    [0, 10],
    [4, 10],
    [5, 11],
    [15, 2],
  ])
);
