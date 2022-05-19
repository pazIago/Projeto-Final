//menu link active

const links = document.querySelectorAll(".header-menu a");

function activeChk(link) {
  const url = location.href;
  const href = link.href;
  if (url.includes(href)) {
    link.classList.add("ativo");
  }
  console.log("");
}

links.forEach(activeChk);

//Ativar itens do orçamento
const parameters = new URLSearchParams(location.search);

function activeProduct(parameter) {
  const element = document.getElementById(parameter);
  if (element) {
    element.checked = true;
  }
 }

parameters.forEach(activeProduct);

//Perguntas Frequentes
const questions = document.querySelectorAll(".perguntas button");

function expandQuestion(event) {
  const target = event.currentTarget;
  const controls = target.getAttribute("aria-controls");
  const answer = document.getElementById(controls);

  answer.classList.toggle("expanded");
  const expanded = answer.classList.contains("expanded");
  target.setAttribute("aria-expanded", expanded);
}

function evntQuestion(question) {
  question.addEventListener("click", expandQuestion);
}

questions.forEach(evntQuestion);

//galeria de bicicletas

