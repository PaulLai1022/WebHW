document.addEventListener('click',e => {
    const isDropdownButton = e.target.matches('[ data-dropdown-button]')
    if(!isDropdownButton && e.target.cloest('[data-dropdown]')!=null)return

    let currentDropdown

    if(isDropdownButton){
        currentDropdown = e.target.closes('[data-dropdown]')
        currentDropdown.classList.toggle('active')
    }
})

