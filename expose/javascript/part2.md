Question 1: Line 12 gives the output **3** since `i` iterates over `prices.length` and `prices` has a length of 3. Since `i` is defined with `var` it can be accessed inside the function it is defined in and line 12 prints 3. <br /><br />
Question 2: Line 13 gives the output **150** since for the last iteration of `discountedPrice` it calculates 300*0.5 which gives 150. Since `discountedPrice` is defined using `var` it can be accessed inside the function it is defined in and line 13 prints 150. <br /><br />
Question 3: Line 14 gives the output **150** since for the last iteration of `finalPrice` it calculates `Math.round(150*100)/100` which gives 150. Since `finalPrice` is defined using `var` it can be accessed inside the function it is defined in and line 14 prints 150. <br /><br />
Question 4: The function returns **[50, 100, 150]** since it calculates the `discountedPrice` for each of the values in the array `prices` using a 50% discount, and pushes the `finalPrice` into the array `discounted` rounded to two decimal places. Since `discounted` is defined using `var` it can be accessed inside the function it is defined in and the line is which we are returning `discounted` is within the same function. Hence it returns [50, 100, 150]. However in this program since we are not printing the returned value so, **the program does not print anything**. <br /><br />
Question 5: This code causes an error at line 12 saying that `i` is not defined because `i` is defined using `let` which means that it can only be accessed in the scope it is defined and since line 12 is outside the for loop (the scope in which `i` is defined), the code gives us an error. <br /><br />
Question 6: This code causes an error at line 13 saying that `discountedPrice` is not defined because `discountedPrice` is defined using `let` which means that it can only be accessed in the scope it is defined and since line 13 is outside the for loop (the scope in which `discountedPrice` is defined), the code gives us an error. <br /><br />
Question 7: Line 14 gives the output **150** since for the last iteration of `finalPrice` it calculates `Math.round(150*100)/100` which gives 150. Since `finalPrice` is defined using `let` it can be accessed only inside the scope it is defined in and line 14 is within that scope. Hence it prints 150. <br /><br />
Question 8: The function returns **[50, 100, 150]** since it calculates the `discountedPrice` for each of the values in the array `prices` using a 50% discount, and pushes the `finalPrice` into the array `discounted` rounded to two decimal places. Since `discounted` is defined using `let` it can be accessed only inside the scope it is defined in and the line is which we are returning `discounted` is within that scope. Hence it returns [50, 100, 150]. However, in this program since we are not printing the returned value so, **the program does not print anything**. <br /><br />
Question 9: This code causes an error at line 11 saying that `i` is not defined because `i` is defined using `let` which means that it can only be accessed in the scope it is defined and since line 11 is outside the for loop (the scope in which `i` is defined), the code gives us an error. <br /><br />
Question 10: Line 12 prints the value of `length` which is **3**. `length` is defined using `const` which is equal to the length of the array `prices` which is 3. Since `length` is not being changed anywhere throughout the function it prints without any errors. <br /><br />
Question 11: The function returns **[50, 100, 150]** since it calculates the `discountedPrice` for each of the values in the array `prices` using a 50% discount, and pushes `discountedPrice` into the array `discounted`. `discounted` is defined using `const` which means that its value cannot be changed after initial declaration. Since we are only pushing the value of `discountedPrice` into `discounted` the program runs without any errors and returns [50, 100, 150]. However, in this program since we are not printing the returned value so, **the program does not print anything**. <br /><br />
Question 12:
- A : student.name
- B : student['Grad Year']
- C: student.greeting()
- D: student['Favorite Teacher'].name
- E: student.courseLoad[0]
  <br /><br />
Question 13: 
- A: '3' + 2 outputs **32**. The + operator when used with a string concatenates the string and the number as strings. 

- B: '3' - 2 outputs **1**. When the - operator is used, JavaScript automatically converts the string '3' to the number 3 and then subtracts 2 from it.

- C: 3 + null outputs **3**. When null is used, it is automatically converted to 0.

- D: '3' + null outputs **3null**. When null is used with the + operator, it is converted to the string `null` and concatenated with the string '3'.

- E: true + 3 outputs **4**. When true is used in a mathematical operation, it is automatically converted to 1.

- F: false + null outputs **0**. When false and null are used in a mathematical operation, they are both automatically converted to 0.

- G: '3' + undefined outputs **3undefined**. When undefined is used with the + operator, it is converted to the string 'undefined' and concatenated with the string '3'.
  
- H: '3' - undefined outputs **NaN** (Not a Number). When undefined is used in a mathematical operation, it is converted to NaN, which means the result of the operation is not a number. <br /><br />

