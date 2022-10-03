import { useState } from "react";

interface InputAtomProps {
  label: string;
  value: string;
  onChange: any;
  placeholder?: string;
}

const ImputAtom = (props: InputAtomProps) => {
  const { label, placeholder, value, onChange } = props;

  return (
    <div>
      <label>{label}</label>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default ImputAtom;
