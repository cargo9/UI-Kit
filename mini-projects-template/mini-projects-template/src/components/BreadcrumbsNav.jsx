import React from 'react';
import styled from 'styled-components';

const Wrap = styled.nav`
width: 100%;
border-radius: 12px;
border: 1px solid #969799;
background: #ffffff;
padding: 16px;
color: #333;
font-size: 14px;
`;

const Crumb = styled.span`
color: ${(props) => (props.$active ? "#969799" : "#494949")};
font-weight: ${(props) => (props.$active ? "600" : "400")};
`;

class BreadcrumbsNav extends React.Component {
  static defaultProps = {
    items: ["Головна", "Категорії", "Продукт", "Огляд"],
  };

  render() {
    const { items } = this.props;

    return (
      <Wrap>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <React.Fragment key={item}>
              <Crumb $active={!isLast}>{item}</Crumb>
              {!isLast && <span> / </span>}
            </React.Fragment>
          );
        })}
      </Wrap>
    );
  }
}

export default BreadcrumbsNav;  
