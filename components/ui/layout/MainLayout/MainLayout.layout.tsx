import React, { ReactElement } from "react";
import FooterLayout from "../FooterLayout/Footer.layout";
import HeaderLayout from "../HeaderLayout/Header.layout";
import {
  MainLayouChildrenContainer,
  MainLayoutWrapper,
} from "./MainLayout.styled";

type layoutProps = {
  children: ReactElement;
};
function MainLayoutLayout({ children }: layoutProps) {
  return (
    <MainLayoutWrapper>
      <HeaderLayout />

      <MainLayouChildrenContainer>{children}</MainLayouChildrenContainer>
      <FooterLayout />
    </MainLayoutWrapper>
  );
}

export default MainLayoutLayout;
