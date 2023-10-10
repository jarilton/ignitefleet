import React from "react";

import { TouchableOpacityProps } from "react-native";

import { Container, Title, Loading } from "./styles";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  title,
  isLoading = false,
  ...rest
}) => {
  return (
    <Container activeOpacity={0.7} disabled={isLoading} {...rest}>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Title>{title}</Title>
        </>
      )}
    </Container>
  );
};
