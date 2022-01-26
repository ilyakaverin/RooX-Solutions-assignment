import * as style from "./style.module.scss";
import { Link } from "react-router-dom";

interface User {
    name: string;
    id: number;
    address: {
      city: string;
    };
    company: {
      name: string;
    };
  }

const UserCard = ({ name, address, company, id }:User) => {
  return (
    <div className={style.container}>
      <span className={style.key}>
        ФИО: <span className={style.value}>{name}</span>{" "}
      </span>
      <span className={style.key}>
        Город: <span className={style.value}>{address}</span>
      </span>
      <div>
        <span className={style.key}>
          Компания: <span className={style.value}>{company}</span>
        </span>{" "}
        <Link to={`/user/${id}`} className={style.link}>
          Подробнее
        </Link>
      </div>
    </div>
  );
};
export default UserCard;
