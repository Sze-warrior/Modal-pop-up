var btnToggle = document.querySelector('div.btn-modal');
var escapeModal = document.querySelectorAll('.btn-escape');
var modalContainer = document.querySelector('div.modal-container');
var modalWrapper = document.querySelector('div.modal-wrapper');

function modalPopUp(e){
	modalContainer.classList.add('visible');
	modalWrapper.classList.add('visible');
}

function modalHide(e){
	modalContainer.classList.remove('visible');
	modalWrapper.classList.remove('visible');	
}

btnToggle.addEventListener('click', modalPopUp, false);

for(var i = 0; i < escapeModal.length; i++){
	escapeModal[i].addEventListener('click', modalHide, false);
};

