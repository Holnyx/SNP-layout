import { items } from './state.js'
import { buttonInfo } from './buttonComponent.js'

const journey = items.map(el =>
  `<div class='travel-card travel-card--hover' id='journey' style="background-image:${el.background}">
        <div class='travel-card__content'>
            <h3 class='travel-card__title'>${el.title}</h3>
            <span class='travel-card__subtitle'>${el.value}</span>
        </div>
       ${buttonInfo}
    </div>
  `)
export const journeyBox = () => {
  const container = document.getElementById('journey')
  container.innerHTML = journey.join('')
}