let content = "";
for (let i = 0; i <= 10; i++) {
  content += `<div class='item'>${i}</div>`;
}
document.querySelector(".container").innerHTML = content;
