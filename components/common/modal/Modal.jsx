import React from "react";
import { Modal as ModalMain } from "@material-ui/core";
import styles from "./styles.module.scss";

const Modal = ({ children, open, onClose }) => {
  return (
    <ModalMain open={open} onClose={onClose}>
      <div className={styles.containerModal}>{children}</div>
    </ModalMain>
  );
};

export default Modal;
