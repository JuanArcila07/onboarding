import '../../styles/ui/modal.css';

function Modal({ open, onClose, children }) {
  if (!open) return null;
  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        {children}
        <button className="modal-close" onClick={onClose}>Terminar</button>
      </div>
    </div>
  );
}

export default Modal;