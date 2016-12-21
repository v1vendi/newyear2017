document.addEventListener('DOMContentLoaded', initTabs);

function initTabs(){
    var balls = document.querySelectorAll('header li');

    Array.from(balls).forEach(attachEvents);
}

function attachEvents(element){
    element.addEventListener('click', handleClick);
}

function handleClick(){
    var elementClass = this.className;

    var listElements = document.querySelectorAll('li');
    Array.from(listElements).forEach(_=>{
        _.classList.toggle('active', _.classList.contains(elementClass));
    });
}