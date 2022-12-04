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

export enum Status {
  OPEN = "OPEN",
  CLAIMED = "CLAIMED",
  REDEEM = "REDEEM",
}

export type cardProps = {
  status?: string;
  onToggle: () => void;
  projectID: number;
  name: string;
  launchTime?: string;
  icon: string
  locked?: number,
  claim?: number
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
      return { icon: "faLock", iconColor: "", bottomColor: "", bottomText: "" };
  }
};

const Card = ({ status = Status.REDEEM, onToggle, projectID, name, launchTime = "", icon, locked, claim }: cardProps) => {
  const dataStatus = getProjectIconStatus(status);
  return (
    <CardWrapper onClick={onToggle}>
      <CardContentWrapper>
        <CardProjectInfoWrapper>
          <CardProjectInfo>
            <H2Atom text={name} fontSize="1.6rem" fontWeight="700" />
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
            src={icon}
            alt="projectLogo"
            width="5rem"
            height="5rem"
          />
        </CardProjectInfoWrapper>
        {status == Status.OPEN && (
          <CardProjectLaunch>
            <p>Launch Date</p>
            <H2Atom text={launchTime} margin="1.5rem 0" />
          </CardProjectLaunch>
        )}
        {(status == Status.CLAIMED || status == Status.REDEEM) && (
          <CardProjectRewardsWrapper>
            <p>{`Locked ${name} Balance`} </p>
            <CardProjectRewards>
              <IconAtom
                src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
                alt="projectDiscord"
                width="1.5rem"
                height="1.5rem"
              />
              <p>{`${locked}`}</p>
            </CardProjectRewards>
            <p>{`${name} Lockdrop Balance`}</p>
            <CardProjectRewards>
              <IconAtom
                src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
                alt="projectDiscord"
                width="1.5rem"
                height="1.5rem"
              />
              <p>{`${claim}`}</p>
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
            src={status == Status.CLAIMED ? "https://i.pinimg.com/originals/2c/7d/71/2c7d71a7152a2bcf1953be7c0b3a9e47.jpg" : status == Status.REDEEM ? "https://static.wikia.nocookie.net/powerrangersserie/images/5/57/Prm-red.png/revision/latest/scale-to-width-down/537?cb=20150326150823&path-prefix=es" : "https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"}
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
      <div style={{ paddingBottom: "0.5rem" }}>
        <span style={{ display: "block" }}>Locked GAMM Balance</span>
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
};

export default Card;
