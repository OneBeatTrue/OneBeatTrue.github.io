document.addEventListener('DOMContentLoaded', function() {
    const headerContainer = document.querySelector('header');
    fetch('../common/header.html')
        .then(response => response.text())
        .then(html => {
            headerContainer.innerHTML = html;

            const menuItems = document.querySelectorAll('.menu__item');
            const currentPath = document.location.pathname;
            const currentFile = currentPath.substring(currentPath.lastIndexOf('/') + 1) || "index.html";
            menuItems.forEach(item => {
                const link = item.querySelector('.menu__link');
                const linkHref = link.getAttribute('href');
                if (currentFile === linkHref) {
                    item.classList.add('menu__item_active');
                } else {
                    item.classList.remove('menu__item_active');
                }
            });

            const firstSection = document.querySelector('section:first-of-type');
            firstSection.style.marginTop = '5vh';
        })
        .catch(error => {
            console.log(error);
        });
});