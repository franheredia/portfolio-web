import { useEffect, useId, useRef, type ReactNode } from "react";
import { X } from "lucide-react";
import "./Modal.scss";

type ModalProps = {
  titleId: string;
  onClose: () => void;
  children: ReactNode;
  wide?: boolean;
};

export function Modal({ titleId, onClose, children, wide = false }: ModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const labelId = useId();

  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
      previouslyFocused?.focus();
    };
  }, [onClose]);

  return (
    <div className="modal" role="presentation">
      <button
        type="button"
        className="modal__backdrop"
        aria-label="Cerrar modal"
        onClick={onClose}
      />
      <div
        className={`modal__panel${wide ? " modal__panel--wide" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={labelId}
      >
        <button
          ref={closeButtonRef}
          type="button"
          className="modal__close"
          aria-label="Cerrar"
          onClick={onClose}
        >
          <X size={20} aria-hidden />
        </button>
        <div className="modal__body" id={labelId}>
          {children}
        </div>
      </div>
    </div>
  );
}
