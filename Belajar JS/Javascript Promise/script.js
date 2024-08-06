//lengkapi kode ini agar dapat menampilkan kode di halaman html

let myPromise = new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve("Belajar di myskill.id"); 
    }, 3000);
  });
  
  myPromise.then(function(value) {
    document.getElementById("demo").innerHTML = value;
  });