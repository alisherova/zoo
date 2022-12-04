function open_close_bar() {
  document.querySelector(".header").classList.toggle("container");
  document.querySelector("header").classList.toggle("header_abs");
  document.querySelector(".header-top").classList.toggle("header-top_abs");
  document.querySelector("nav").classList.toggle("tablet_hidden");
  document.querySelector(".header_logo").classList.toggle("barmenu_logo");
  document
    .querySelector(".close_burger_menu")
    .classList.toggle("dektop_hidden");
  document.querySelector(".main_div").classList.toggle("dimmed_area");
}

function closePopUps() {
  document.querySelector(".header_abs") !== null
    ? open_close_bar()
    : closeReviewPopup();
}

const inputs = document.querySelectorAll('input[type="radio"]');
const prices = document.querySelectorAll("p.price");
const amountInput = document.querySelector(".amount_input");
const disableColor = () => {
  prices.forEach((a) => (a.style.color = "black"));
};


 
inputs.forEach((a, index) => {
  a.onchange = () => {
    let n = +document.querySelector(`.pric${a.attributes.id.value}`).textContent;
    amountInput.value = n;
    disableColor();
    document.querySelector(`.pric${a.attributes.id.value}`).style.color =
      "#FE9013";
    document.querySelector(`.price3`).classList.remove("active");
  };
});
amountInput.oninput = () => {
  if (amountInput.value.length > 4) {
    amountInput.value = amountInput.value.slice(0, 4);
    document.querySelector(".amount_error_msg").textContent =
      "Amount should not be more than 4 characteristcs";
    document.querySelector(".dollarSign").style.display = "none"
  } 
  document.querySelectorAll('input[name="dot"]').forEach(i=>{i.checked = false})
  document.querySelectorAll('.price').forEach(e=>{
    e.style.color ="black";
    if(amountInput.value == +e.textContent){
      e.style.color ="#FE9013";
      e.parentNode.querySelector('input[name="dot"]').checked = true
    } 
  }) 
}
