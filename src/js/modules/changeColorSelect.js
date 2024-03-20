export const changeColor = () => {
    const selectElement = document.getElementById('direction')
    const selectedIndex = selectElement.selectedIndex
    const selectedOption = selectElement.options[selectedIndex]
    !selectedOption.disabled && selectElement.style.setProperty('color', '#1B1F2B')
}
