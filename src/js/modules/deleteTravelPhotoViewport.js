export const resize = () => {
    const removeImages = (images) => {
        images.forEach(img => {
            img.parentNode.style.display = 'none';
        })
    }

    const restoreImages = (images) => {
        images.forEach(img => {
            img.parentNode.style.display = '';
        })
    }


    document.querySelectorAll('.images-travel__box').forEach(picture => {
        const images = picture.querySelectorAll('img.image-off');
        const imagesViewport = picture.querySelectorAll('img.image-off-viewport')
        if (window.innerWidth <= 1024 && window.innerWidth > 768) {
            removeImages(images)
        } else if (window.innerWidth <= 768) {
            removeImages(imagesViewport);
        } else {
            restoreImages(imagesViewport);
            restoreImages(images);
        }
    });
}
