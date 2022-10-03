import { IconWrapper } from "./Icon.styled";

interface Props {
  src?: string;
  propsClass?: string;
  height?: string;
  width?: string;
  alt?: string;
  rounded?: boolean;
  onclick?: () => void;
}

const IconAtom = (props: Props) => {
  const {
    src = '',
    propsClass,
    height = "4.5rem",
    alt,
    width = "",
    onclick = () => {},
    rounded = false,
  } = props;

  return (
      <IconWrapper
        height={height}
        width={width}
        src={src}
        alt={alt ? alt : "logo"}
        className={propsClass}
        onClick={onclick}
        style={{
          borderRadius: rounded ? "100%" : "0%",
        }}
      />
  );
};

export default IconAtom;
