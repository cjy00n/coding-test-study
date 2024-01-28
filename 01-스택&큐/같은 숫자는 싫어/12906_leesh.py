def solution(s):
    m = []
    for i in s:
        if m[-1:] == [i]: continue
        m.append(i)
    return m