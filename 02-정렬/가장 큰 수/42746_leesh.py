def solution(numbers):
    answer = ''
    arr = list(map(str, numbers))

    arr.sort(key=lambda x: (x * 4)[:4], reverse=True)
    answer = ''.join(arr)

    if answer[0] == '0':
        return '0'

    return answer