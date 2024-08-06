function getColor() {
    return prompt("warna apa yang kamu inginkan?", "red");
  }
  
  function changeColor(element, callback) {
    element.style.color = callback();
  }
  
  const heading = document.getElementById("heading");
  
  //lengkapi kode dibawah ini agar element heading berubah menjadi warna sesukamu
  
  changeColor(heading, getColor);