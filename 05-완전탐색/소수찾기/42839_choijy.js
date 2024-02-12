// 완전탐색 - 소수찾기
// https://school.programmers.co.kr/learn/courses/30/lessons/42839

function mySolution(answers) {
  // 최악이야!
  const nums = answers.split("").sort((a, b) => b - a); // 내림차순 정렬
  const max = parseInt(nums.join("")); // 만들어질 수 있는 가장 큰 수
  let count = 0;

  for (let i = parseInt(nums[nums.length - 1]); i <= max; i++) {
    // 최솟값부터 최댓값까지 1씩 증가시킴
    const tempNums = nums.map((n) => n); // 기존 nums 배열을 임시 저장하는 배열

    const available = `${i}`.split("").every((num) => {
      const idx = tempNums.indexOf(num);
      if (idx !== -1) tempNums.splice(idx, 1);
      // 해당 숫자가 nums에 존재하면 index 반환, 없으면 -1 반환
      // 존재하면 tempNums배열의 해당 인덱스의 숫자를 제거함 (splic)
      return idx !== -1;
      // 존재여부를 반환 => 최종적으로, 모든 숫자가 존재하는지를 확인(every)
    });

    if (available && isPrime(i)) count++; // 만들어질 수 있는 숫자면서 소수면 count를 증가
  }

  return count;
}

function solution(numbers) {
  // 재귀 사용 풀이

  let answer = 0;

  let n = numbers.split("");
  let nums = new Set(); // 중복되지 않는 숫자 조합을 저장하기 위해 Set 사용

  const combi = (a, s) => {
    // a: 현재 조합을 만들기 위해 사용할 수 있는 숫자 배열, s: 현재까지 생성된 숫자 조합 문자열

    if (s.length > 0) {
      if (nums.has(Number(s)) === false) {
        nums.add(Number(s));
        if (isPrime(Number(s))) answer++;
      }
    }
    if (a.length > 0) {
      for (let i = 0; i < a.length; i++) {
        let t = a.slice(0); // 배열의 얕은 복사본을 만듦
        t.splice(i, 1);
        combi(t, s + a[i]); // 재귀
      }
    }
  };

  combi(n, ""); // 재귀함수 combi 호출
  return answer;
}

/* 소수인지 판별하는 함수 */
const isPrime = (num) => {
  if (num <= 1) return false; // 1과 0은 소수가 아님
  if (num === 2) return true; // 2는 소수

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

console.log(solution("342"));
console.log(solution("011"));
