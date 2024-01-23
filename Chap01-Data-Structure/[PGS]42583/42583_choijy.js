// 스택/큐 > 다리를 지나는 트럭
// https://school.programmers.co.kr/learn/courses/30/lessons/42583

function mySolution(bridge_length, weight, truck_weights) {
  let sec = 0; // 총 걸리는 시간

  const size = truck_weights.length; // 전체 트럭의 수

  const wait = truck_weights; // 대기 중인 트럭 배열
  const bridge = []; // 다리 위인 트럭 배열 [weight,지나온 길이]
  const finish = []; // 다리를 벗어난 트럭 배열

  let weightOnBridge = 0; // 다리 위 트럭들의 무게 합

  // 다리를 벗어난 트럭의 갯수가 총 트럭의 갯수보다 작을 때만 아래를 반복함
  while (finish.length < size) {
    // 다리의 가장 앞에 있는 트럭이 지나온 길이가 다리의 길이와 같으면 finish로 이동
    if (bridge.length > 0 && bridge[0][1] == bridge_length) {
      weightOnBridge -= bridge[0][0];
      finish.push(bridge.shift());
    }

    // 다리 위 무게 + 들어갈 트럭의 무게가 한계값보다 작거나 같으면
    // 다리에 트럭을 push하고, wait 배열에서 제거
    if (weightOnBridge + wait[0] <= weight) {
      bridge.push([wait[0], 0]);
      weightOnBridge += wait[0];
      wait.shift();
    }

    sec++; // 시간이 1초 증가되면
    bridge.forEach((el) => el[1]++); // 다리 위 트럭들이 지나온 길이가 1 증가한다.
  }

  return sec;
}

function anotherSolution(bridge_length, weight, truck_weights) {
  let sec = 0; // 걸리는 시간
  let bridge = [[0, 0]]; // 다리 위 트럭 [무게, 빠져나가는 시간]
  let weightOnBridge = 0; // 다리 위 총 무게

  while (bridge.length > 0 || truck_weights.length > 0) {
    // 다리의 첫 트럭의 빠져나가가는 시간이 현재 시간과 같으면 다리에서 제거
    if (bridge[0][1] === sec) {
      weightOnBridge -= bridge.shift()[0];
    }

    // 다리 위 무게 + 들어갈 트럭이 한계 무게를 넘지 않으면
    // 다리에 트럭을 추가
    if (weightOnBridge + truck_weights[0] <= weight) {
      weightOnBridge += truck_weights[0];
      bridge.push([truck_weights.shift(), sec + bridge_length]);
    } else {
      // 트럭을 더 넣을 수 없으면, 현재 시간을 다리의 첫 트럭이 빠져나가는 시간으로 jump
      // 1을 빼주는 이유는, if문 밖에서 시간 증가가 이루어지기 때문
      if (bridge[0]) sec = bridge[0][1] - 1;
    }

    sec++; // 시간 1초 증가
  }

  return sec;
}

console.log(mySolution(2, 10, [7, 4, 5, 6]));
console.log(mySolution(100, 100, [10]));
console.log(mySolution(100, 100, [10, 10, 10, 10, 10, 10, 10, 10, 10, 10]));
