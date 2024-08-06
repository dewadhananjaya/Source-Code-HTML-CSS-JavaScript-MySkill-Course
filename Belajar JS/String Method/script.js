// Example 
{
    let str = "Apple, Banana, Kiwi";
    let takeBanana = str.slice(7,13);
    document.getElementById("contoh").innerHTML = takeBanana;
  }
  // End of Example

{  
  // Case 1
    let str = "Apple, Banana, Kiwi";
    // write your code here
    let takeBananaNegative = str.slice(7, 12);     
     document.getElementById("Case1").innerHTML = takeBananaNegative;
  // End of Case 1
  }

{  
  // Case 2
    let str = "Hello World";
    // write your code here
    let makeStrCapital = str.toUpperCase();
     document.getElementById("Case2").innerHTML = makeStrCapital;
    //expected = HELLO WORLD
  // End of Case 2
  }