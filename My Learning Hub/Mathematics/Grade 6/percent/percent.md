## **Pre-requisites**

- It is good to review following topics (if already covered) before starting this topic - 
    - Fractions
    - Decimal numbers
    - Order of operations (BBODMAS) (especially O = OF, which means multiplication)


---


# **Percent**

 - Percent is a number expressed as a fraction of 100.
    - Percent means "per 100" or "out of 100"
 - Percent symbol is **%**.
 - It is used to express the relationship of a number to the whole (100%).
 - Example 
    - In a test of 100 marks, you have obtained 80 marks i.e. 80 marks out of 100 marks. This means that in percent, you have obtained 80% marks.


---


# **Converting to and from Percents**
- Percents can be converted to Fractions and Decimals, and vice-versa.

---


## **Converting Percents into Fractions**

- To convert a percent value to fraction, simply replace % with "divided by 100".
- Example
    $$ 20\% = 20 \div 100 = \frac{20}{100}  $$

    - Simplify your fraction further if possible. 
    $$ \frac{20}{100} = \frac{1}{5} $$
    
    In above case, we simplified the fraction.  
    (Both 20 and 100 can be divided by 20, so we divided both numbers with 20 and wrote the quotients as new numerator and denominator.)
    
!!! Tips
    To simplify fraction, find a number that can divide both numerator and denominator. Divide numerator and denominator with that number, and write down the quotients as new numerator and denominator.  
    Repeat this step until you are not able to find any common number to divide both numerator and denominator any further.


---


## **Converting Fractions into Percents**

- To convert fractions into Percents, simply find what number times denominator equals to 100. Use this number to multiply both numerator and denominator.
- Now your fraction is a number (numerator) out of 100 (denominator). Simply write it in a percent form. 

- Example
    $$ \frac{1}{10} $$
    
    In above fraction, we know if we times 10 with denominator, then denominator will become 100. Therefore, we will multiply both numerator and denominator with 10.

    $$ \frac{1*10}{10*10} = \frac{10}{100} = 10\%$$

    Now, we have our fraction as 10 out of 100, which means 10%.


---


## **Convert Percents into Decimals**

- To convert percents into decimals, write the nubmer with percent into fraction form (out of 100). Do not simplify this fraction.
- Since your denominator is 100, simply remove denominator and in numerator, count 2 digits from right and place decimal before 2nd number from right. 
- Example

    $$ 35\% = \frac{35}{100} $$

    Remove denominator and count 2 digits from right to place decimal.  
    In this example, 3 is the 2nd digit from right so we will place decimal in front of 3.

    $$ \frac{35}{100} = 0.35 $$

!!! Notes
    
    If you have a numerator with only 1-digit then you can add a zero (0) in front of that number in numerator to make a 2-digit number and then place decimal in front of 0. 

    $$ 3\% = \frac{3}{100} = 0.03$$


---


## **Convert Decimals into Percents**

- To convert a decimal number in Percent, convert decimal into fraction form with 100 as denominator.
- Now you have a fraction with a number (numerator) out of 100 (denominator). Now simply write it in a percent form. 
- Example
    $$ 0.75   = \frac{75}{100} = 75%$$

!!! Notes
    
    If you have a number with more than 2-digits after decimal, you will only use number 100 from denominator to convert numerator into percentage. Additional zeros(0) in denominator will be used to convert the number back in decimal form.  
    your answer will be a decimal percent number. 
    $$ 3.567 = \frac{3567}{1000} = \frac{3567}{(10*100)} = \frac{3567\%}{10} = 356.7\%$$


---


# **Represent Percent value on Percent Line**
- Draw a line segment if not given and mark 2 endpoints on both ends of it. 
- Label 1st endpoint (on left side of line segment) as 0% and 2nd endpoint (on right side of line segment) as 100%.
- Divide the line in-between in 10 equal parts 
- you can also label each part as shown below - 
    - 10%, 20%, 30%, 40%, 50%, 60%, 70%, 80%, and 90%.

$$

\begin{tikzpicture}
% Draw horizontal line
\draw (0,0) -- (10,0);
% Draw vertical lines
\foreach \x in {0,1,...,10} {
    \draw (\x cm,3pt) -- (\x cm,-3pt);
}
% Draw nodes
\foreach \x/\percent in {0/0,1/10,10/100} {
    \node[below] at (\x,-3pt) {\percent\%};
}
\end{tikzpicture}

$$


- OR you can label the middle part (mark) of line as 50%.


---


# **Calculating Percents**

## **Question Type 1**

- Example 
    Question - Find 35% of 400.

    To solve this type of questions, Replace % sign with "divided by 100", and replace "of" with multiplication.

    $$ 35\% \ of \ 400 = \frac{35}{100} * 400 = 140$$


## **Question Type 2**


- Example
    Question - 12 is what percent of 48?

    To solve this type of questions, use algebra. Replace word "is" with "=", "What" with "x", "percent" with "divided by 100" and "of" with "mutiply sign".

    $$ 12 = x\% * 48 $$ 

    $$ \frac{12}{48} = \frac{x}{100}$$  

    $$ \frac{1}{4} * 100 = x $$ 

    $$ 25 = x $$

    Therefore, 12 is 25% of 48. 



