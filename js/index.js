window.onload = function() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
};

window.addEventListener('scroll', function () {
    const header = document.querySelector('.logo');
    if (window.scrollY > 150) {
        header.classList.add('logo_fixed');
    }
    else {
        header.classList.remove('logo_fixed');
    }
});

(function () {
    window.addEventListener('load', function () {
        const loadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
        const footer = document.querySelector('footer');
        const stats = document.createElement('p');
        stats.classList.add('footer__stats');
        stats.textContent = `Страница загружена за ${loadTime / 1000} с`;
        if (footer) {
            footer.appendChild(stats);
        }
    });
})();