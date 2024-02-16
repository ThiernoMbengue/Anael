
document.addEventListener('DOMContentLoaded', function () {
    var scroller = scrollama();
    var title = document.querySelector('h1');
    var titleHeight = title.offsetHeight;
    var lastScrollTop = 0;
    var images = [
        "./images/carte.svg",
        "https://via.placeholder.com/600x400/00FFFF/808080?text=2",
        "./images/pieHuile.svg",
        "https://via.placeholder.com/600x400/FF0000/808080?text=4",
        "https://via.placeholder.com/600x400/00FFFF/808080?text=5",
        "https://via.placeholder.com/600x400/00FFFF/808080?text=3"
    ];
    function handleStepEnter(response) {
        var stepElement = response.element;
        var container = stepElement.closest('.content, .additional-content');
        var img = container.querySelector('.image-container img');
        if (img) {
            img.src = images[response.index];
        }
    }

    function init() {
        scroller.setup({
            step: '.step',
            offset: 0.5,
            debug: false
        }).onStepEnter(handleStepEnter);

        window.addEventListener('scroll', function() {
            var currentScroll = window.pageYOffset || document.documentElement.scrollTop;
            if (currentScroll > lastScrollTop && currentScroll > titleHeight) {
                // Faites défiler vers le bas
                title.classList.add('title-hide');
            } else {
                // Faites défiler vers le haut
                title.classList.remove('title-hide');
            }
            lastScrollTop = currentScroll;
        });
    }

    init();
});
