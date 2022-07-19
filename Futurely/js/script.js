'use strict';

// Sidebar Nav
const openNav = document.querySelector('.toggle-bar');
const mobileMenu = document.querySelector('.fut-mobile-nav');
const closeNav = document.querySelector('.close-nav');

openNav.addEventListener('click', function(){
	mobileMenu.classList.add('fut-show-nav');
});
closeNav.addEventListener('click', function(){
	mobileMenu.classList.remove('fut-show-nav');
});