def disemvowel(string_):
    vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    new_str = ""
    
    for vowel in vowels:
        if len(new_str) > 0 :
            new_str = new_str.replace(vowel, "", len(string_))
        else:
            new_str = string_.replace(vowel, "", len(string_))
    
    return new_str