let debounce = function (func, wait, immediate) {
	let timeout;
	return function() {
		let context = this, args = arguments;
		let later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		let callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};
let siteNavLink = document.querySelectorAll('.site_item-link')
let siteNavElement = document.querySelector('.site_nav');
let siteNavLinkBorder

//sticky

let onWindowScroll =  function () {
	if (window.scrollY > 600) {
		document.body.style.marginTop = '80px';
		siteNavElement.classList.add('sitenav--fixed')
		for(let i = 0; i < siteNavLink.length; i++){
			siteNavLink[i].classList.add('site_item--link')
		}
	}else{
		siteNavElement.classList.remove('sitenav--fixed')
		document.body.style.marginTop = '0';
		for(let i = 0; i < siteNavLink.length; i++){
			siteNavLink[i].classList.remove('site_item--link')
		}
	}
}
window.addEventListener('scroll',debounce(onWindowScroll, 100));

var ESC_KEYCODE = 27;
var elModal = document.querySelector('.modal');
var elButtonOpenModal = document.querySelector('.resume');
var elModalDialog = elModal.querySelector('.modal-dialog');
var elCloseButton = elModal.querySelector('.close-button');
	
var onModalClick = function (evt) {
	if(evt.target.matches('.modal')){
		closeModal();
	}
};

var openModal = function() {
	elModal.classList.add('modal--open');

	elModal.addEventListener('click',onModalClick);
	elCloseButton.addEventListener('click', onCloseModalClick);
	document.addEventListener('keyup',onModalDocumentKeyCode);
};
var closeModal = function() {
	elModal.classList.remove('modal--open');

	elCloseButton.removeEventListener('click', onCloseModalClick);
	elModal.remoteEventListener('click',onModalClick);
	document.remoteEventListener('keyup',onModalDocumentKeyCode);
}

var onOpenModalButtonClick = function () {
	openModal();
}
var onCloseModalClick = function () {
	closeModal();
}
var onModalDocumentKeyCode = function(evt) {
	if(evt.keyCode === ESC_KEYCODE){
		closeModal();
	};
}

elButtonOpenModal.addEventListener('click', onOpenModalButtonClick);