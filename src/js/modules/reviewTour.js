import { tourReview } from './state.js'

const reviewTour = tourReview.map(el =>
    `
    <div class='review' id='tour-review'>

    <span class='review__info'>
       ${el.review}
    </span>
    <div class='person-container'>
        <div class='person-container__text'>
            <span>${el.name}</span>
            <span>${el.title}</span>
        </div>
        <img src="${el.avatar}" alt="photo-person">
    </div>

    </div >
  `
)
export const review = () => {
    const containerTourReview = document.getElementById('tour-review')
    containerTourReview.innerHTML = reviewTour.join('')
}