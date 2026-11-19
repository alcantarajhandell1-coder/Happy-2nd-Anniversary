
// ===================================
// ANNIVERSARY DATE LOGIN
// ===================================

// November 17, 2024
const ANNIVERSARY_DATE = "2024-11-17";

const anniversaryForm =
    document.getElementById("anniversaryForm");

anniversaryForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const enteredDate =
        document.getElementById("anniversaryDate").value;

    const error =
        document.getElementById("loginError");

    if (enteredDate === ANNIVERSARY_DATE) {

        document.getElementById("loginPage")
            .classList.remove("active");

        goToPage(1);

        error.textContent = "";

    } else {

        error.textContent =
            "Oops! Try remembering our special day. ♡";

    }
});


// ===================================
// PAGE NAVIGATION
// ===================================

function goToPage(pageNumber) {

    document.querySelectorAll(".page").forEach(page => {
        page.classList.remove("active");
    });

    const nextPage =
        document.getElementById("page" + pageNumber);

    nextPage.classList.add("active");

    nextPage.style.animation = "none";

    void nextPage.offsetWidth;

    nextPage.style.animation = "fadeIn 0.7s ease";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    if (pageNumber === 5) {
        resetNoButton();
    }
}


// ===================================
// EXTRA PLAYFUL NO BUTTON
// ===================================

const noButton =
    document.getElementById("noButton");

const answerArea =
    document.querySelector(".answer-area");

function moveNoButton() {

    const area =
        answerArea.getBoundingClientRect();

    const button =
        noButton.getBoundingClientRect();

    const padding = 8;

    const maxX =
        area.width - button.width - padding * 2;

    const maxY =
        area.height - button.height - padding * 2;

    const randomX =
        padding + Math.random() * Math.max(0, maxX);

    const randomY =
        padding + Math.random() * Math.max(0, maxY);

    noButton.style.transform = "none";

    noButton.style.left = randomX + "px";

    noButton.style.top = randomY + "px";
}


// Move away when cursor approaches
noButton.addEventListener("pointerenter", moveNoButton);


// Move away when touched on mobile
noButton.addEventListener("touchstart", function(event) {
    event.preventDefault();
    moveNoButton();
}, { passive: false });


// Move again if clicked
noButton.addEventListener("click", function(event) {
    event.preventDefault();
    moveNoButton();
});


// Reset NO button when entering proposal page
function resetNoButton() {

    noButton.style.left = "65%";

    noButton.style.top = "50%";

    noButton.style.transform =
        "translate(-50%, -50%)";
}
