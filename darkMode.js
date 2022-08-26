let btn=document.querySelector('.theme_switch_btn'),
docElement=document.documentElement;
btn.addEventListener('click', e =>{
    let checkClass=btn.classList;
    if(checkClass.contains('dark_mode')){
     docElement.style.setProperty('--bodybgcolor', '#fff');
    docElement.style.setProperty('--textcolor', '#000'); 
    btn.classList.remove('dark_mode')
    }
    else{
    docElement.style.setProperty('--bodybgcolor', '#000');
    docElement.style.setProperty('--textcolor', '#fff'); 
    btn.classList.add('dark_mode')
    }
});

