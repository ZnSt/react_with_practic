import { HeaderBox, Wrapper } from "./Header.styled";
import { Container } from "components/Container/Container";
import { Nav } from "../Nav";
import { MainTitle } from "../MainTitle/MainTitle";
import { MainBtn } from "../HeaderBtn/MainBtn";

export const Header = () => {
  return (
    <HeaderBox>
      <Container>
        <Wrapper>
          <Nav />
          <MainTitle />
          <MainBtn text="Buy Now" />
        </Wrapper>
      </Container>
    </HeaderBox>
  );
};
