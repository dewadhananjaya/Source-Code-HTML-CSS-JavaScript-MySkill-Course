// Example 
const thisYear = 2022
if (thisYear === 2022) {  document.getElementById('example').innerText = thisYear
}
// End of Example

//Case 1
// write your code here
let nextYear = 2021
if (nextYear == 2022) {
   console.log("Next Year is 2022")
} else { document.getElementById('Case1').innerText = nextYear + ' is next year'
}
// End of Case 1

//Case 2
// write your code here
let age = 20
let identityCardAllowed;
if (age >= 17) {
    identityCardAllowed = true
} else {
    identityCardAllowed = false
}
console.log(identityCardAllowed)
document.getElementById('Case2').innerText = identityCardAllowed;
// End of Case 2