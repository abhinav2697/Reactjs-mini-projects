import React,{useState} from 'react';
import CustomModal from "./CustomModal";
import "./modal.css"

const Modal = () => {
    const [showModal, setShowModal] = useState(false);

    function handleToggleModalPopup() {
        setShowModal(!showModal);
    }
    function onClose() {
        setShowModal(false);
    }

  return (
      <div>
          <button onClick={handleToggleModalPopup}>Open Modal Popup</button>
          {
              showModal && (
                  <Modal 
                      id={"custom-id"}
                      header={<h1>Customized Header</h1>}
                      footer={<h1>Customized Footer</h1>}
                      onClose={onClose}
                      body={<div>Customized body</div>}
                  />
              )
          }
    </div>
  )
}

export default Modal