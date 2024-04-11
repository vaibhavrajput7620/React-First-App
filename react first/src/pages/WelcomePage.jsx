import Card from "../components/Card";
import Navbar from "../components/Navbar";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 3%;
  display: flex;
  justify-content: space-evenly;
`;

const WelcomePage = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Card
          imageSrc="https://cdn-icons-png.freepik.com/512/8295/8295212.png"
          title="Reminders"
          description="a written or spoken message that reminds someone to do something: If he forgot to pay his rent, his landlady would send him a reminderMum sent me off with a final reminder to be back before 11 p.m."
          button1Text="Create New"
          button2Text="View All"
          link1="/welcomepage/reminder"
          link2="/welcomepage/viewreminder"
        />
        <Card
          imageSrc="https://cdn1.iconfinder.com/data/icons/productivity-aesthetics-vol-2/256/To_Do_List-512.png"
          title="Todo List"
          description="It's a list of tasks you need to complete or things you want to do. Most typically, they're organised in order of priority. Traditionally, they're written on a piece of paper or post-it notes and act as a memory aid."
          button1Text="Create New"
          button2Text="View All"
          link1="/welcomepage/todo"
          link2="/welcomepage/viewtodo"
        />
        <Card
          imageSrc="https://cdn-icons-png.flaticon.com/512/1024/1024824.png"
          title="Notes"
          description="a brief record of something written down to assist the memory or for future reference. notes, a record or outline of a speech, statement, testimony, etc., or of one's impressions of something"
          button1Text="Create New"
          button2Text="View All"
          link1="/welcomepage/notesapp"
          link2="/welcomepage/viewnotes"
        />
      </Container>
    </>
  );
};

export default WelcomePage;
