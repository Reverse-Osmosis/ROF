import React from "react";
import IconAtom from "../../atoms/IconAtom/Icon.atom";
import {
    BlocInformationIconsWrapper,
    BlocInformationTitle,
    BlocInformationWrapper,
    BlockInformationWrapper,
    FooterWrapper,
} from "./Footer.styled";

import twitterICON from '../../../../src/assets/icons/twitterICON.svg';
import discordICON from '../../../../src/assets/icons/discordICON.svg';
import youtubeICON from '../../../../src/assets/icons/youtubeICON.svg';

type IBlockInformation = {
    title: string;
    fields: string[];
};
const footerInfo: IBlockInformation[] = [
    {
        title: "Customer care",
        fields: ["Privacy policy", "Terms & Conditions", "Frequent questions"],
    },
    {
        title: "Projects",
        fields: ["Kind of projects", "How to join?", "Top projects"],
    },
    {title: "Support", fields: ["support@reverseosmosis.io", "Contact"]},
    {title: "About us", fields: ["Reverse Osmosis"]},
];
const SocialNetwokIcons = [
    {icon: `${twitterICON}`},
    {icon: `${twitterICON}`},
    {icon: `${twitterICON}`},
];

function FooterLayout() {
    return (
        <FooterWrapper>
            <BlockInformationWrapper>
                {footerInfo.map((info, index) => (
                    <BlocInformation
                        key={index}
                        title={info.title}
                        fields={info.fields}
                    />
                ))}
            </BlockInformationWrapper>
            <BlocInformationIconsWrapper>
                {SocialNetwokIcons.map((icon, index) => (
                    <IconAtom key={index} src={`${icon}`}/>
                ))}
            </BlocInformationIconsWrapper>
        </FooterWrapper>
    );
}

const BlocInformation = ({title, fields}: IBlockInformation) => {
    return (
        <BlocInformationWrapper>
            <BlocInformationTitle>{title}</BlocInformationTitle>
            {fields.map((field, index) => (
                <p key={index}>{field}</p>
            ))}
        </BlocInformationWrapper>
    );
};

export default FooterLayout;
