import { useState } from "react";

interface InputAtomProps {
  label: string;
  value: string;
  onChange;
  placeholder?: string;
  type: string;
}

const ImputAtom = (props: InputAtomProps) => {
  const { label, placeholder, value, onChange, type } = props;

  return (
    <div>
      <label>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        style={{ background: "none", border: "none" }}
        required
      />
    </div>
  );
};

export default ImputAtom;
