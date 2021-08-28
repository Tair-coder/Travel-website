const category = document.querySelectorAll('.category');
const section = document.querySelector('.section');
category.forEach((item,i) =>{
    item.addEventListener('mouseover',()=> {
        deleteClass();
        item.classList.add('active');
    })
    
    
})

function deleteClass(){
    category.forEach(categoryes => {
        categoryes.classList.remove('active');
    })

}
const cardReview = document.querySelectorAll('.cardReview');
const up = document.querySelector('.up');
const down = document.querySelector('.down');

cardReview.forEach((item,i) => {
    firstElement(0);
 up.addEventListener('click',()=> {
    firstElement(0);
 })
 down.addEventListener('click',()=> {
    secondElement(1);
 })
})

function firstElement(i) {
    cardReview[i].classList.add('cardActive');
    cardReview[1].classList.remove('cardActive');
    cardReview[1].querySelector('.review_p').style.opacity = '0';
    cardReview[i].querySelector('.review_p').style.opacity = '';
    up.src='/img/up.svg';
    down.src = '/img/downActive.svg';
}

function secondElement(i) {
    up.src='/img/upActive.svg';
    down.src = '/img/down.svg';
    cardReview[0].classList.remove('cardActive');
    cardReview[0].querySelector('.review_p').style.opacity = '0';
    cardReview[i].classList.add('cardActive');
    cardReview[i].querySelector('.review_p').style.opacity = '';

}
