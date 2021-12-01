def persistence(n):
    counter = 0
    while n > 9:
        list_n = list(str(n))
        n = 1
        for numbers in list_n:
            n *= int(numbers)
        
        counter += 1
            
    return counter