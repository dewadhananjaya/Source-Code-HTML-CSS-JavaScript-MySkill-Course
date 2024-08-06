function setJokePromise(value) {
    const left = document.getElementById("left");
    left.innerHTML = `<h1>Dari Promise</h1>
    <p>${value.setup}</p>
    <p>${value.delivery}`;
  }
  
  function setJokeAsync(value) {
    const right = document.getElementById("right");
    right.innerHTML = `<h1>Dari Async</h1>
    <p>${value.setup}</p>
    <p>${value.delivery}`;
  }
  
  function getJokePromise() {
    fetch("https://v2.jokeapi.dev/joke/Any?safe-mode&type=twopart")
      .then(function (response) {
        return response.json();
      })
      .then(function (parsedResponse) {
        setJokePromise(parsedResponse);
      });
  }
  
  getJokePromise();
  
  // Ubah kode diatas menjadi async await

  async function getJokeAsync() {
    try {
      const response = await fetch("https://v2.jokeapi.dev/joke/Any?safe-mode&type=twopart");
      const parsedResponse = await response.json();
      setJokeAsync(parsedResponse);
    } catch (error) {
      console.error("Error fetching joke:", error);
    }
  }
  
  getJokeAsync();