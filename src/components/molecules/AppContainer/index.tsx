import { useMbxAppSelector } from "@store/utils";
import { Container, ContainerProps } from "mobrix-ui";
import React from "react";

const AppContainer = (props: ContainerProps) => {
  const { dark } = useMbxAppSelector((state) => state.ui);
  return <Container {...props} dark={dark} />;
};

export default AppContainer;
