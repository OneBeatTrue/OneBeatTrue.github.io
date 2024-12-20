window.onload = function() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
};

(function () {
    window.addEventListener('load', function () {
        const loadTime = performance.timing.domContentLoadedEventEnd - performance.timing.navigationStart;
        const footer = document.querySelector('footer'); // Находим подвал сайта
        const stats = document.createElement('p');
        stats.classList.add('footer__stats');
        stats.textContent = `Страница загружена за ${loadTime / 1000} с`;
        if (footer) {
            footer.appendChild(stats);
        }
    });
})();

window.addEventListener('scroll', function () {
    const header = document.querySelector('.logo');
    const thread_presence = document.querySelectorAll('.section__table');
    if (window.scrollY > 50 && !thread_presence.length) {
        header.classList.add('logo_fixed');
    } else {
        header.classList.remove('logo_fixed');
    }
});