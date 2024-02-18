from itertools import product

def solution(word):
    answer = 0
    all_word = list()
    words = ['A','E','I','O','U']
    for j in range(1,6):
        for i in product(words,repeat=j):
            all_word.append(list(i))
    all_word.sort()
    for i in all_word :
        answer += 1
        test_word = ''.join(s for s in i)
        if (test_word == word):
            break
    return answer