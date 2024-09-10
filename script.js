document.querySelector('.btn__1').addEventListener('click', function() {
    if (window.matchMedia("(max-width: 768px)").matches) {
        const shareIcons = document.querySelector('.share__icons--hidden');
        const infoImage = document.querySelector('.info__image');
        const infoDetails = document.querySelector('.info__details');
        const btnShare = document.querySelector('.btn__1');
        //Toggle switch
        shareIcons.classList.toggle('active');
        //Hide details
        infoImage.classList.toggle('hidden');
        infoDetails.classList.toggle('hidden');
        btnShare.classList.toggle('hidden');
    } else if (window.matchMedia("(min-width: 769px and (max-width)").matches) {
        shareIcons.classList.toggle('active-tablet');
        infoImage.classList.toggle('hidden-tablet');
        infoDetails.classList.toggle('hidden-tablet');
        btnShare.classList.toggle('hidden-tablet');
    } else if (window.matchMedia("(min-width: 1025px)").matches) {
        shareIcons.classList.toggle('active-desktop');
        infoImage.classList.toggle('hidden-desktop');
        infoDetails.classList.toggle('hidden-desktop');
        btnShare.classList.toggle('hidden-desktop')
    }
});