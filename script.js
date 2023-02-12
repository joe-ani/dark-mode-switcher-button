const button = document.querySelector(".switch-button");
const dot = document.querySelector(".dot");
const body = document.getElementsByTagName("body");
const container = document.querySelector(".container");

button.addEventListener("click", () => {
  let dotAttr = dot.getAttribute("data-toggle");
  console.log(dotAttr);
  if (dotAttr === "false") {
    dot.setAttribute("data-toggle", true);
    dot.style.background = "black";
    dot.style.marginTop = "30px";
    container.style.background = " rgb(16, 19, 31)";
  } else if (dotAttr === "true") {
    dot.style.background = "#fff";
    dot.style.marginTop = "0";
    dot.setAttribute("data-toggle", false);
    container.style.background = "white";
  }
});
