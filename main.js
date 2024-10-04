window.onload = function() {
    const logoBlock = document.getElementById('logo');
    const logoImg = document.querySelector('#logo img');
    const html = document.documentElement;

    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });

    setTimeout(() => {
        logoBlock.style.height = '20vh';
        logoBlock.style.marginBottom = '5vh';

        logoImg.style.height = '60vh';

        html.style.overflowY = 'auto';
    }, 500);
};
