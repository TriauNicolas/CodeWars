# Didn't know about the set() function

def longest(a1, a2):
    string_to_check = a1 + a2
    new_string = ''
    for letter in string_to_check:
        if not new_string.__contains__(letter):
            new_string += letter
        
    return "".join(sorted(new_string,key=lambda l: l.lower()))