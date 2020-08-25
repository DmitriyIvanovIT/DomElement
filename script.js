'use strict';

const body = document.querySelector('body');

const DomElement = function (selector, height, width, bg, fontSize) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
};

DomElement.prototype.createBlock = function () {
    let elem,
        select = this.selector.slice(1);
    if (this.selector[0] === '#') {
        elem = document.createElement('p');
        elem.id = select;
    } else if (this.selector[0] === '.') {
        elem = document.createElement('div');
        elem.classList.add(select);
    }

    elem.style.height = this.height + 'px';
    elem.style.width = this.width + 'px';
    elem.style.backgroundColor = this.bg;
    elem.style.fontSize = this.fontSize + 'px';
    elem.textContent = 'Привет';
    body.append(elem);
};

let obj = new DomElement('.block', 100, 200, '#4285f4', 20);

obj.createBlock();