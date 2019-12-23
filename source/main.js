'use strict'


var newList = document.querySelector('.new__list');
var buttonForward = document.querySelector('.new__button-left');
var buttonBack = document.querySelector('.new__button-right');
var position = 0;

buttonBack.onclick = function() {
    position -= 200;
    newList.style.marginLeft = position + 'px';
}
