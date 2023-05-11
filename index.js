const mainContainer = document.querySelector(".main_container")
const thankyouContainer = document.querySelector(".thankyou_container")
const submitButton = document.getElementById("submit_button")
const rateAgainButton = document.getElementById("rateAgain_button")
const rating = document.getElementById("rating");
const rates = document.querySelectorAll(".circle");

submitButton.addEventListener("click", () => {
    thankyouContainer.classList.remove("hidden");
    mainContainer.style.display = "none";
})
rateAgainButton.addEventListener("click", () => {
    thankyouContainer.classList.add("hidden");
    mainContainer.style.display = "block";
})

rates.forEach((rate) => {
    rate.addEventListener("click", () => {
        rating.innerHTML = rate.innerHTML;
    })
})
