const ratingContainer = document.querySelector('.screen__rating');
const thanksContainer = document.querySelector('.screen__thank-you');
const submitButton = document.getElementById("submit");
const ratings = document.querySelectorAll('.rate-btn');
const ratingWrapper = document.querySelector('.rating');
const userRating = document.querySelector('.user-rating');

// keep the active state style for selected button

function keepActiveButton(e) {
    e.target.classList.add("selected");
}

ratingWrapper.addEventListener("click", keepActiveButton);


// from rating state to thank you state

function changeContainer() {
    thanksContainer.classList.remove("hidden");
    ratingContainer.style.display = "none";
}

submitButton.addEventListener('click', changeContainer);

    
// get and show user rating
// https://stackdev.blog/blog/event-listeners

function showRating(e) {
    userRating.innerText = e.target.innerText;
}

ratingWrapper.addEventListener('click', showRating);
