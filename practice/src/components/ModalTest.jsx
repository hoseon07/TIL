import React, { useState } from "react";
import Modal from "react-modal"
import styled from "styled-components";

const Modaltest = () => {
  const [ModalIsOpen, setModalIsOpen] = useState();

  const openModal = () => {
    setModalIsOpen(true)
  }

  const closeModal = () => {
    setModalIsOpen(false)
  }

  return (
    <>
      <button onClick={openModal}>직접한 것</button>
      <Modal isOpen={ModalIsOpen} onRequestClose={closeModal}>
        <div>안녕핫에ㅛ</div>
        <img src="logo192.png" alt="" />
        <button onClick={closeModal}>바이염</button>
      </Modal>
    </>
  )
}


export default Modaltest