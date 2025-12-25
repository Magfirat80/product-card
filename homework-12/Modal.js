export class Modal {
  constructor(modalId, buttonId, shouldCloseOnOverlay) {
    this.modal = document.getElementById(modalId);
    this.overlay = document.getElementById('overlay');
    this.#initOpen(buttonId);
    this.shouldCloseOnOverlay = shouldCloseOnOverlay;
    this.onClickClose = () => {
      this.close();
    }
  }

  open() {
    if (this.isOpen()) {
      return;
    }

    this.modal.classList.add('modal-showed');
    this.overlay.classList.add('overlay-showed');
    this.#initClose(this.shouldCloseOnOverlay);
  }

  close() {
    this.modal.classList.remove('modal-showed');
    this.overlay.classList.remove('overlay-showed');
    
    if (this.shouldCloseOnOverlay) {
      this.overlay.removeEventListener('click', this.onClickClose);
    }
    
    this.closeButton.removeEventListener('click', this.onClickClose);
  }

  isOpen() {
    return this.modal.classList.contains('modal-showed');
  }

  #initOpen(buttonId) {
    const button = document.getElementById(buttonId);
    button.addEventListener('click', () => {
      this.open();
    })
  }

  #initClose() {
    this.closeButton = this.modal.querySelector('#modal-close-button');
    this.closeButton.addEventListener('click', this.onClickClose);

    if (this.shouldCloseOnOverlay) {
      this.overlay.addEventListener('click', this.onClickClose);
    }
  }
}