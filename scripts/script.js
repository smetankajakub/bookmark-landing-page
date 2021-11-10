function burgerMenu(){
    let headerOpen = document.getElementById('header-burger-open');
    let headerClose = document.getElementById('header-burger-closed');
    let topHeader = document.getElementById('top-header');
    if(headerOpen.classList.contains('hidden')){
        headerOpen.classList.remove('hidden');
        // headerClose.classList.add('hidden');

    } else {
        // headerClose.classList.remove('hidden');
        headerOpen.classList.add('hidden');
    }
    console.log('caaaaaal')
}