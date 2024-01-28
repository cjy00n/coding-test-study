// 정렬 > H-index
// https://school.programmers.co.kr/learn/courses/30/lessons/42747

function solution(citations) {
  let h;
  for (let i = citations.length; i >= 0; i--) {
    if (citations.filter((c) => c >= i).length >= i) {
      h = i;
      break;
    }
  }
  return h;
}

function ohterSolution(citations) {
  citations = citations.sort((a, b) => b - a); // 내림차순 정렬
  let i = 0;
  while (i + 1 <= citations[i]) {
    i++;
  }
  return i;
}

console.log(solution([3, 0, 6, 1, 5]));
console.log(solution([1, 3, 5, 7, 9, 11]));
