def solution(s):
    answer = True
    my = []
    for i in s:
        if i == '(':
            my.append(i)
        elif i == ')':
            if not my: return False
            my.pop()

    if my: answer = False
    return answer