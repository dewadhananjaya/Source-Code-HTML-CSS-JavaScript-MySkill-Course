// Example 
{
    const takeContohText = document.getElementById("contoh").innerHTML
    
     document.getElementById("example").innerText = takeContohText
  }
  // expected result = Example : Buatlah id=contoh ini menjadi innerText pada id=example
  // End of Example
  {  
  //Case 1
    // write your code here
    // note : perlu diingat jika ingin mengambil DOM menggunakan className harus melakukan sesuai index
    const takeCaseText = document.getElementsByClassName("caseText")
    
    document.getElementById("Case1").innerText = takeCaseText[0].innerHTML;
          
   // expected result = Case 1 : Buatlah class=caseText ini menjadi innerText pada id=Case1
  // End of Case 1
  }  