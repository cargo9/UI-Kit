import React from "react";
import styled from "styled-components";

const Wrap = styled.div`
width: 100%;
border-radius: 12px;
border: 1px solid #969799;
background: #ffffff;
padding: 16px;
display: grid;
gap: 12px;
`;

const Button = styled.button`
width: fit-content;
border: none;
border-radius: 12px;
padding: 8px 12px;
background: #000000;
color: #fff;
cursor: pointer;
`;

const Text = styled.p`
margin: 0;
color: #333;
`;

class LanguageSwitcher extends React.Component {
  state = { currentLang: this.props.defaultLang };

  toggleLanguage = () => { 
    this.setState((prevState) => ({
      currentLang: prevState.currentLang === "UA" ? "EN" : "UA",
    }));
  };

  static defaultProps = {
    defaultLang: "UA",
    translations: {
      UA: "Поточна мова: Українська",
      EN: "Current language: English",
    },
  };

  render() {
    const { translations } = this.props;
    const { currentLang } = this.state;

    return (
      <Wrap>
        <Button onClick={this.toggleLanguage}>
          Перемкнути мову {currentLang === "UA" ? "EN" : "UA"}
        </Button>
         <Text>{translations[currentLang]}</Text>
      </Wrap>
    );
  }
}

export default LanguageSwitcher;