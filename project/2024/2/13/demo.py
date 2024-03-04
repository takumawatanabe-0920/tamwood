# def my_function(food):
#     for x in food:
#         print(x)


# fruits = ["apple", "banana", "cherry"]

# my_function(fruits)


# def tri_recursion(k):
#     if k > 0:
#         result = k + tri_recursion(k - 1)
#         print(result)
#     else:
#         result = 0

#     return result


# print("\n\nRecursion Example Results")
# tri_recursion(6)


# def myfunc(n):
#     return lambda a: a * n


# mydoubler = myfunc(2)
# mytripler = myfunc(3)


# print(mydoubler(11))
# print(mytripler(11))

# cars = ["ford", "volvo", "bmw"]
# cars.append("honda")
# print(cars)


class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def __str__(self):
        return "Name: " + self.name + ", Age: " + str(self.age)


pl = Person("John", 36)

print(pl)
