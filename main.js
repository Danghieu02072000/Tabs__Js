const listItem = document.querySelectorAll('.tab__item');
const listContent = document.querySelectorAll('.tab__content');
const line = document.querySelector('.line');
var activeItem = document.querySelector('.tab__item.active');
line.style.left = activeItem.offsetLeft + 'px';
line.style.width = activeItem.offsetWidth + 'px';
listItem.forEach(function(item, index){
    var contentActive = listContent[index];
    item.onclick = function() {

        line.style.left = this.offsetLeft + 'px';
        line.style.width = this.offsetWidth + 'px';

        document.querySelector('.tab__item.active').classList.remove('active')
        document.querySelector('.tab__content.active').classList.remove('active')

        this.classList.add('active');
        contentActive.classList.add('active')
    }
})