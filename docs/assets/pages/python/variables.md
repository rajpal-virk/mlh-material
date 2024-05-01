## Variables

Variables are used to store the data. 

## Variable Names
- Variable name could be short as x, y, z or more descriptive such as (name, age, gender).
- Variable names must start with a letter or the underscore character.
- Variable name cannot start with a number.
- You can use letters, underscore and numbers to create variable names.
- Variable names are case-sensitive. For example - variable name "name" and "NAME" are 2 different variables. 
- Variable name cannot be any of the Python [Keywords](https://www.w3schools.com/python/python_ref_keywords.asp)

Examples:

```python
# examples of correct varaible names
num1 = 10
num_1 = 10.5
num1_ = 20
_1num = 30
_num1 = 40

myvar = "hello"
my_var = "hello"
_my_var = "hello"
myVar = "hello"
MyVar = "hello"
```


```python
# examples of incorrect variable names
2myvar = "hello"
my-var = "hello"
my var = "hello"
```

---


## Assigning values to variables

- Use "Equal-to" (=) to assign values to hte variables.
- Assign different values to multiple variables in a single line. Example: x, y, z = 10, 20, "numbers".
- Assign single values to multiple variables in a single line. Example x = y = z = "single value".


---


## Output value of variable

- Use print() function, to print the output of a variable.
- You can pass multiple variables in a single print() function separated by commas(,) or by `+` operator to get output of each variable.
- If you use + operator to print outputs of 2 variables that are storing numbers, the output will be addition of those numbers.

```python
x = "hello "
print(x)

y = "world"
print(y)

# printing values of x and y toghether
print(x, y) # the output of this print function will be "hello world"
print(x + y) # the output of this print function will be "hello world"

```

```python

# when numbers are stored in variables and we use + operator to get the combined output of such 2 variables.

num1 = 10
num2 = 20
print(num1 + num2) # the output of this print function will be 30.
```
---


## Global Variables

>>> Must be covered after class on custom functions. 
