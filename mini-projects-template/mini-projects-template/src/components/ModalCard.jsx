import React from "react";
import styled from "styled-components";

const Wrap = styled.div`
width: 100%;
`;

const Trigeger = styled.button`
border: none;
border-radius: 12px;
padding: 14px 16px;
cursor: pointer;
background-color: #0b5daf;
font-weight: 600;
`;

const Overlay = styled.div`
position: fixed;
inset: 0;
background: rgba(15, 23, 42, 0.45);
display: flex;
justify-content: center;
align-items: center;
padding: 16px;
`;

const Modal = styled.div`
width: min(100%,420px);
border-radius: 12px;
background: #ffffff;
border: 1px solid #969799;
padding: 16px;
`;

const Title = styled.h3`
margin: 0 0 8px;
`;

const Text = styled.p`
margin: 0 0 14px;
color: #333;
`;

const Close = styled.button`
border: none;
border-radius: 12px;
padding: 8px 12px;
background: #f0f0f0;
color: #333;
cursor: pointer;
`;

class ModalCard extends React.Component {
  state = { isOpen: false };

  openModal = () => {
    this.setState({ isOpen: true });
  };

  closeModal = () => {
    this.setState({ isOpen: false });
  };

  static defaultProps = {
   buttonLabel: "Відкрити модалку",
   title: "Підтвердіть дію ",
   message: "Це вміст модального вікна. Тут може бути будь-яка інформація або інтерфейсні елементи.",
  };

  render() {
    const { buttonLabel, title, message } = this.props;
    const { isOpen } = this.state; 

    return (
      <Wrap>
        <Trigeger onClick={this.openModal}>{buttonLabel}</Trigeger>
        {isOpen && (
          <Overlay onClick={this.closeModal}>
            <Modal onClick={(e) => e.stopPropagation()}> 
              <Title>{title}</Title>
              <Text>{message}</Text>
              <Close onClick={this.closeModal}>Закрити</Close>
            </Modal>
          </Overlay>
        )} 
      </Wrap>
    );
  }
}

export default ModalCard;
