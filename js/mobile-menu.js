(() => {
	const refs2 = {
	  openModalBtn: document.querySelector('[data-mobile-menu-open]'),
	  closeModalBtn: document.querySelector('[data-mobile-menu-close]'),
	  modal: document.querySelector('[data-mobile-menu-modal]'),
	};
  
	refs2.openModalBtn.addEventListener('click', toggleModal);
	refs2.closeModalBtn.addEventListener('click', toggleModal);
  
	function toggleModal() {
	  refs2.modal.classList.toggle('mobile-menu-is-hidden');
	}
  })();
