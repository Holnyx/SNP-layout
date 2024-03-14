import { travelHistory } from './state.js'
import { buttonInfo } from './buttonComponent.js'


const containerTravelHistory = travelHistory.map(el =>
    `
    <div class='travel-history' id='travel-history' style="background-image:${el.background}">
        <div class='card-info'>
            <h3 class='card-info__title'>${el.title}</h3>
            <span class='card-info__subtitle'> ${el.info.text}
    <ul  class='items'>
        ${el.info.point ? el.info.point.map(el =>
        `<li>${el}</li>`).join('') : ''}
    </ul>
            </span>
        </div>
    <div class='social-container'>
    ${buttonInfo}
        <div class='social'>
        ${el.social.map(el =>
        `<a class='a a--hover a--active' href="javascript:void(0);">${el}</a>`)
        .join('')}</div>
    </div>
</div>
  `
)

export  const travelHistoryFoo = () => {
const containerTravelHistoryReview = document.getElementById('travel-history')
containerTravelHistoryReview.innerHTML = containerTravelHistory.join('')}