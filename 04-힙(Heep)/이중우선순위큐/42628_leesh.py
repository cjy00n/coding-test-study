import heapq as hp

def solution(operations):
    answer = []
    heap = []
    for data in operations:
        if data[0] == 'I':
            hp.heappush(heap, int(data[2:]))
        elif data == 'D 1':
            if heap:
                max_num = max(heap)
                heap.remove(max_num)
        else :
            if heap:
                hp.heappop(heap)
    if heap :
        return [max(heap), heap[0]]
    return [0,0]