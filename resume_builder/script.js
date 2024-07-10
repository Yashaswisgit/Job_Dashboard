document.addEventListener('DOMContentLoaded', function() {
    const pages = document.querySelectorAll('.testimonial-page');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    const pageNumberDisplay = document.getElementById('page-number');
    let currentIndex = 0;

    // Show the first page initially
    pages[currentIndex].classList.add('active');
    updatePageNumber();

    prevButton.addEventListener('click', () => {
        pages[currentIndex].classList.remove('active');
        currentIndex = (currentIndex === 0) ? pages.length - 1 : currentIndex - 1;
        pages[currentIndex].classList.add('active');
        updatePageNumber();
    });

    nextButton.addEventListener('click', () => {
        pages[currentIndex].classList.remove('active');
        currentIndex = (currentIndex === pages.length - 1) ? 0 : currentIndex + 1;
        pages[currentIndex].classList.add('active');
        updatePageNumber();
    });

    function updatePageNumber() {
        pageNumberDisplay.textContent = `${currentIndex + 1}/${pages.length}`;
    }
});
