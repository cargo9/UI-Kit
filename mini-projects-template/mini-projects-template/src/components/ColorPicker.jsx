import React from "react";
import styled from "styled-components";

const Wrap = styled.div`
width: 100%;
border-radius: 12px;
border: 1px solid #969799;
background: #ffffff;
padding: 16px;
`;

const Preview = styled.div`
height: 80px;
background-color: ${(props) => props.$color};
border: 1px solid rgba(0, 0, 0, 0.08);
margin-bottom: 12px;
`;

const Palette = styled.div`
display: flex;
gap: 8px;
`;  

const Swatch = styled.button`
width: 30px;
height: 30px;
border-radius: 999px;
border: ${(props) => (props.$active ? "2px solid #333" : "1px solid #969799")};
background-color: ${(props) => props.$color};
cursor: pointer;
`;

class ColorPicker extends React.Component {
  state = { activeColor: this.props.defaultColor };

  handlePick = (color) => {
    this.setState({ activeColor: color });
  };

  static defaultProps = {
    colors: ["#f87171", "#fbbf24", "#34d399", "#60a5fa", "#a78bfa"],
    defaultColor: "#f87171",
  };

  render() {
    const { colors } = this.props;
    const { activeColor } = this.state; 

    return (
      <Wrap>
        <Preview $color={activeColor} />
        <Palette>
          {colors.map((color) => (
            <Swatch
              key={color}
              $color={color}
              $active={activeColor === color}
              onClick={() => this.handlePick(color)}
            />
          ))}
        </Palette>
      </Wrap>
    );
  }
}

export default ColorPicker;