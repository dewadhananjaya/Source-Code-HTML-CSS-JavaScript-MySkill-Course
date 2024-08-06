// Example 
{
    const a = ['Rintis', 'Karir', 'Impian']
    document.getElementById("contoh").innerHTML = a.toString();
  }
  // End of Example

{  
  // Case 1
    // write your code here
    const a = ['Rintis', 'Karir', 'Impian']
    
    document.getElementById("Case1").innerHTML = a.join("-");
    // expected Rintis - Karir - Impian
  }
  // End of Case 1
  
{
    // Case 2
    // write your code here
    const points = [40, 100, 1, 5, 25, 10]
    let sortPoints = points.sort(function(a, b) {return(a - b)});
    
    document.getElementById("Case2").innerHTML = sortPoints;
    // expected [1,5,10,25,40,100]
  }
  // End of Case 2