class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def say_hello(self):
        print(f"Hello, my name is {self.name}, I am {self.age} years old.")


class Student(Person):
    def __init__(self, name, age):
        super().__init__(name, age)
        self.graduationyear = 2023

    def welcome(self):
        print("Welcome", self.name, "to the class of", self.graduationyear)


x = Student("Alice", 20)
x.say_hello()
x.welcome()
