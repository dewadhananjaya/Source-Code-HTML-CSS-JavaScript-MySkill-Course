{  
    // Case 1
      // write your code here
      const numbers = [45, 4, 9, 16, 25];
      let checkAllOver10 = numbers.every(myFunction);
      function myFunction(value) {
      return value > 10;
      }
      
       document.getElementById("Case1").innerHTML = checkAllOver10;
    }
    // End of Case 1
    
{
    // Case 2
      // write your code here
      const string = 'Apakah pada string ini terdapat huruf x ?'
      const checkStringX = /e/.test(string)
      
      document.getElementById("Case2").innerHTML = checkStringX;
      
      // expected true
    }
    // End of Case 2