export const clearForm = () => {
    const form = document.getElementById('form')
    form.elements['userName'].value = ''
    const defaultColorSelect = document.getElementById('direction')
    defaultColorSelect.selectedIndex = 0
    defaultColorSelect.style.setProperty('color', '')
    form.elements['email'].value = ''
    form.elements['phoneNumber'].value = ''
    form.elements['dateFrom'].value = ''
    form.elements['dateUntil'].value = ''
    document.getElementById('yes').checked = false
    document.getElementById('no').checked = false
    document.getElementById('confirm').checked = false
    document.getElementById('comment').value = ''
}