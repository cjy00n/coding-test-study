def solution(prices):
    answer = []
    second = 0
    '''
    
    for i,s in enumerate(prices):
        second = 0
        for j in enumerate(prices):
            if s > a : 
                second = j-i
                break
            else : 
                second = size - i - 1
        answer.append(second)
    '''
    for i,s in enumerate(prices):
        second = 0
        for j in range(i, len(prices)-1):
            if s <= prices[j] :
                second += 1
            else :
                break
        answer.append(second)

    return answer