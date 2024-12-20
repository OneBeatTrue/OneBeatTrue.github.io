document.addEventListener('DOMContentLoaded', function() {
    const footerContainer = document.querySelector('footer');
    fetch('../common/footer.html')
        .then(response => response.text())
        .then(html => {
            footerContainer.innerHTML = html;
        })
        .catch(error => {
            console.log(error);
        });
});