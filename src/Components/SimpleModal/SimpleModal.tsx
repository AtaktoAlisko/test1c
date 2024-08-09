import React, { ReactNode } from "react";
import Image from "next/image";
import "./SimpleModal.css";
import removeButton from "../../../public/removeButton.png";

interface SimpleModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export const SimpleModal: React.FC<SimpleModalProps> = ({
  isOpen,
  onClose,
  children,
}) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-wrapper">
        <div className="modal-content">
          <button className="close-button" onClick={onClose}>
            <Image src={removeButton} alt="close" width={30} height={30} />
          </button>
          {children}
        </div>
      </div>
    </div>
  );
};
