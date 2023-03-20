
console.log("Hello");

const input = document.getElementById("type");
const form = document.querySelector("form");
const container = document.querySelector(".quote-container");
const p = document.createElement("p");
const i = document.createElement("i");

form.addEventListener("submit", (e) => {
  const val = input.value;
  e.preventDefault();
  let value = input.value;
  console.log(value);
  try {
    fetch("https://api.quotable.io/random/?author=" + val)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const quotes = data.content;
        const author = data.author;
        console.log(quotes);
        console.log(author);
        p.innerText = quotes;
        i.innerHTML = author;

        p.appendChild(i);
        container.appendChild(p);
      })
      .catch((e) => {
        alert("Sorry author is not avilable..  ");
      });
  } catch (e) {
    alert("Sorry author is not avilable");
    console.log("Author is not avilable");
    console.log(e);
  }
});

// setTimeout(() => {
//   fetch("https://api.quotable.io/random")
//     .then((res) => res.json())
//     .then((data) => console.log(data));
// }, 3000);
