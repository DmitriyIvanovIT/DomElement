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
    elem.style.display = 'flex';
    elem.style.alignItems = 'center';
    elem.style.justifyContent = 'center';
    elem.style.position ='absolute';
    elem.textContent = 'Привет';

    body.append(elem);
};
DomElement.prototype.drive = function() {
    let elem = document.querySelector(this.selector),
    left = 0, up = 0;

    body.addEventListener('keydown', function(event) {
        if (event.code === 'ArrowRight') {
            left += 10;
            elem.style.left = left + 'px'; 
        } else if (event.code === 'ArrowLeft') {
            left -= 10;
            elem.style.left = left + 'px'; 
        } else if (event.code === 'ArrowDown') {
            up += 10;
            elem.style.top = up + 'px';
        } else if (event.code === 'ArrowUp') {
            up -= 10;
            elem.style.top = up + 'px';
        }
    });
}

let obj = new DomElement('.block', 100, 200, '#4285f4', 20);

document.addEventListener('DOMContentLoaded', function() {
    obj.createBlock();
    obj.drive();
});
