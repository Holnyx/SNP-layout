
import { journeyBox } from './journey.js'
import { review } from './reviewTour.js'
import { travelHistoryFoo } from './travelHistory.js'
import { scrollHeader } from './headerScrollChanges.js'
import { scrollToTitle } from './scrollToTitle.js'
import { resize } from './deleteTravelPhotoViewport.js'
import { sizeButton } from './buttonComponent.js'
import { changeColor } from './changeColorSelect.js'
import { clearForm } from './clearForm.js'

export const isWebp = () => {
    function testWebP(callback) {
        let webP = new Image();
        webP.onload = webP.onerror = function () {
            callback(webP.height === 2);
        };
        webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }

    testWebP(function (support) {
        const className = support === true ? 'webp' : 'no-webp';
        document.documentElement.classList.add(className);
    })

    sizeButton()
    window.addEventListener('resize', sizeButton)

    resize()
    window.addEventListener('resize', resize)

    scrollToTitle()

    scrollHeader()
    window.addEventListener('scroll', scrollHeader)

    journeyBox()
    review()
    travelHistoryFoo()

    document.addEventListener('change', changeColor)

    const clearButton = document.getElementById('clearForm')
    clearButton.addEventListener('click', clearForm)
};
