const attended = document.getElementById("attended");
const referralQuestion = document.getElementById("referral-question");
const referral = document.getElementById("referral");

attended.addEventListener("change", function() {
    if (attended.value === "no") {
        referralQuestion.style.display = "block";
        referral.required = true;
    } else {
        referralQuestion.style.display = "none";
        referral.required = false;
    }
});