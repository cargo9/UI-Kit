import React from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
width: 100%;
border-radius: 12px;
border: 1px solid #969799;
background: #ffffff;
padding: 16px;
display: flex;
justify-content: space-between;
align-items: center;
`;

const Text = styled.span`
color: #333;
`;

const Button = styled.button`
border: none;
border-radius: 12px;
padding: 8px 12px;
background: #0b5daf;
color: #fff; 
cursor: pointer;
`;

class BackToTop extends React.Component {
  static defaultProps = {
    lable: "Назад вгору",
    description: "Натисніть, щоб повернутися на початок сторінки",
  };

  scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  render() {
    const { lable, description } = this.props;

    return (
      <Wrap>
        <Text>{description}</Text>
        <Button onClick={this.scrollToTop}>{lable}</Button>
      </Wrap>
    );
  }
}

export default BackToTop;