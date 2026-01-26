import { useEffect } from 'react';
import '../../styles/ui/toast.css';

function Toast({ message, type, onClose, duration = 4000 }) {
  useEffect(() => {
    if (!message) return;

    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [message, onClose, duration]);

  if (!message) return null;

  return (
    <div className={`toast ${type}`}>
      <span>
        {type === 'success' ? '✅ Éxito:' : '⚠️ Error:'} {message}
      </span>
      <button className="toast__close" onClick={onClose} aria-label="Cerrar notificación">
        ×
      </button>
    </div>
  );
}

export default Toast;
