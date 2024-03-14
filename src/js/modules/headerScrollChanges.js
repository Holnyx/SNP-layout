export const scrollHeader = () => {
    const header = document.getElementById('header')
    const headerClasses = Array.from(header.classList)
    const index = headerClasses.indexOf('show')
    window.scrollY >= 450 ? !headerClasses.includes('show') && headerClasses.push('show') : index !== -1 && headerClasses.splice(index, 1)
    header.className = headerClasses.join(' ')
}