def cons(a, b):
    def pair(f):
        return f(a, b)
    return pair


def car(pair):
    def extract_a(a,b):
        return a
    return pair(extract_a)

def cdr(pair):
    def extract_b(a,b):
        return b
    return pair(extract_b)

apair = cons(10, 20)

print(car(apair))
print(cdr(apair))