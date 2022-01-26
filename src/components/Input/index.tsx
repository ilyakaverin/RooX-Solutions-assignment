import React from "react";
import * as style from "./style.module.scss";
import { capitalizeFirstLetter } from '../../service';

interface Input {
  value: string;
  onChange: any;
  name: string;
  readOnly: boolean;
  type?: string;
}

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
