const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const size = carouselImages[0].clientWidth;

let dynamicHeading = document.getElementById('dynamicHeading');

const currentYear = document.getElementById('currYear');
const d = new Date();
let year = d.getFullYear();
currentYear.textContent = year;

const weekNumber = document.getElementById('weekNumber');
let currentDate = new Date();
let oneJan = new Date(currentDate.getFullYear(),0,1);
let numberOfDays = Math.floor((currentDate - oneJan) / (24 * 60 * 60 * 1000));
let result = Math.ceil(( currentDate.getDay() + 1 + numberOfDays) / 7);
weekNumber.textContent = result;

let counter = 1;

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

nextBtn.addEventListener('click', function() {
    if (counter >= carouselImages.length -1) return;
    carouselSlide.style.transition = 'transform 0.4s ease-in-out';
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
})

prevBtn.addEventListener('click', function() {
    if (counter <= 0) return;
    carouselSlide.style.transition = 'transform 0.4s ease-in-out';
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
})

carouselSlide.addEventListener('transitionend', function() {
    let text;
    if (carouselImages[counter].id === 'lastClone') {
        carouselSlide.style.transition = 'none';
        counter = carouselImages.length -2;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    if (carouselImages[counter].id === 'firstClone') {
        carouselSlide.style.transition = 'none';
        counter = carouselImages.length - counter;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
})

function displayDynamicText() {
    let text;
    if (carouselImages[counter].id === 'shimizu' || carouselImages[counter].id === 'firstClone') {
        text = "inside yasuaki shimizu's innovative musical world";
    } else if (carouselImages[counter].id === 'kilokish') {
        text = 'kilo kish is an american gurl';
    } else if (carouselImages[counter].id === 'obongjayar') {
        text = 'have you heard abut obongjayar?';
    } else if (carouselImages[counter].id === 'tdj') {
        text = 'tdj shares new single `Addictive/Predictive`';
    } else if (carouselImages[counter].id === 'zsela' || carouselImages[counter].id === 'lastClone') {
        text = 'zsela is making her move';
    }
    dynamicHeading.textContent = text;
}

carouselSlide.addEventListener('transitionstart', displayDynamicText);
window.addEventListener('DOMContentLoaded', displayDynamicText);

let randomColor = Math.floor(Math.random()*16777215).toString(16);



