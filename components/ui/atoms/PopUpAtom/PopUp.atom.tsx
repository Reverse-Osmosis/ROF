import {InputBoxMolecule} from "../../molecules/InputBoxMolecule/InputBox.molecule";
import {ButtonAtom} from "../ButtonAtom/Button.atom";
import {PopUpButtonsWrapper, PopUpSubWrapper, PopUpWrapper} from "./PopUp.styled";

export const PopUpAtom = () => {
    return (
        <PopUpWrapper>
            <PopUpSubWrapper>
                <InputBoxMolecule
                    label='Amount to lock'
                    projectInput={false}
                    value='0.0'
                />
                <InputBoxMolecule
                    label='Project name'
                    projectInput={true}
                    value='Celestia'
                />
                <InputBoxMolecule
                    label='Lock time'
                    projectInput={false}
                    value='6 Months'
                />
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
                        borderColor={'white'}
                        hoverBorder='0.1rem'
                        // hoverBorderColor={'white'}
                        hoverBackgroundColor={'white'}
                        hoverColor={'black'}
                        color={'white'}
                    />
                </PopUpButtonsWrapper>
            </PopUpSubWrapper>
        </PopUpWrapper>
    );
};
