function burgerMenu(){
    let headerOpen = document.getElementById('header-burger-open');
    if(headerOpen.classList.contains('hidden')){
        headerOpen.classList.remove('hidden');

    } else {
        headerOpen.classList.add('hidden');
    }
}

function closeHamburger(){
    let headerOpen = document.getElementById('header-burger-open');
    headerOpen.classList.add('hidden');
}

function changeIcon(id){
    let img = document.getElementById(id);
    let content = document.getElementById(id + '-ans');
    
    if( content.classList.contains('hidden') ){

        content.classList.remove('hidden');
        img.classList.remove('transform')
        img.classList.remove('rotate-180')
    
    } else {
        content.classList.add('hidden');
        img.classList.add('transform')
        img.classList.add('rotate-180')
    }
}