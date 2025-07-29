a = 10
b = 6

def greaterThan(a, b):
    if a > b:
        print("the statement " + str(a) + " is greater than " + str(b) + " is True.")
        return True
    else:
        print("the statement " + str(a) + " is not greater than " + str(b) + " is False.")
        return False
    
greaterThan(a, b)
  