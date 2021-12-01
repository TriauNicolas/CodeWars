def maskify(cc):
    new_cc = ''
    if len(cc) > 4:
        index = 0

        while index < len(cc):
            if index < len(cc) - 4:
                new_cc += '#'
            else:
                new_cc += cc[index]
            
            index += 1
    else:
        new_cc = cc
            
    return new_cc