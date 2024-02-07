def solution(jobs):
    t = 0
    tesk = 0
    length = len(jobs)
    jobs.sort(key = lambda x:x[1])
    while len(jobs) > 0:
        for i in jobs:
            if i[0] <= t:
                jobs.remove(i)
                t+=i[1]-1
                tesk += t - i[0] +1
                break
        t+=1
    return tesk//length 