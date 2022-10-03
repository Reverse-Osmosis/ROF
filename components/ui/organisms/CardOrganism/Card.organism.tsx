import react from 'react';
import {
    CardProjectButtonWrapper,
    CardProjectInfo,
    CardProjectInfoRRSS,
    CardProjectInfoWrapper,
    CardProjectLaunch,
    CardProjectRewards,
    CardProjectRewardsWrapper,
    CardProjectTokensBG, CardProjectTokensSubWrapper,
    CardProjectTokensWrapper,
    CardWrapper,
} from "./Card.styled";
import IconAtom from "../../atoms/IconAtom/Icon.atom";
import H2Atom from "../../atoms/H2Atom/H2.atom";
import ButtonAtom from "../../atoms/ButtonAtom/Button.atom";

const Card = () => {
    return (
        <CardWrapper>
            <CardProjectInfoWrapper>
                <CardProjectInfo>
                    <H2Atom
                        text='Project Name'
                        fontSize='1.6rem'
                    />
                    <CardProjectInfoRRSS>
                        <IconAtom
                            src='https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745'
                            alt='projectDiscord'
                            width='1.5rem'
                            height='1.5rem'
                        />
                        <IconAtom
                            src='https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745'
                            alt='projectTwitter'
                            width='1.5rem'
                            height='1.5rem'
                        />
                    </CardProjectInfoRRSS>
                </CardProjectInfo>
                <IconAtom
                    src='https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745'
                    alt='projectLogo'
                    width='5rem'
                    height='5rem'
                />
            </CardProjectInfoWrapper>
            <CardProjectLaunch>
                <p>Launch Date</p>
                <H2Atom
                    text='4 Days 04:00:00'
                />
            </CardProjectLaunch>
            <CardProjectRewardsWrapper>
                <p>Locked GAMM Balance</p>
                <CardProjectRewards>
                    <IconAtom
                        src='https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745'
                        alt='projectDiscord'
                        width='1.5rem'
                        height='1.5rem'
                    />
                    <p>0.12</p>
                </CardProjectRewards>
                <p>Celestia Lockdrop Balance</p>
                <CardProjectRewards>
                    <IconAtom
                        src='https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745'
                        alt='projectDiscord'
                        width='1.5rem'
                        height='1.5rem'
                    />
                    <p>0.13</p>
                </CardProjectRewards>
            </CardProjectRewardsWrapper>
            <CardProjectTokensWrapper>
                <CardProjectTokensSubWrapper>
                    <CardProjectTokensBG>
                        <IconAtom
                            src='https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745'
                            alt='projectDiscord'
                            width='4.5rem'
                            height='4.5rem'
                        />
                    </CardProjectTokensBG>
                    <CardProjectTokensBG style={{margin: '0 0 0 -2rem'}}>
                        <IconAtom
                            src='https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745'
                            alt='projectDiscord'
                            width='4.5rem'
                            height='4.5rem'
                        />
                    </CardProjectTokensBG>
                </CardProjectTokensSubWrapper>
                <IconAtom
                    src='https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745'
                    alt='projectDiscord'
                    width='4.5rem'
                    height='4.5rem'
                />
                <CardProjectTokensBG>
                    <IconAtom
                        src='https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745'
                        alt='projectDiscord'
                        width='4.5rem'
                        height='4.5rem'
                    />
                </CardProjectTokensBG>
            </CardProjectTokensWrapper>
            <CardProjectButtonWrapper>
                <ButtonAtom
                    text='CLAIMED'
                    width='100%'
                    border='0.1rem'
                    borderColor={'white'}
                    hoverBorder='0.1rem'
                    hoverBackgroundColor={'white'}
                    hoverColor={'black'}
                    color={'white'}
                />
            </CardProjectButtonWrapper>
        </CardWrapper>
    )
}

export default Card;
