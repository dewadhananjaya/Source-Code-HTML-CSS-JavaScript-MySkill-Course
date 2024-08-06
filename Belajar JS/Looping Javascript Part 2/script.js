// Example 
{
  for (let i = 0; i <= 3; i++) {
      document.getElementById("example").innerText += i
      }
  }
  // expected result = 0123
  // End of Example
    
{
  //Case 1
  let i = 0;
  do {
    document.getElementById("Case1").innerText += i;
    i++;
  } while (i < 0);
  // expected result = 0
  // End of Case 1
}

{
  //Case 2
  for (let i = 1; i < 10; i++) {
    if (i % 2 == 0) continue;
    document.getElementById("Case2").innerText += i;
  }
  // expected result = 13579
  // End of Case 2
}
