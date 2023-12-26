import React, {useState} from "react";
import Modal from "react-modal"

const ModalExample = () => {
  const [modalIsOpen, setModalIsOpen] = useState()

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <div>
        <button onClick={openModal}>모달 열기</button>
        <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
          <h2>모달 제목</h2>
          <p>모달 내용</p>
          <button onClick={closeModal}>닫기</button>
        </Modal>
      </div>
    </>
  )
}

export default ModalExample