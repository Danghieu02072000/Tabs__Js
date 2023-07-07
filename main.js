const listItem = document.querySelectorAll('.tab__item');
const listContent = document.querySelectorAll('.tab__content');
listItem.forEach(function(item, index){
    var contentActive = listContent[index];
    item.onclick = function() {
        document.querySelector('.tab__item.active').classList.remove('active')
        document.querySelector('.tab__content.active').classList.remove('active')
        this.classList.add('active');
        contentActive.classList.add('active')
    }
})