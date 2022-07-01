function adviceLoad() {
  const quote = {
    url: "https://api.adviceslip.com/advice",
    adviceID: document.getElementById("advice-id"),
    advice: document.getElementById("advice"),
  };

  fetch(quote.url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      quote.adviceID.textContent = `#${data.slip.id}`;
      quote.advice.textContent = `"${data.slip.advice}"`;
    });
}
adviceLoad();
document.getElementById("button").addEventListener("click", adviceLoad());
