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

function changeTab(id){
    let tabs = ['tab-1', 'tab-2', 'tab-3'];
    index = tabs.findIndex(t => t === id);
    tabs.splice(index, 1);
    tab = document.getElementById(id);

    tabs.forEach(el => {
        if(el !== id){
            let notActiveTab = document.getElementById(el);
            let notActiveContent = document.getElementById(el+'-content');
            notActiveTab.classList.remove('active-tab');
            if( !notActiveContent.classList.contains('hidden')){
                notActiveContent.classList.add('hidden');            
            }
        }
    });

    tab.classList.add('active-tab');
    document.getElementById(id + '-content').classList.remove('hidden');
}