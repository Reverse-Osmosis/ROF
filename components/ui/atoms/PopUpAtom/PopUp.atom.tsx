import InputBoxMolecule from "../../molecules/InputBoxMolecule/InputBox.molecule";
import ButtonAtom from "../ButtonAtom/Button.atom";
import {PopUpButtonsWrapper, PopUpPercentButtons, PopUpSubWrapper, PopUpWrapper} from "./PopUp.styled";

const PopUpAtom = ( ) => {
    return (
        <PopUpWrapper>
            <PopUpSubWrapper>
                <InputBoxMolecule
                    label='Amount to lock'
                    value='0.0'
                    isProjectAmountInput={true}
                    balance={'0.0'}
                    balanceToken={'ETH'}
                />
                <InputBoxMolecule
                    label='Project name'
                    isProjectInput={true}
                    value='Celestia'
                />
                <InputBoxMolecule
                    label='Lock time'
                    value='6 Months'
                />
                <PopUpPercentButtons>
                    <ButtonAtom
                        text='25%'
                        width='8.3rem'
                        border='0.1rem'
                        borderColor={'white'}
                        hoverBorder='0.1rem'
                        hoverBackgroundColor={'white'}
                        hoverColor={'black'}
                        color={'white'}
                    />
                    <ButtonAtom
                        text='50%'
                        width='8.3rem'
                        border='0.1rem'
                        borderColor={'white'}
                        hoverBorder='0.1rem'
                        hoverBackgroundColor={'white'}
                        hoverColor={'black'}
                        color={'white'}
                    />
                    <ButtonAtom
                        text='75%'
                        width='8.3rem'
                        border='0.1rem'
                        borderColor={'white'}
                        hoverBorder='0.1rem'
                        hoverBackgroundColor={'white'}
                        hoverColor={'black'}
                        color={'white'}
                    />
                    <ButtonAtom
                        width='8.3rem'
                        text='100%'
                        border='0.1rem'
                        borderColor={'white'}
                        hoverBorder='0.1rem'
                        hoverBackgroundColor={'white'}
                        hoverColor={'black'}
                        color={'white'}
                    />
                </PopUpPercentButtons>
                <PopUpButtonsWrapper>
                    <ButtonAtom
                        text='Cancel'
                        width={'18rem'}
                        border='0.1rem'
                        borderColor={'white'}
                        hoverBorder='0.1rem'
                        // hoverBorderColor={'white'}
                        hoverBackgroundColor={'white'}
                        hoverColor={'black'}
                        color={'white'}
                    />
                    <ButtonAtom
                        text='LOCK'
                        width={'18rem'}
                        border='0.1rem'
                        color={'black'}
                        backgroundColor={'white'}
                        borderColor={'white'}
                        hoverBorder='0.1rem'
                        hoverBorderColor={'white'}
                        hoverBackgroundColor={'transparent'}
                        hoverColor={'white'}
                    />
                </PopUpButtonsWrapper>
            </PopUpSubWrapper>
        </PopUpWrapper>
    );
};

export default PopUpAtom;
