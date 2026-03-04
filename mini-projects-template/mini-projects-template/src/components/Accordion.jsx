import React from "react";
import styled from "styled-components";

// Зовнішній контейнер акордеона
const Wrap = styled.div`
  width: 100%;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
  background: #ffffff;
  overflow: hidden;
`;

// Кнопка-заголовок: натискання відкриває/закриває контент
const Header = styled.button`
  width: 100%;
  padding: 14px 16px;
  border: none;
  background: #f8fafc;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 600;
  cursor: pointer;
`;

// Іконка стрілки, яка обертається залежно від стану
const Icon = styled.span`
  transition: transform 0.2s ease;
  transform: rotate(${(props) => (props.$open ? "180deg" : "0deg")});
`;

// Контентна область з плавним відкриттям/закриттям
const Content = styled.div`
  max-height: ${(props) => (props.$open ? "180px" : "0")};
  opacity: ${(props) => (props.$open ? 1 : 0)};
  padding: ${(props) => (props.$open ? "14px 16px" : "0 16px")};
  transition: all 0.2s ease;
`;

class Accordion extends React.Component {
  // Локальний стан: чи відкритий акордеон
  state = { isOpen: false };

  // this.setState перемикає відкриття/закриття
  toggleAccordion = () => {
    this.setState((prevState) => ({ isOpen: !prevState.isOpen }));
  };

  // defaultProps задає резервні значення
  static defaultProps = {
    title: "Деталі секції",
    content: "Це вміст акордеону. Тут може бути опис або додаткова інформація.",

  };

  // Рендеримо заголовок та вміст, передаючи стан у стилізовані компоненти
  render() {
    const { title, content } = this.props;
    const { isOpen } = this.state;

    return (
      <Wrap>
        <Header onClick={this.toggleAccordion}>
          {title}
          <Icon $open={isOpen}>⌄</Icon>
        </Header>
        <Content $open={isOpen}>{content}</Content>
      </Wrap>
    );
  }
}

export default Accordion;
