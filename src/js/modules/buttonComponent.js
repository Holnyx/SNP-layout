export const buttonInfo =
    ` <a href="javascript:void(0);" class='button-info'>Подробнее
<img src="img/arrow-btn.svg" alt="arrow" />
</a>`

export const sizeButton = () => {
    const button = document.querySelectorAll('.button-info')
    button.forEach(button => {
        button.classList.toggle('button-low-viewport', window.innerWidth <= 1023)
    })
}