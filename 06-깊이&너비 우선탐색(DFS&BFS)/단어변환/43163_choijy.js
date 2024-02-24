// 깊이/너비 우선탐색(DFS/BFS) - 단어변환
// https://school.programmers.co.kr/learn/courses/30/lessons/43163

function solution(begin, target, words) {
  // 다른 사람의 풀이를 참고한 풀이
  // 연결리스트 따로 만들지 않고, isAvailable 함수를 두어 두 단어가 교체 가능한지 여부를 판단

  if (!words.includes(target)) return 0;
  const counting = Array(words.length).fill(0); // 방문 배열 겸, 지금까지 몇 번 교체를 하였는지 저장하는 배열
  const queue = [begin];

  while (true) {
    if (queue.length === 0) break;
    const curWord = queue.shift();

    if (curWord === target) break;

    const cnt = counting[words.indexOf(curWord)] ?? 0;

    for (let i = 0; i < words.length; i++) {
      if (isAvailable(curWord, words[i]) && counting[i] === 0) {
        counting[i] = cnt + 1;
        queue.push(words[i]);
      }
    }
  }
  // 두 단어가 교체 가능한 단어인지 비교해서 리턴하는 함수
  function isAvailable(standard, compare) {
    let differntCount = 0; // 다른 문자의 수, 1보다 크면 두 단어는 교체 불가
    for (let i = 0; i < standard.length; i++) {
      if (standard[i] !== compare[i]) differntCount++;
      if (differntCount > 1) return false;
    }
    return true;
  }

  return counting[words.indexOf(target)];
}

function mySolution(begin, target, words) {
  if (!words.includes(target)) return 0;

  words.push(begin);
  const size = words.length;
  const length = begin.length; // 각 단어들의 길이
  const counting = Array(size).fill(0); // 방문 배열 겸, 지금까지 몇 번 교체를 하였는지 저장하는 배열

  const arr = Array.from(Array(size), () => Array()); // 연결관계를 나타내는 배열 (인접리스트)

  /* 인접리스트 생성하기 */
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      let count = 0;
      for (let k = 0; k < length; k++) {
        if (i !== j && words[j] !== begin && words[i][k] === words[j][k])
          count++;
      }
      if (count === length - 1) {
        arr[i].push(words[j]);
      }
    }
  }
  /* 위 코드를 실행한 뒤 arr은 아래와 같다. 
    [
      [ 'dot', 'lot' ],
      [ 'hot', 'dog', 'lot' ],
      [ 'dot', 'log', 'cog' ],
      [ 'hot', 'dot', 'log' ],
      [ 'dog', 'lot', 'cog' ],
      [ 'dog', 'log' ],
      [ 'hot' ]
    ]
  */

  const queue = [begin];

  while (true) {
    if (queue.length === 0) break;
    const curWord = queue.shift();
    if (curWord === target) break;
    const linked = arr[words.indexOf(curWord)];

    for (const word of linked) {
      const cnt = counting[words.indexOf(curWord)];
      if (counting[words.indexOf(word)] === 0) {
        counting[words.indexOf(word)] = cnt + 1;
        queue.push(word);
      }
    }
  }

  /*
    위 코드를 실행하고 난 뒤 counting 배열은 아래와 같다.
    [ 1, 2, 3, 2, 3, 4, 0 ]
    위 배열의 인덱스는 words 배열의 인덱스와 매칭된다.
    각 숫자의 뜻은 "hit" 부터 시작하여 각 단어까지 몇번의 교체가 이루어졌는지를 의미한다. 
    ex) hit -> dot 이 되려면 2번의 교체가 이루어져야 함 
  */
  return counting[words.indexOf(target)];
}

console.log(solution("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]));
console.log(solution("hit", "cog", ["hot", "dot", "dog", "lot", "log"]));
