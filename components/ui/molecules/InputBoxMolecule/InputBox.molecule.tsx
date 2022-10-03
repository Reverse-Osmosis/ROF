import {
  InnputBoxH2,
  InoutBoxH2,
  InoutBoxP,
  InputBoxBalance,
  InputBoxBalanceWrapper,
  InputBoxP,
  InputBoxSubWrapper,
  InputBoxWrapper,
} from "./InputBox.styled";
import IconAtom from "../../atoms/IconAtom/Icon.atom";
import ImputAtom from "../../atoms/InputAtom/ImputAtom";

interface Props {
  label?: string;
  value?: string;
  isProjectInput?: boolean;
  isProjectAmountInput?: boolean;
  balance?: string;
  balanceToken?: string;
}

const InputBoxMolecule = (props: Props) => {
  const {
    label = "hola",
    value = "hola",
    isProjectInput = false,
    isProjectAmountInput = false,
    balanceToken = "",
    balance = "",
  } = props;

  return (
    <InputBoxWrapper>
      <InputBoxSubWrapper>
        <InputBoxP>{label}</InputBoxP>

        {isProjectAmountInput ? (
          <ImputAtom />
        ) : (
          <InnputBoxH2>{value}</InnputBoxH2>
        )}
      </InputBoxSubWrapper>
      {isProjectInput && (
        <IconAtom
          src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
          width="4.2rem"
        />
      )}
      {isProjectAmountInput && (
        <InputBoxBalance>
          <InputBoxP>{`Balance: ${balance}`}</InputBoxP>

          <InputBoxBalanceWrapper>
            <IconAtom
              src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
              width="1.8rem"
              height={"1.8rem"}
            />
            <InputBoxP>{balanceToken}</InputBoxP>
          </InputBoxBalanceWrapper>
        </InputBoxBalance>
      )}
    </InputBoxWrapper>
  );
};

export default InputBoxMolecule;
