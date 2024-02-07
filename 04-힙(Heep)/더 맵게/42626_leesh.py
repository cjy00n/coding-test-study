import heapq


def solution(scoville, K):
    answer = 0
    heapq.heapify(scoville)

    while scoville[0] < K:
        i = heapq.heappop(scoville)
        j = heapq.heappop(scoville)
        heapq.heappush(scoville, i + j * 2)
        answer += 1

        if len(scoville) == 2 and scoville[0] + scoville[1] * 2 < K:
            return -1
    return answer
