import React from "react"; 
import styled from "styled-components";

const Wrap = styled.div`
width: 100%;
border-radius: 12px;
border: 1px solid #969799;
background: #ffffff;
overflow: hidden;
  `;

  const Header = styled.div`
  display: flex;
  background-color: #f8fafc;
  `;

  const TabButton = styled.button`
  flex: 1;
  border: none;
  padding: 12px;
  cursor: pointer;
  background-color: ${(props) => (props.$active ? "#e2e8f0" : "transparent")};
  font-weight: 600;
  `;

  const Content = styled.div`
  padding: 14px 16px;
  `;

class TabSwitch extends React.Component {
  state = { activeIndex: 0 };

  setActiveIndex = (index) => {
    this.setState({ activeIndex: index });
  };

  static defaultProps = {
    tabs: [
      { title: "Огляд", content: "Смак, який закохує з першого укусу! Ми готуємо соковиті бургери, хрустку картоплю та авторські соуси щодня зі свіжих інгредієнтів. Швидко, смачно та з душею — саме так має виглядати ідеальний фастфуд. 👉 Замовляй онлайн або заходь у гості — твій бургер вже чекає!" },
      { title: "Деталі", content: "100% свіже м’ясо без заморозки, булочки власної випічки, натуральні сири та соуси, приготування 5–10 хвилин і швидка доставка по місту." },
      { title: "Відгуки", content: ":💬 “Найсоковитіший бургер у місті!” ; 💬 “Картопля фрі — просто вау 🔥” ; 💬 “Доставка швидка, їжа гаряча — 10/10”" },
    ],
  };

  render() {
    const { tabs } = this.props;
    const { activeIndex } = this.state;

    return (
      <Wrap>
        <Header>  
          {tabs.map((tab, index) => (
            <TabButton
              key={tab.title}
              $active={index === activeIndex}
              onClick={() => this.setActiveIndex(index)}
            >
              {tab.title}
            </TabButton>
          ))}
        </Header>
        <Content>{tabs[activeIndex].content}</Content>
      </Wrap>
    );
  }
}

export default TabSwitch;