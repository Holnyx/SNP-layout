export const buttonInfo =
    ` <a href="javascript:void(0);" class='button-info'>Подробнее
    <svg alt="Arrow" width="24" height="26" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.7004 12.2833L16.1535 5.79682C15.7541 5.40106 15.1063 5.40106 14.7068 5.79682C14.3073 6.19266 14.3073 6.83433 14.7068 7.23017L19.5074 11.9865H2.02294C1.45803 11.9865 1 12.4403 1 13C1 13.5596 1.45803 14.0135 2.02294 14.0135H19.5074L14.707 18.7698C14.3075 19.1656 14.3075 19.8073 14.707 20.2032C14.9067 20.4009 15.1686 20.5 15.4304 20.5C15.6921 20.5 15.9539 20.4009 16.1537 20.2032L22.7004 13.7167C23.0999 13.3208 23.0999 12.6792 22.7004 12.2833Z" fill="#fff"/>
    </svg>    
</a>`

export const sizeButton = () => {
    const button = document.querySelectorAll('.button-info')
    button.forEach(button => {
        button.classList.toggle('button-low-viewport', window.innerWidth <= 1023)
    })
}