document.addEventListener('DOMContentLoaded', () => {
    const galleryContainer = document.querySelector('.gallery-container');
    const modal = document.querySelector('.modal');
    const modalImg = document.querySelector('.modal-content');
    const captionText = document.querySelector('.caption');
    const closeBtn = document.querySelector('.close');

    const images = [
        { src: 'images/1.jpg', hdSrc: 'images/hd/1.jpg', caption: 'Image 1' },
        { src: 'images/2.jpg', hdSrc: 'images/hd/2.jpg', caption: 'Image 2' },
        { src: 'images/3.jpg', hdSrc: 'images/hd/3.jpg', caption: 'Image 3' },
        { src: 'images/4.jpg', hdSrc: 'images/hd/4.jpg', caption: 'Image 4' },
        { src: 'images/5.jpg', hdSrc: 'images/hd/5.jpg', caption: 'Image 5' },
        { src: 'images/6.jpg', hdSrc: 'images/hd/6.jpg', caption: 'Image 6' },
        { src: 'images/7.jpg', hdSrc: 'images/hd/7.jpg', caption: 'Image 7' },
        { src: 'images/8.jpg', hdSrc: 'images/hd/8.jpg', caption: 'Image 8' },
        { src:'images/9.jpg', hdSrc: 'images/hd/9.jpg', caption: 'Image 9' },
        { src: 'images/10.jpg', hdSrc: 'images/hd/10.jpg', caption: 'Image 10' },
        { src: 'images/11.jpg', hdSrc: 'images/hd/11.jpg', caption: 'Image 11' },
        { src: 'images/12.jpg', hdSrc: 'images/hd/12.jpg', caption: 'Image 12' },
        { src: 'images/13.jpg', hdSrc: 'images/hd/13.jpg', caption: 'Image 13' },
        { src: 'images/14.jpg', hdSrc: 'images/hd/14.jpg', caption: 'Image 14' },
        { src: 'images/15.jpg', hdSrc: 'images/hd/15.jpg', caption: 'Image 15' },
        { src: 'images/16.png', hdSrc: 'images/hd/16.png', caption: 'Image 16' },
        { src: 'images/17.jpg', hdSrc: 'images/hd/17.jpg', caption: 'Image 17' },
        { src: 'images/18.jpeg', hdSrc: 'images/hd/18.jpeg', caption: 'Image 18' },
        { src: 'images/19.jpg', hdSrc: 'images/hd/19.jpg', caption: 'Image 19' }, 
        { src: 'images/20.jpeg', hdSrc: 'images/hd/20.jpeg', caption: 'Image 20' },


    ];

    images.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = image.src;
        imgElement.dataset.hdSrc = image.hdSrc;
        imgElement.alt = image.caption;
        galleryContainer.appendChild(imgElement);
    });

    galleryContainer.addEventListener('click', (event) => {
        if (event.target.tagName === 'IMG') {
            modal.style.display = 'block';
            modalImg.src = event.target.dataset.hdSrc;
            captionText.innerText = event.target.alt;
        }
    });


    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});