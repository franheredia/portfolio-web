import {
  CHANNEL_LABELS,
  CONTACT,
  type ContactChannel,
} from "@/data/contact";
import { Modal } from "@/components/Modal/Modal";
import "./ConfirmDialog.scss";

type ConfirmDialogProps = {
  channel: ContactChannel;
  onConfirm: () => void;
  onCancel: () => void;
};

const TITLE_ID = "confirm-dialog-title";

export function ConfirmDialog({
  channel,
  onConfirm,
  onCancel,
}: ConfirmDialogProps) {
  const channelLabel = CHANNEL_LABELS[channel];
  const { display } = CONTACT[channel];

  return (
    <Modal titleId={TITLE_ID} onClose={onCancel}>
      <div className="confirm-dialog">
        <p className="confirm-dialog__channel">Contáctame a través de {channelLabel}</p>
        <p className="confirm-dialog__question">
          Al precionar "Continuar", serás redirigido a {channelLabel}
        </p>
        <h2 id={TITLE_ID} className="confirm-dialog__title">
          {display}
        </h2>
        <div className="confirm-dialog__actions">
          <button
            type="button"
            className="confirm-dialog__button confirm-dialog__button--secondary"
            onClick={onCancel}
          >
            Cancelar
          </button>
          <button
            type="button"
            className="confirm-dialog__button confirm-dialog__button--primary"
            onClick={onConfirm}
          >
            Continuar
          </button>
        </div>
      </div>
    </Modal>
  );
}
