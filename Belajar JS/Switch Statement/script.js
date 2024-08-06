// Example 
let a = 4;
switch (a) {
  case 3:
    document.getElementById("example").innerText = "too Big"
    break;
  case 4:
    document.getElementById("example").innerText = "exactly"
    break;
  default:
    document.getElementById("example").innerText = "wrong input"
}
// you can change a with 3 or else to see how case is working
// End of Example

//Case 1
// note: day in javascript is start from 0 for sunday, 6 for saturday, there is no number 7 when you use getDay in javascript
let b = new Date().getDay()
switch (b) {
  // write your code here
    // use document.getElementById("Case1").innerText = 
    // to put your output value in html
    case 6:
    case 0: 
      document.getElementById("Case1").innerText = "it's weekend";
      console.log("it's weekend");
    break;

    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
      document.getElementById("Case1").innerText = "it's weekday";
      console.log("it's weekday");
}
// End of Case 1
