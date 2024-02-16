document.addEventListener('DOMContentLoaded', function () {
    var scroller = scrollama();
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
        var container = stepElement.closest('.content');
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
            var content = document.querySelector('.content');
            var textContainer = content.querySelector('.text-container');
            var imageContainer = content.querySelector('.image-container');
            var textContainerTop = textContainer.offsetTop;
            var imageContainerTop = imageContainer.offsetTop;

            if (currentScroll >= textContainerTop && currentScroll < imageContainerTop) {
                textContainer.style.display = 'block';
                imageContainer.style.display = 'none';
            } else {
                textContainer.style.display = 'none';
                imageContainer.style.display = 'block';
            }
        });
    }

    init();
});
