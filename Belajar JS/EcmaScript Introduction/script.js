{  
    // Case 1
      // write your code here
      const increment = function (x) {
        return x + 1;
      }
      
       document.getElementById("Case1").innerHTML = increment(3);
      // expected 4
    }
    // End of Case 1
    
{
    // Case 2
      // write your code here
      let numbers2 = [3, 4];
      let numbers1 = [1, 2];
      let allNumbers = [...numbers1, ...numbers2];

      document.getElementById("Case2").innerHTML = allNumbers;   
      // expected [1, 2, 3, 4]
    }
    // End of Case 2