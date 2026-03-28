import React from "react"; 
import styled from "styled-components";

const Wrap = styled.div`
width: 100%;
border-radius: 12px;
border: 1px solid #969799;
background: #ffffff;
padding: 16px;
`;

const Pow = styled.div`
display: flex;
gap: 8px;
`;

const Imput = styled.input`
flex: 1;
border: 1px solid #969799;
border-radius: 10px;
padding: 10px 12px;
`;

const ToggleButton = styled.button`
border: none;
border-radius: 10px;
padding: 0px 12px;
background: #0c0c0c;
color: #fff;
cursor: pointer;
`;

class PasswordToggler extends React.Component {
  state = { isShown: false,value: "" };

  toggleVisibility = () => {
    this.setState((prevState) => ({ isShown: !prevState.isShown }));
  };

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };

  static defaultProps = {
    placeholder: "Введіть пароль",
  };

  render() {
    const { placeholder } = this.props;
    const { isShown, value } = this.state; 

    return (
      <Wrap>
        <Pow>
          <Imput
            type={isShown ? "text" : "password"}
            placeholder={placeholder}
            value={value}
            onChange={this.handleChange}
          />
          <ToggleButton onClick={this.toggleVisibility}>
            {isShown ? "Сховати" : "Показати"}
          </ToggleButton>
        </Pow>
      </Wrap>
    );
  }
}

export default PasswordToggler;