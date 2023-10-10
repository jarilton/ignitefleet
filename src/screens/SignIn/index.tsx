import { Container, Title, Slogan } from "./styles";

import backgroundImg from "../../assets/background.png";

export const SignIn = () => {
  return (
    <Container source={backgroundImg}>
      <Title>Ignite Fleet</Title>

      <Slogan>Controle suas viagens de forma eficiente e com segurança</Slogan>
    </Container>
  );
};
