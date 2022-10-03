import {InoutBoxH2, InoutBoxP, InputBoxSubWrapper, InputBoxWrapper} from "./InputBox.styled";
import {IconAtom} from "../../atoms/IconAtom/Icon.atom";

interface Props {
    label?: string;
    value?: string;
    projectInput?: boolean;
}

export const InputBoxMolecule = ( props: Props) => {

    const {label = 'hola', value = 'hola', projectInput = true} = props;

    return (
        <InputBoxWrapper>
            <InputBoxSubWrapper>
                <InoutBoxP>{label}</InoutBoxP>
                <InoutBoxH2>{value}</InoutBoxH2>
            </InputBoxSubWrapper>
            {
                projectInput && <IconAtom src='https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745' width='4.2rem'/>
            }
        </InputBoxWrapper>
    )
}
