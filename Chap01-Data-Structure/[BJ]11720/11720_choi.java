import java.util.Scanner;

public class 11720_choi {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int N = sc.nextInt();

        /* 문자 '1' == 아스키코드 값 49 */

        // 1. 숫자의 개수만큼 입력받은 값을 String형으로 저장한다.
        String sNum = sc.next();

        // 2. String형으로 입력받은 값을 char[]형으로 변환한다.
        char[] cNum = sNum.toCharArray();

        // 3. 인덱스 0부터 끝까지 배열을 탐색하며 각 값을 정수형으로 변환하고 결괏값에 더하여 누적한다.
        int sum = 0;

        for (int i = 0; i < cNum.length; i++) {
            sum += cNum[i] - '0';
        }

        System.out.println(sum);
    }
}
