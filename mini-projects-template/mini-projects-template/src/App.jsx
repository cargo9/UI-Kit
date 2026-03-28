import React from "react";
import styled from "styled-components";
import  Accordion  from "./components/Accordion.jsx";
import TabSwitch from "./components/TabSwitch.jsx";
import DropdownMenu from "./components/DropdownMenu.jsx";
import ColorPicker from "./components/ColorPicker.jsx";
import ModalCard from "./components/ModalCard.jsx";
import PasswordToggler from "./components/PasswordToggler.jsx";

// Загальна обгортка сторінки
const Page = styled.main`
  min-height: 100vh;
  padding: 24px;
`;

// Головний заголовок сторінки
const Title = styled.h1`
  margin: 0 0 18px;
  font-size: 28px;
`;

// Секція для групування компонентів
const Section = styled.section`
  margin-top: 18px;
`;

// Заголовок окремої секції
const SectionTitle = styled.h2`
  margin: 0 0 12px;
  font-size: 20px;
`;

// Сітка для адаптивного розташування карток
const Grid = styled.section`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin: auto;
  width: 30vw;
  /* grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); */
`;



// Комірка сітки для одного UI-елемента
const Cell = styled.div`
  display: flex;
  /* flex-direction: column; */
  align-items: stretch;
`;

class App extends React.Component {
  // Відмальовуємо сторінку з секцією базових компонентів
  render() {
    const accordionData = [
      { id: 1, title: "Чи є веган меню?", content: "Ні, у нас немає веган меню(." },
      { id: 2, title: "Які є варіанти сніданків?", content: "У нас є сніданки з молочними продуктами, які можна замовити окремо." },
      { id: 3, title: "Чи можна замовити десерти?", content: "Так, у нас є десерти, які можна замовити окремо." },
      { id: 4, title: "Чи є у вас безглютенові страви?", content: "Ні, у нас немає безглютенових страв." },

    ];
    return (
      <Page>
        <Title>React Class Components UI-Kit (UA)</Title>
        <Section>
          <SectionTitle>Базові 10</SectionTitle>
          <Grid>
            {/* <Cell>
            </Cell> */}
            {accordionData.map(({ id, title, content }) => (
              <Cell key={id}>
                <Accordion title={title} content={content} />
               
              </Cell>
              
            ))}
          </Grid>
          <Grid>
            <TabSwitch />
          </Grid>
          <Grid>
            <DropdownMenu />
          </Grid>
          <Grid>
            <ColorPicker />
          </Grid>
          <Grid>
            <ModalCard />
          </Grid>
          <Grid>
            <PasswordToggler />
          </Grid>
        </Section>
      </Page>
    );
  }
}

export default App;
