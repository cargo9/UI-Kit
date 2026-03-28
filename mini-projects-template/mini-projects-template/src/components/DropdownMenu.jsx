import React from "react"; 
import styled from "styled-components";

const Wrap = styled.div`
width: 100%;
border: 1px solid #969799;
border-radius: 12px;
background: #ffffff;
padding: 14px;
`;

const Select = styled.select`
width: 100%;
border: 1px solid #969799;
border-radius: 10px;
padding: 10px 12px;
font-size: 14px;
`;

const Value = styled.p`
margin: 10px 0 0;
color: #333;
`;

class DropdownMenu extends React.Component {
  state = { selected: this.props.options[0] };

  handleChange = (event) => {
    this.setState({ selected: event.target.value });
  };

  static defaultProps = {
    options: ["Профіль", "Налаштування", "Вийти", "Допомога", "Зворотній зв'язок", "Про нас", "Контакти", "Блог", "Кар'єра", "Партнерство"],

  };

  render() {
    const { options } = this.props;
    const { selected } = this.state;

    return (
      <Wrap>
        <Select value={selected} onChange={this.handleChange}>
          {options.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </Select>
        <Value>Обрано: {selected}</Value>
      </Wrap>
    );
  }
}

export default DropdownMenu;