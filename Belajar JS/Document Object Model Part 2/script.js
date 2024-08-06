// Example 
{
    function addElement() {
      const newDiv = document.createElement('div');
      const newContent = document.createTextNode('ini adalah contoh cara membuat element baru');
      newDiv.appendChild(newContent);
      const currentDiv = document.getElementById('contoh');
      document.body.insertBefore(newDiv, currentDiv)
    }
    addElement()
  }
  // End of Example

{  
// Case 1
// write your code here
    document.getElementById('caseText').style.color = "blue";   
          
    // expected result = style color is = "blue"
  // End of Case 1
  }