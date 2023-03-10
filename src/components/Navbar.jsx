import React from "react";
import styled from "styled-components";

const Section = styled.div`
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 770px) {
    width: 100%;
  }
`;
const Container = styled.div`
  padding: 12px 0;
  width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 770px) {
    width: 100%;
    padding: 10px 12px;
  }
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;

const Logo = styled.img`
  height: 20px;
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  gap: 20px;

  @media only screen and (max-width: 770px) {
    display: none;
  }
`;

const ListItem = styled.li`
  cursor: pointer;
  transition: 0.3s ease-out;

  &:hover {
    color: #e2e2e2;
  }
`;

const Icon = styled.img`
  width: 20px;
  cursor: pointer;
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Button = styled.button`
  width: 100px;
  padding: 10px;
  background-color: #da4ea2;
  color: #fff;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  transition: 0.3s ease-out;

  &:hover {
    background-color: #b0cfff;
  }
`;

const Navbar = () => {
  return (
    <Section>
      <Container>
        <Links>
          <Logo src="./img/logo.png" />
          <List>
            <ListItem>Home</ListItem>
            <ListItem>Stidio</ListItem>
            <ListItem>Works</ListItem>
            <ListItem>Contact</ListItem>
          </List>
        </Links>
        <Icons>
          <Icon src="./img/search.png" />
          <Button>Hire Now</Button>
        </Icons>
      </Container>
    </Section>
  );
};

export default Navbar;
