var color = document.querySelector("#color")
var btn = document.querySelector("#btn")

const getColor = () => {
  const randomNumber = Math.floor(Math.random() * 16777215);
  const randomCode = "#" + randomNumber.toString(16);
  document.body.style.backgroundColor = randomCode;
  btn.style.backgroundColor = randomCode;
  return randomCode;
};


btn.addEventListener("click",() =>{
    color.value = getColor();
})

document.getElementById("copybtn").addEventListener("click", btnwork);
function btnwork() {
  const copyText = document.getElementById("color");
  copyText.select();
  navigator.clipboard.writeText(copyText.value);
}


