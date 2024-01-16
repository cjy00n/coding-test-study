## 버블 소트

https://www.acmicpc.net/problem/1517

### 문제

N개의 수로 이루어진 수열 A[1], A[2], …, A[N]이 있다. 이 수열에 대해서 버블 소트를 수행할 때, Swap이 총 몇 번 발생하는지 알아내는 프로그램을 작성하시오.

버블 소트는 서로 인접해 있는 두 수를 바꿔가며 정렬하는 방법이다. 예를 들어 수열이 3 2 1 이었다고 하자. 이 경우에는 인접해 있는 3, 2가 바뀌어야 하므로 2 3 1 이 된다. 다음으로는 3, 1이 바뀌어야 하므로 2 1 3 이 된다. 다음에는 2, 1이 바뀌어야 하므로 1 2 3 이 된다. 그러면 더 이상 바꿔야 할 경우가 없으므로 정렬이 완료된다.

### 입력

첫째 줄에 N(1 ≤ N ≤ 500,000)이 주어진다. 다음 줄에는 N개의 정수로 A[1], A[2], …, A[N]이 주어진다. 각각의 A[i]는 0 ≤ |A[i]| ≤ 1,000,000,000의 범위에 들어있다.

### 출력

첫째 줄에 Swap 횟수를 출력한다

### 예제 입력 1

```
3
3 2 1

```

### 예제 출력 1

```
3

```

### 출처

- 데이터를 추가한 사람: [akaishuichi](https://www.acmicpc.net/user/akaishuichi), [hororo12345](https://www.acmicpc.net/user/hororo12345), [lambda](https://www.acmicpc.net/user/lambda), [osier_star](https://www.acmicpc.net/user/osier_star)