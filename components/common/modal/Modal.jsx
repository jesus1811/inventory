import React from "react";
import { Modal as ModalMain } from "@material-ui/core";
import styles from "./styles.module.scss";
import Title from "../title/Title.common";
import Card from "../card/Card.common";

const Modal = ({ children, open, onClose, title, message }) => {
  return (
    <ModalMain open={open} onClose={onClose}>
      <div className={styles.containerModal}>
        <article className={styles.containerTitleModal}>
          <Title>{title}</Title>
        </article>
        <Card center>
          <div className={styles.containerInput}>
            {children}
            {message?.isActive && <p>{message?.message}</p>}
          </div>
        </Card>
      </div>
    </ModalMain>
  );
};

export default Modal;
