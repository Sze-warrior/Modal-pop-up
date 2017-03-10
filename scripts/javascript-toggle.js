var btnToggle = document.querySelector('div.btn-modal');
var escapeModal = document.querySelector('p.escape');
var btnEscapeModal = document.querySelector('.btn-escape');

btnToggle.addEventListener('click', modalPopUp, false);
escapeModal.addEventListener('click', modalPopHide, false);
btnEscapeModal.addEventListener('click', modalPopHide, false);



function modalPopUp(e){
	var modalContainer = document.querySelector('div.modal-container');
	var modalWrapper = document.querySelector('div.modal-wrapper');
	
	modalContainer.classList.add('visible');
	modalWrapper.classList.add('visible');
}

function modalPopHide(e){
	var modalContainer = document.querySelector('div.modal-container');
	var modalWrapper = document.querySelector('div.modal-wrapper');

	modalContainer.classList.remove('visible');
	modalWrapper.classList.remove('visible');	
}