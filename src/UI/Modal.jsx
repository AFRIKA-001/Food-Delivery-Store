import {createPortal} from 'react-dom';

function Modal() {
  return createPortal(
    <dialog>
      
    </dialog>
  ,document.getElementById("modal")
  );
}

export default Modal
