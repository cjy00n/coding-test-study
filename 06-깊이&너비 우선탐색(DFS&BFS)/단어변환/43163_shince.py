from collections import deque

def solution(begin, target, words):
    
    if target not in words : 
        return  0
    
    return bfs(begin, target, words)

def bfs(begin, target, words):

    queue = deque()
    queue.append([begin, 0]) #시작 단어와 단계 0
    
    while queue:
        now, step = queue.popleft()
        
        if now == target:
            return step
        
        # 단어를 모두 확인
        # 해당 단어가 변경 여부 확인
        for word in words:
            count = 0
            for i in range(len(now)): #단어의 길이만큼 반복
                if now[i] != word[i]: #단어에 알파벳 한개씩 체크
                    count += 1
                    
            if count == 1: 
                queue.append([word, step+1])