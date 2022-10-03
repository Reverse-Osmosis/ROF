import React from "react";
import {
    HeaderLoginWrapper,
    HeaderNavUl,
    HeaderWrapper,
} from "./Header.styled";
import {useRouter} from "next/router";
// import HeaderIcon from "@assets/home-icon.svg";
import IconAtom from "../../atoms/IconAtom/Icon.atom";
import {WalletSection} from "../../../wallet";
import userICON from '../../../../public/userIcon.png'
import userSVG from "../../atoms/svgs/userSVG";


const chainName = "osmosistestnet";

function HeaderLayout() {

    const router = useRouter();
    return (
        <HeaderWrapper>
            <IconAtom src="../../../src/assets/home-icon.svg"/>
            <nav>
                <HeaderNavUl>
                    <li>Create</li>
                    <li>Stake</li>
                    <li>Explore</li>
                </HeaderNavUl>
            </nav>
            <p>Get Atom/OSMO LP </p>
            <HeaderLoginWrapper>
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M12.5 0.390625C5.81055 0.390625 0.390625 5.81055 0.390625 12.5C0.390625 19.1895 5.81055 24.6094 12.5 24.6094C19.1895 24.6094 24.6094 19.1895 24.6094 12.5C24.6094 5.81055 19.1895 0.390625 12.5 0.390625ZM12.5 5.07812C14.873 5.07812 16.7969 7.00195 16.7969 9.375C16.7969 11.748 14.873 13.6719 12.5 13.6719C10.127 13.6719 8.20312 11.748 8.20312 9.375C8.20312 7.00195 10.127 5.07812 12.5 5.07812ZM12.5 21.875C9.63379 21.875 7.06543 20.5762 5.34668 18.5449C6.26465 16.8164 8.06152 15.625 10.1562 15.625C10.2734 15.625 10.3906 15.6445 10.5029 15.6787C11.1377 15.8838 11.8018 16.0156 12.5 16.0156C13.1982 16.0156 13.8672 15.8838 14.4971 15.6787C14.6094 15.6445 14.7266 15.625 14.8438 15.625C16.9385 15.625 18.7354 16.8164 19.6533 18.5449C17.9346 20.5762 15.3662 21.875 12.5 21.875Z"
                        fill="white"/>
                </svg>
                <WalletSection chainName={chainName}/>
            </HeaderLoginWrapper>
        </HeaderWrapper>
    );
}

export default HeaderLayout;
