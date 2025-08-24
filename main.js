cconsole.log("Hello, Axios!");

document.addEventListener("DOMContentLoaded", function () {
  const lista = document.getElementById("lista-email");
  lista.style.listStyleType = "none";
  const bottone = document.getElementById("genera-mail");
  bottone.style.backgroundColor = "lightblue";
  bottone.style.border = "none";
  bottone.style.padding = "30px 100px";
  bottone.style.borderRadius = "5px";
  bottone.style.cursor = "pointer";
  bottone.style.fontSize = "30px";
  bottone.style.marginTop = "20px";
  bottone.style.fontWeight = "bold";
  bottone.style.color = "white";
  function generaEmail() {
    lista.innerHTML = "";
    for (let i = 0; i < 10; i++) {
      axios
        .get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then((response) => {
          const email = response.data.response;
          const li = document.createElement("li");
          li.style.marginBottom = "10px";
          li.style.border = "1px solid ";
          li.style.borderRadius = "5px";
          li.style.padding = "10px";
          li.style.backgroundColor = "#f9f9f9";
          li.textContent = email;
          lista.appendChild(li);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }
  generaEmail();
  bottone.addEventListener("click", generaEmail);
});
