import React from "react";
import {
  HeaderLoginWrapper,
  HeaderNavUl,
  HeaderWrapper,
} from "./Header.styled";
// import HeaderIcon from "@assets/home-icon.svg";
import IconAtom from "../../atoms/IconAtom/Icon.atom";
import { WalletSection } from "../../../wallet";
const chainName = "osmosistestnet";
function HeaderLayout() {
  return (
    <HeaderWrapper>
      <IconAtom src="../../../src/assets/home-icon.svg" />
      <nav>
        <HeaderNavUl>
          <li>Create</li>
          <li>Stake</li>
          <li>Explore</li>
        </HeaderNavUl>
      </nav>
      <p>Get Atom/OSMO LP </p>
      <HeaderLoginWrapper>
        <WalletSection chainName={chainName} />
      </HeaderLoginWrapper>
    </HeaderWrapper>
  );
}

export default HeaderLayout;
