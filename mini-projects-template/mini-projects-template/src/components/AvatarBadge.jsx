import React from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
width: 100%;
border-radius: 12px;
border: 1px solid #969799;
background: #ffffff;
padding: 16px;
display: flex;
align-items: center;
gap: 12px;
`;

const Avatar = styled.div`
width: 50px;
height: 50px;
border-radius: 999px;
background: #0b5daf;
color: #fff;
display: flex;
justify-content: center;
align-items: center;
font-weight: 600;
font-size: 18px;
`;

const Info = styled.div`
display: grid;
gap: 4px;
`;

const Name = styled.span`
font-weight: 600;
`;

const Status = styled.span`
color: ${(props) => (props.$online ? "#34d399" : "#969799")};
font-size: 14px;
`;

class AvatarBadge extends React.Component {
  state = { online: this.props.defaultOnline };

  toggleStatus = () => {
    this.setState((prevState) => ({ online: !prevState.online }));
  };

  static defaultProps = {
    name: "Ім'я користувача",
    defaultOnline: true,

  };

  render() {
    const { name } = this.props;
    const { online } = this.state;
    
    return (
      <Wrap onClick={this.toggleStatus}>
        <Avatar>{name.charAt(0).toUpperCase()}</Avatar>
        <Info>
          <Name>{name}</Name>
          <Status $online={online}>
            {online ? "Online" : "Offline"}
          </Status>
        </Info>
      </Wrap>
    );
  }
}
export default AvatarBadge;
