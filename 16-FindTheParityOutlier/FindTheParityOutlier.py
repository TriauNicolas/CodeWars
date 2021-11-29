def find_outlier(integers):
    odd_number = list(filter(lambda n: n%2 != 0, integers))
    even_number = list(filter(lambda n: n%2 == 0, integers))
    return odd_number[0] if len(odd_number) == 1 else even_number[0]