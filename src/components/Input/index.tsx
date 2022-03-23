import React from "react";
import * as style from "./style.module.scss";
import { capitalizeFirstLetter } from "../../service";
import { Input } from "../../../interfaces";

const Input = ({ value, onChange, name, readOnly, type }: Input) => {
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
