### 최솟값 찾기

https://www.acmicpc.net/problem/11003

## 문제

N개의 수 A1, A2, ..., AN과 L이 주어진다.

Di = Ai-L+1 ~ Ai 중의 최솟값이라고 할 때, D에 저장된 수를 출력하는 프로그램을 작성하시오. 이때, i ≤ 0 인 Ai는 무시하고 D를 구해야 한다.

## 입력

첫째 줄에 N과 L이 주어진다. (1 ≤ L ≤ N ≤ 5,000,000)

둘째 줄에는 N개의 수 Ai가 주어진다. (-109 ≤ Ai ≤ 109)

## 출력

첫째 줄에 Di를 공백으로 구분하여 순서대로 출력한다.

## 예제 입력 1

```
12 3
1 5 2 3 6 2 3 7 3 5 2 6

```

## 예제 출력 1

```
1 1 1 2 2 2 2 2 3 3 2 2
```

## 출처

- 문제를 만든 사람: [baekjoon](https://www.acmicpc.net/user/baekjoon)
- 데이터를 추가한 사람: [doju](https://www.acmicpc.net/user/doju)

## 시간 제한

- Java 8: 2.6 초
- Java 8 (OpenJDK): 2.6 초
- Java 11: 2.6 초
- Kotlin (JVM): 2.6 초