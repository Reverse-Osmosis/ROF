import react from "react";
import {
    CardContentAnotherStateWrapper,
    CardContentWrapper,
    CardIconsWrapper,
    CardProjectButtonWrapper,
    CardProjectInfo,
    CardProjectInfoRRSS,
    CardProjectInfoWrapper,
    CardProjectLaunch,
    CardProjectRewards,
    CardProjectRewardsWrapper,
    CardProjectTokensBG,
    CardProjectTokensSubWrapper,
    CardProjectTokensWrapper,
    CardWrapper,
} from "./Card.styled";
import IconAtom from "../../atoms/IconAtom/Icon.atom";
import H2Atom from "../../atoms/H2Atom/H2.atom";
import ButtonAtom from "../../atoms/ButtonAtom/Button.atom";

// const Card = ({
//   projectName = "Project Name",
//   launchDate = "4 Days 04:00:00",
//   lockedGammBalance = "0.12",
//   lockDropBalanceA = "0.13 GAMM/POOL/11 ATOM/CELESTIA",
//   lockDropBalanceB = "0.13 GAMM/POOL/12 OSMO/CELESTIA",
//   gammUnderlyingTokens = "ATOM,OSMO",
//   onClaim = () => {},
// }: Record<string, any>) => {
//   let gammTokenArr = gammUnderlyingTokens.split(",");
//   let tokenUrl = `https://gradient-avatar.glitch.me/${encodeURIComponent(
//     projectName
//   )}`;
//   return (
//     <CardWrapper>
//       <CardProjectInfoWrapper>
//         <CardProjectInfo>
//           <H2Atom text={projectName} fontSize="1.6rem" />
//           <CardProjectInfoRRSS>
//             <IconAtom
//               alt="projectDiscord"
//               width="1.5rem"
//               height="1.5rem"
//               rounded
//               src={"https://gradient-avatar.glitch.me/" + gammTokenArr[0]}
//             />
//             <IconAtom
//               rounded
//               src={"https://gradient-avatar.glitch.me/" + gammTokenArr[1]}
//               alt="projectTwitter"
//               width="1.5rem"
//               height="1.5rem"
//             />
//           </CardProjectInfoRRSS>
//         </CardProjectInfo>
//         <IconAtom
//           rounded
//           src={tokenUrl}
//           alt="projectLogo"
//           width="5rem"
//           height="5rem"
//         />
//       </CardProjectInfoWrapper>
//       <CardProjectLaunch>
//         <p>Launch Date</p>
//         <H2Atom text={launchDate} />
//       </CardProjectLaunch>
//       <CardProjectRewardsWrapper>
//         <p>Locked GAMM Balance</p>
//         <CardProjectRewards>
//           <IconAtom
//             rounded
//             src={
//               "https://gradient-avatar.glitch.me/" +
//               encodeURIComponent(gammTokenArr.join("/"))
//             }
//             alt="projectDiscord"
//             width="1.5rem"
//             height="1.5rem"
//           />
//           <p>
//             {lockedGammBalance} {gammTokenArr.join("/")}
//           </p>
//         </CardProjectRewards>
//         <p>{projectName} Lockdrop Balance</p>
//         <CardProjectRewards>
//           <IconAtom
//             rounded
//             src={
//               "https://gradient-avatar.glitch.me/" +
//               encodeURIComponent(lockDropBalanceA)
//             }
//             alt="projectDiscord"
//             width="1.5rem"
//             height="1.5rem"
//           />
//           <p style={{ fontSize: "10px", marginTop: "5px" }}>
//             {lockDropBalanceA}
//           </p>
//         </CardProjectRewards>
//         <CardProjectRewards>
//           <IconAtom
//             rounded
//             src={
//               "https://gradient-avatar.glitch.me/" +
//               encodeURIComponent(lockDropBalanceB)
//             }
//             alt="projectDiscord"
//             width="1.5rem"
//             height="1.5rem"
//           />
//           <p style={{ fontSize: "10px", marginTop: "5px" }}>
//             {lockDropBalanceB}
//           </p>
//         </CardProjectRewards>
//       </CardProjectRewardsWrapper>
//       {/* <CardProjectTokensWrapper>
//         <CardProjectTokensSubWrapper>
//           <CardProjectTokensBG>
//             <IconAtom
//               src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
//               alt="projectDiscord"
//               width="4.5rem"
//               height="4.5rem"
//             />
//           </CardProjectTokensBG>
//           <CardProjectTokensBG style={{ margin: "0 0 0 -2rem" }}>
//             <IconAtom
//               src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
//               alt="projectDiscord"
//               width="4.5rem"
//               height="4.5rem"
//             />
//           </CardProjectTokensBG>
//         </CardProjectTokensSubWrapper>
//         <IconAtom
//           src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
//           alt="projectDiscord"
//           width="4.5rem"
//           height="4.5rem"
//         />
//         <CardProjectTokensBG>
//           <IconAtom
//             src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
//             alt="projectDiscord"
//             width="4.5rem"
//             height="4.5rem"
//           />
//         </CardProjectTokensBG>
//       </CardProjectTokensWrapper> */}
//       <CardProjectButtonWrapper>
//         <div onClick={onClaim}>
//           <ButtonAtom
//             text="CLAIM"
//             width="100%"
//             border="0.1rem"
//             borderColor={"white"}
//             hoverBorder="0.1rem"
//             hoverBackgroundColor={"white"}
//             hoverColor={"black"}
//             color={"white"}
//           />
//         </div>
//       </CardProjectButtonWrapper>
//     </CardWrapper>
//   );
enum Status {
    OPEN = "OPEN",
    CLAIMED = "CLAIMED",
    REDEEM = "REDEEM",
}

type cardProps = {
    status?: Status.OPEN | Status.CLAIMED | Status.REDEEM;
};
const getProjectIconStatus = (status: string) => {
    switch (status) {
        case Status.OPEN:
            return {
                icon: "faLock",
                iconColor: "#757575",
                bottomColor: "",
                bottomText: "",
            };
        case Status.CLAIMED:
            return {
                icon: "faUnlockKeyhole",
                iconColor: "#52EB7D",
                bottomColor: "#52EB7D",
                bottomText: "CLAIMED",
            };
        case Status.REDEEM:
            return {
                icon: "faUserLock",
                iconColor: "#C4A46A",
                bottomColor: "#C4A46A",
                bottomText: "READY TO REDEEM",
            };
        default:
            return {icon: "faLock", iconColor: "", bottomColor: "", bottomText: ""};
    }
};

const Card = ({status = Status.REDEEM}: cardProps) => {
    const dataStatus = getProjectIconStatus(status);
    return (
        <CardWrapper>
            <CardContentWrapper>
                <CardProjectInfoWrapper>
                    <CardProjectInfo>
                        <H2Atom text="Project Name" fontSize="1.6rem" fontWeight="700"/>
                        <CardProjectInfoRRSS>
                            <IconAtom
                                src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
                                alt="projectDiscord"
                                width="1.5rem"
                                height="1.5rem"
                            />
                            <IconAtom
                                src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
                                alt="projectTwitter"
                                width="1.5rem"
                                height="1.5rem"
                            />
                        </CardProjectInfoRRSS>
                    </CardProjectInfo>
                    <IconAtom
                        src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
                        alt="projectLogo"
                        width="5rem"
                        height="5rem"
                    />
                </CardProjectInfoWrapper>
                {status == Status.OPEN && (
                    <CardProjectLaunch>
                        <p>Launch Date</p>
                        <H2Atom text="4 Days 04:00:00" margin="1.5rem 0"/>
                    </CardProjectLaunch>
                )}
                {(status == Status.CLAIMED || status == Status.REDEEM) && (
                    <CardProjectRewardsWrapper>
                        <p>Locked GAMM Balance</p>
                        <CardProjectRewards>
                            <IconAtom
                                src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
                                alt="projectDiscord"
                                width="1.5rem"
                                height="1.5rem"
                            />
                            <p>0.12</p>
                        </CardProjectRewards>
                        <p>Celestia Lockdrop Balance</p>
                        <CardProjectRewards>
                            <IconAtom
                                src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
                                alt="projectDiscord"
                                width="1.5rem"
                                height="1.5rem"
                            />
                            <p>0.13</p>
                        </CardProjectRewards>
                    </CardProjectRewardsWrapper>
                )}

                <CardProjectTokensWrapper>
                    <CardProjectTokensSubWrapper>
                        <CardProjectTokensBG>
                            <IconAtom
                                src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
                                alt="projectDiscord"
                                width="4.5rem"
                                height="4.5rem"
                            />
                        </CardProjectTokensBG>
                        <CardProjectTokensBG style={{margin: "0 0 0 -2rem"}}>
                            <IconAtom
                                src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
                                alt="projectDiscord"
                                width="4.5rem"
                                height="4.5rem"
                            />
                        </CardProjectTokensBG>
                    </CardProjectTokensSubWrapper>
                    <IconAtom
                        src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
                        alt="projectDiscord"
                        width="4.5rem"
                        height="4.5rem"
                    />
                    <CardProjectTokensBG>
                        <IconAtom
                            src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
                            alt="projectDiscord"
                            width="4.5rem"
                            height="4.5rem"
                        />
                    </CardProjectTokensBG>
                </CardProjectTokensWrapper>
            </CardContentWrapper>
            {(status == Status.CLAIMED || status == Status.REDEEM) && (
                <CardProjectButtonWrapper>
                    <ButtonAtom
                        text={dataStatus.bottomText}
                        width="100%"
                        border="0.1rem"
                        backgroundColor={dataStatus.bottomColor}
                        hoverBorder="0.1rem"
                        hoverBackgroundColor={"white"}
                        hoverColor={"black"}
                        color={"white"}
                    />
                </CardProjectButtonWrapper>
            )}
        </CardWrapper>
    );
};

const CardContentAnotherState = () => {
    return (
        <CardContentAnotherStateWrapper>
            <div style={{paddingBottom: "0.5rem"}}>
                <span style={{display: "block"}}>Locked GAMM Balance</span>
                <CardIconsWrapper>
                    {/* <OsmoIcon /> */}
                    <span>icon</span>
                    <span>1211212.22212</span>
                </CardIconsWrapper>
            </div>
            <div>
                <span className="block">Celestia Lockdrop Balance</span>
                <CardIconsWrapper>
                    {/* <WorldIcon /> */}
                    <span>icon</span>
                    1000
                </CardIconsWrapper>
            </div>
        </CardContentAnotherStateWrapper>
    );
>>>>>>> 0b1bfd7dfa7d67a19ea49ffe0ffaa49dac43df0a
};

export default Card;
