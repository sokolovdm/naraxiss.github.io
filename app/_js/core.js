document.addEventListener("DOMContentLoaded", ready);

function ready(){
    if (window.innerWidth >= 1152){
        document.getElementById('main').style.marginBottom = document.getElementById('footer').getBoundingClientRect().height  + 'px';
    }
}