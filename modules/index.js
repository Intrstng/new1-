document.onload = function(){

const content = document.querySelector('#content');
const btn = document.querySelector('.btn');
const counter = {
    btn:0
}

btn.addEventListener('click', function(){
    const txt = document.createElement('p')
    counter.btn++
    txt.innerHTML =
    Вы нажали кнопку ${counter.btn} раз
    content.appendChild(txt)
});