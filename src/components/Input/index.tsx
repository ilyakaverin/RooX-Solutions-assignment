import React from "react";
import * as style from "./style.module.scss";

interface Input {
  value: string;
  onChange: any;
  name: string;
  readOnly: boolean;
  type?: string;
}

const Input = ({ value, onChange, name, readOnly, type }: Input) => {
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <div className={style.container}>
      <label htmlFor={name}>{capitalizeFirstLetter(name)}</label>
      <input
        type={type}
        value={value}
        id={name}
        readOnly={readOnly}
        onChange={onChange}
        required
      />
    </div>
  );
};
export default Input;
