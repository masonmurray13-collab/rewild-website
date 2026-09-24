// always load the page at the top
if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
}

window.scrollTo(0, 0);

// make arrow to scroll to top visible only when near the bottom of the page
const backToTop = document.querySelector(".back-to-top");
const arrowTrigger = document.querySelector(".arrow-trigger");

if (backToTop && arrowTrigger) {
    window.addEventListener("scroll", function() {
        const photoBottom = arrowTrigger.getBoundingClientRect().bottom;

        if (photoBottom <= window.innerHeight) {
            backToTop.style.display = "block";
        } else {
            backToTop.style.display = "none";
        }
    });
}

// make referral question visible only if "no" is selected for attended
const attended = document.getElementById("attended");
const referralQuestion = document.getElementById("referral-question");
const referral = document.getElementById("referral");

if (attended) {
    attended.addEventListener("change", function() {
        if (attended.value === "no") {
            referralQuestion.style.display = "block";
            referral.required = true;
        } else {
            referralQuestion.style.display = "none";
            referral.required = false;
        }
    });
}
