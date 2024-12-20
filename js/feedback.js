const feedbackContainer = document.querySelector('.feedback-container');
function loadFeedbacks() {
    const savedFeedbacks = JSON.parse(localStorage.getItem("feedbacks")) || [];
    savedFeedbacks.forEach(feedbackContent => {
        const feedback = document.createElement("div");
        feedback.classList.add("feedback-container__feedback");
        feedback.innerHTML = `<b>${feedbackContent.name}: </b><i>${feedbackContent.feedback}</i>`;
        feedbackContainer.appendChild(feedback);
    });
}

function addFeedback(name, feedback) {
    const feedback_elem = document.createElement("div");
    feedback_elem.classList.add("feedback-container__feedback");
    feedback_elem.innerHTML = `<b>${name}: </b><i>${feedback}</i>`;
    feedbackContainer.appendChild(feedback_elem);
    const savedFeedbacks = JSON.parse(localStorage.getItem("feedbacks")) || [];
    savedFeedbacks.push({ name, feedback });
    localStorage.setItem("feedbacks", JSON.stringify(savedFeedbacks));
}

const form = document.querySelector(".feedback-form");
form.addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const feedback = document.getElementById("feedback").value;
    addFeedback(name, feedback);
    form.reset()
});

document.addEventListener("DOMContentLoaded", loadFeedbacks);
