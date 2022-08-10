let screen = document.getElementById("screen");

let buttons = Array.from(document.getElementsByClassName("button"));

buttons.map((button) => {
  button.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case "C":
        screen.innerText = "";
        break;
      case "⇚":
        if (screen.innerText) {
          screen.innerText = screen.innerText.slice(0, -1);
        }
        break;
      case "=":
        try {
          screen.innerText = eval(screen.innerText);
        } catch {
          screen.innerText = "Operación errónea";
        }

        break;
      default:
        screen.innerText += e.target.innerText;
    }
  });
});

let equal = document.querySelector("#equal");
