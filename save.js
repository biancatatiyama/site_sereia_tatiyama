document.querySelectorAll(".form-control").forEach((input) => {
    input.addEventListener("input", (e) => {
      if (input.id === "email") {
        if (input.getAttribute("aria-invalid") == "false" && e.target.value.length > 3) {
          console.log("Preencheu o campo email");
          return;
        }
        return;
      }
      if (e.target.value.length > 0) {
        console.log(`Preencheu o campo ${input.id}`);
        return
      }
    });
  });



  const teste = (document.querySelector(".nav.navbar-nav.navbar-right").getElementsByTagName("li"))
    console.log(Array.from(teste))
    Array.from(document.querySelector(".nav.navbar-nav.navbar-right").getElementsByTagName("li")).forEach((element) => {
      console.log(element.getElementsByTagName('a'))
      Array.from(element.getElementsByTagName('a')).addEventListener('click', (e) => { console.log('oi ') })
    })