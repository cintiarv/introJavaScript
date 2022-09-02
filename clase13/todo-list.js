function toDoList(n) {
  const body = document.querySelector("body");
  const h1 = document.createElement("h1");
  h1.innerText += "To do List";
  body.appendChild(h1);
  const ul = document.createElement("ul");
 
  for (let i = 1; i <= n; i++) {
    let li = createLi(`Task ${i}`);
    ul.appendChild(li);
  }

  body.appendChild(ul);
}

function createLi(text) {
  const liOne = document.createElement("li");
  liOne.innerText += text;
  return liOne;
}

toDoList(10);
