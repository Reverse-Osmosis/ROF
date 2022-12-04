import InputBoxMolecule from "../../molecules/InputBoxMolecule/InputBox.molecule";
import ButtonAtom from "../ButtonAtom/Button.atom";
import {
  PopUpButtonsWrapper,
  PopUpPercentButtons,
  PopUpSubWrapper,
  PopUpWrapper,
} from "./PopUp.styled";

type InfoProject = {
  name: string;
  time: string;
  contract: string;
}

type PopUpAtomProps = {
  setShow: () => void;
  onToggle: () => void;
  infoProject: InfoProject
};
const PopUpAtom = ({ setShow, onToggle, infoProject }: PopUpAtomProps) => {
  const lockAmount = (e) => {
    e.preventDefault()
    console.log(e.target[0]?.value)
    console.log(infoProject.contract)
  };
  return (
    <PopUpWrapper>
        <form onSubmit={lockAmount}>
          <PopUpSubWrapper>
            <InputBoxMolecule
              label="Amount to lock"
              value="0.0"
              isProjectAmountInput={true}
              balance={"0.0"}
              balanceToken={"OSMOS"}
              type="number"
            />
            <InputBoxMolecule
              label="Project name"
              isProjectInput={true}
              value={infoProject.name}
            />
            <InputBoxMolecule label="Lock time" value={`${infoProject.time} ${parseInt(infoProject.time) > 1 ? "Months" : "Month"}`} />
            <PopUpPercentButtons>
              <ButtonAtom
                text="25%"
                width="8.3rem"
                border="0.1rem"
                borderColor={"white"}
                hoverBorder="0.1rem"
                hoverBackgroundColor={"white"}
                hoverColor={"black"}
                color={"white"}
              />
              <ButtonAtom
                text="50%"
                width="8.3rem"
                border="0.1rem"
                borderColor={"white"}
                hoverBorder="0.1rem"
                hoverBackgroundColor={"white"}
                hoverColor={"black"}
                color={"white"}
              />
              <ButtonAtom
                text="75%"
                width="8.3rem"
                border="0.1rem"
                borderColor={"white"}
                hoverBorder="0.1rem"
                hoverBackgroundColor={"white"}
                hoverColor={"black"}
                color={"white"}
              />
              <ButtonAtom
                width="8.3rem"
                text="100%"
                border="0.1rem"
                borderColor={"white"}
                hoverBorder="0.1rem"
                hoverBackgroundColor={"white"}
                hoverColor={"black"}
                color={"white"}
              />
            </PopUpPercentButtons>
            <PopUpButtonsWrapper>
              <ButtonAtom
                text="Cancel"
                width={"18rem"}
                border="0.1rem"
                borderColor={"white"}
                hoverBorder="0.1rem"
                onClick={() => setShow(false)}
                // hoverBorderColor={'white'}
                hoverBackgroundColor={"white"}
                hoverColor={"black"}
                color={"white"}
              />
              <ButtonAtom
                type="submit"
                text="LOCK"
                width={"18rem"}
                border="0.1rem"
                color={"black"}
                backgroundColor={"white"}
                borderColor={"white"}
                hoverBorder="0.1rem"
                hoverBorderColor={"white"}
                hoverBackgroundColor={"transparent"}
                hoverColor={"white"}
              />
            </PopUpButtonsWrapper>
          </PopUpSubWrapper>
        </form>
    </PopUpWrapper>
  );
};

export default PopUpAtom;
