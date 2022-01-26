import React from "react";
import * as style from "./style.module.scss";
import { capitalizeFirstLetter } from "../../service";

interface Input {
  value: string;
  onChange: any;
  name: string;
  readOnly: boolean;
}

const TextArea = ({ value, onChange, name, readOnly }: Input) => {
  return (
    <div className={style.container}>
      <label htmlFor={name}>{capitalizeFirstLetter(name)}</label>
      <textarea
        value={value}
        id={name}
        cols={40}
        rows={6}
        readOnly={readOnly}
        onChange={onChange}
      />
    </div>
  );
};
export default TextArea;
