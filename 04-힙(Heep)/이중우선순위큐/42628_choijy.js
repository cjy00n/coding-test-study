// 힙(Heap) - 이중우선순위큐
// https://school.programmers.co.kr/learn/courses/30/lessons/42628

function solution(operations) {
  let queue = [];
  for (const op of operations) {
    const [type, num] = op.split(" ");

    if (type === "I") {
      queue.push(parseInt(num));
    } else if (type === "D") {
      queue = queue.sort((a, b) => b - a);
      if (num === "-1") queue.splice(queue.length - 1, 1);
      else if (num === "1") queue.shift();
    }
  }
  queue = queue.sort((a, b) => b - a);

  return queue.length > 0 ? [queue[0], queue[queue.length - 1]] : [0, 0];
}

console.log(
  solution(["I 16", "I -5643", "D -1", "D 1", "D 1", "I 123", "D -1"])
);
console.log(
  solution([
    "I -45",
    "I 653",
    "D 1",
    "I -642",
    "I 45",
    "I 97",
    "D 1",
    "D -1",
    "I 333",
  ])
);
