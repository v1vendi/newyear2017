document.addEventListener('DOMContentLoaded', initTabs);

function initTabs(){
    var balls = document.querySelectorAll('header li');

    Array.from(balls).forEach(attachEvents);
}

function attachEvents(element){
    if(element.classList.contains('red')){
        return;
    }
    element.addEventListener('click', handleClick);
}

function handleClick(){
    document.getElementById('greetings').classList.add('active');
    var elementClass = this.className;

    var listElements = document.querySelectorAll('li');
    Array.from(listElements).forEach(_=>{
        _.classList.toggle('active', _.classList.contains(elementClass));
    });
}