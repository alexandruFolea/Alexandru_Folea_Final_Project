// const hamburgerBtn = document.querySelector('.mobile-nav');
const hamburgerBtn = document.querySelector('.fa-bars');
const headerTag = document.querySelector('header');
hamburgerBtn.addEventListener('click', function () {
	headerTag.classList.toggle('show');
	hamburgerBtn.classList.toggle('close');
});
