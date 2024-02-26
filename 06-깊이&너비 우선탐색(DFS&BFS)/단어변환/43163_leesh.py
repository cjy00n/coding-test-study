from collections import defaultdict

def different_count(word1, word2):
    count = 0

    for i in range(len(word1)):
        if word1[i] != word2[i]:
            count += 1
    return count

def solution(begin, target, words):
    answer = 0
    graph = defaultdict(list)

    for i in words + [begin]:
        for j in words:
            if i == j:
                continue
            if different_count(i, j) == 1:
                graph[i].append(j)

    def dfs(word, trace):
        if word == target:
            return len(trace)

        if word in trace:
            return 0

        results = []
        for s in graph[word]:
            r = dfs(s, trace + [word])
            if r != 0:
                results.append(r)
        return min(results) if results else 0

    answer = dfs(begin, [])
    return answer