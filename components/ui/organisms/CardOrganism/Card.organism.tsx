import react from "react";
import {
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

const Card = ({
  projectName = "Project Name",
  launchDate = "4 Days 04:00:00",
  lockedGammBalance = "0.12",
  lockDropBalanceA = "0.13 GAMM/POOL/11 ATOM/CELESTIA",
  lockDropBalanceB = "0.13 GAMM/POOL/12 OSMO/CELESTIA",
  gammUnderlyingTokens = "ATOM,OSMO",
  onClaim = () => {},
}: Record<string, any>) => {
  let gammTokenArr = gammUnderlyingTokens.split(",");
  let tokenUrl = `https://gradient-avatar.glitch.me/${encodeURIComponent(
    projectName
  )}`;
  return (
    <CardWrapper>
      <CardProjectInfoWrapper>
        <CardProjectInfo>
          <H2Atom text={projectName} fontSize="1.6rem" />
          <CardProjectInfoRRSS>
            <IconAtom
              alt="projectDiscord"
              width="1.5rem"
              height="1.5rem"
              rounded
              src={"https://gradient-avatar.glitch.me/" + gammTokenArr[0]}
            />
            <IconAtom
              rounded
              src={"https://gradient-avatar.glitch.me/" + gammTokenArr[1]}
              alt="projectTwitter"
              width="1.5rem"
              height="1.5rem"
            />
          </CardProjectInfoRRSS>
        </CardProjectInfo>
        <IconAtom
          rounded
          src={tokenUrl}
          alt="projectLogo"
          width="5rem"
          height="5rem"
        />
      </CardProjectInfoWrapper>
      <CardProjectLaunch>
        <p>Launch Date</p>
        <H2Atom text={launchDate} />
      </CardProjectLaunch>
      <CardProjectRewardsWrapper>
        <p>Locked GAMM Balance</p>
        <CardProjectRewards>
          <IconAtom
            rounded
            src={
              "https://gradient-avatar.glitch.me/" +
              encodeURIComponent(gammTokenArr.join("/"))
            }
            alt="projectDiscord"
            width="1.5rem"
            height="1.5rem"
          />
          <p>
            {lockedGammBalance} {gammTokenArr.join("/")}
          </p>
        </CardProjectRewards>
        <p>{projectName} Lockdrop Balance</p>
        <CardProjectRewards>
          <IconAtom
            rounded
            src={
              "https://gradient-avatar.glitch.me/" +
              encodeURIComponent(lockDropBalanceA)
            }
            alt="projectDiscord"
            width="1.5rem"
            height="1.5rem"
          />
          <p style={{ fontSize: "10px", marginTop: "5px" }}>
            {lockDropBalanceA}
          </p>
        </CardProjectRewards>
        <CardProjectRewards>
          <IconAtom
            rounded
            src={
              "https://gradient-avatar.glitch.me/" +
              encodeURIComponent(lockDropBalanceB)
            }
            alt="projectDiscord"
            width="1.5rem"
            height="1.5rem"
          />
          <p style={{ fontSize: "10px", marginTop: "5px" }}>
            {lockDropBalanceB}
          </p>
        </CardProjectRewards>
      </CardProjectRewardsWrapper>
      {/* <CardProjectTokensWrapper>
        <CardProjectTokensSubWrapper>
          <CardProjectTokensBG>
            <IconAtom
              src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
              alt="projectDiscord"
              width="4.5rem"
              height="4.5rem"
            />
          </CardProjectTokensBG>
          <CardProjectTokensBG style={{ margin: "0 0 0 -2rem" }}>
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
      </CardProjectTokensWrapper> */}
      <CardProjectButtonWrapper>
        <div onClick={onClaim}>
          <ButtonAtom
            text="CLAIM"
            width="100%"
            border="0.1rem"
            borderColor={"white"}
            hoverBorder="0.1rem"
            hoverBackgroundColor={"white"}
            hoverColor={"black"}
            color={"white"}
          />
        </div>
      </CardProjectButtonWrapper>
    </CardWrapper>
  );
};

export default Card;
