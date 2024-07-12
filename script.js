document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.getElementById('gallery');

    // List of image files
    const images = [
        'images/image1.cpic',
        'images/image2.cpic',
        // Add more .cpic files here
    ];

    images.forEach(image => {
        fetch(image)
            .then(response => response.blob())
            .then(blob => {
                const imgUrl = URL.createObjectURL(blob);
                const imgElement = document.createElement('img');
                imgElement.src = imgUrl;
                gallery.appendChild(imgElement);
            })
            .catch(error => console.error('Error loading image:', error));
    });
});
