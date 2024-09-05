document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.gallery img');
    let currentIndex = 0;

    function showNextImage() {
        images[currentIndex].style.display = 'none';
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].style.display = 'block';
    }

    // Initialize the gallery
    images.forEach(img => img.style.display = 'none');
    images[0].style.display = 'block'; // Show the first image

    setInterval(showNextImage, 3000); // Change image every 3 seconds
});

document.addEventListener('DOMContentLoaded', () => {
    const loveButton = document.getElementById('loveButton');
    const messageContainer = document.getElementById('messageContainer');

    loveButton.addEventListener('click', () => {
        messageContainer.textContent = 'You are amazing!';
        loveButton.textContent = 'I love you!';
    });
});