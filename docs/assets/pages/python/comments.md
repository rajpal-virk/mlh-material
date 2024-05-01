## What is a comment?
:   Comments are non-executable information in python script. Python will ignore comments while executing the script.


---


## Why do we use comments?
:   Comments are used to provide additional information about the code. This information is not important for the script but for the person who wants to understand the script or who has to debug the code. 


---


## Types of comments

There are 2 types of comments:
1. Single line comment
2. Multi line comment


---


### 1. Single line comment
- Single line comments start with hashtag signs (#).
- These comments can be added in a new line above or below the part of script for which the comment is added or at the end of the same line of the part of the script. 
- You can use hastag in the begininig of each line to make a multi line comment.


Examples:

```python
# This is a single line comment.

# Assigning 10 to variable a. 
a = 10

b = 20  # Assigning 20 to variable b.

# Creting a multiline comment using hastags
# this is line 1
# this is line 2
# this is line 3
```


---


### 2. Multi line comment
- Use a set of 3 single quotes (') or double quotes ("), to start a multiline comment.
- You must end a multiline comment with same set of 3 single quotes or double quotes that are used to start the comment. 
- **Do not mix quotation marks**

Examples:

```python
'''We are using 3-sets of single quotes to
create this multiline comment.
'''

"""We are using 3-sets of double quotes to
create this multiline comment.
"""
```

From now onwards, try to add comments to each line of code you write so you can refer to it later to undertand your work. 