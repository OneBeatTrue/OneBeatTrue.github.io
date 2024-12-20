const feedbackContainer = document.getElementById('feedbackContainer');
function loadFeedbacks() {
    const savedFeedbacks = JSON.parse(localStorage.getItem("feedbacks")) || [];
    savedFeedbacks.forEach(feedbackContent => {
        const feedback = document.createElement("div");
        feedback.classList.add("feedback-container__feedback");
        feedback.innerHTML = `<b>${feedbackContent.name}</b><i>${feedbackContent.content}</i>`;
        feedbackContainer.appendChild(feedback);
    });
}

function addFeedback(name, feedback) {
    const feedback_elem = document.createElement("div");
    feedback_elem.classList.add("feedback-container__feedback");
    feedback_elem.innerHTML = `<strong>${name}</strong><p>${feedback}</p>`;
    feedbackContainer.appendChild(feedback_elem);
    const savedFeedbacks = JSON.parse(localStorage.getItem("feedbacks")) || [];
    savedFeedbacks.push({ name, feedback });
    localStorage.setItem("feedbacks", JSON.stringify(savedFeedbacks));
}

const form = document.getElementById("feedbackForm");
form.addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.querySelector(".name").value;
    const feedback = document.querySelector(".feedback").value;
    addFeedback(name, feedback);
    document.querySelector(".name").value = "";
    document.querySelector(".feedback").value = "";
});

document.addEventListener("DOMContentLoaded", loadFeedbacks);
