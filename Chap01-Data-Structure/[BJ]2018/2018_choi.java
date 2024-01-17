import java.util.Scanner;

public class 2018_choi {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int N = sc.nextInt();
        /*
         1. 입력받은 값을 N에 저장한 후 코드에서 사용할 변수를 모두 초기화한다.
            count를 1로 초기화하는 이유는 N이 15일 때 숫자 15만 뽑는 경우의 수를
            미리 넣고 초기화했기 때문이다.
            * sum은 start_index와 end_index 사이의 연속된 합의 크기
            => 초기화 : sum = 1, count = 1
        */
        int sum = 1;
        int count = 1;
        int start = 1;
        int end = 1;

        /*
         2. 투 포인터 이동 원칙을 활용해 배열의 끝까지 탐색하면서 합이 N이 될 경우의 수를 구한다.
            start_index를 오른쪽으로 한 칸 이동하는 것은 연속된 자연수에서 왼쪽 값을 삭제하는 것과
            효과가 같으며,
            end_index를 오른쪽으로 한 칸 이동하는 것은 연속된 자연수의 범위를 한 칸 더 확장하는 의미이다.
            같을 때는 경우의 수를 1 증가시키고, end_index를 오른쪽으로 이동시킨다.

                투 포인터 이동 원칙
                * sum > N : sum = sum - start_index; start_index++;
                * sum < N : end_index++; sum = sum + end_index;
                * sum === N : end_index++; sum = sum + end_index; count++;

        3. 2단계를 end_index가 N이 될 때까지 반복하되,
            포인터가 이동할 때마다 현재의 총합과 N을 비교해 값이 같으면
            count를 1만큼 증가시켜준다.
         */

        while (end < N) {
            if (sum == N) {
                count++;
                end++;
                sum += end;
            } else if (sum > N) {
                sum -= start;
                start++;
            } else if (sum < N) {
                end++;
                sum += end;
            }
        }

        System.out.println(count);
    }

}
