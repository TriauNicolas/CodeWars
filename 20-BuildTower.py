def tower_builder(n_floors):
    tower = []
    space_floors = n_floors - 1
    n_characters = n_floors + space_floors
    for floor in range(n_floors): 
        tower.append(space_floors*(' ') + (n_characters - space_floors * 2)*('*') + space_floors*(' '))
        space_floors -= 1
        
    return tower