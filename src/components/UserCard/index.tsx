import * as style from "./style.module.scss";
import { Link } from "react-router-dom";
import { UserCard } from "../../../interfaces";

const UserCard = ({ name, city, companyName, id }: UserCard) => {
  return (
    <div className={style.container}>
      <span className={style.key}>
        ФИО: <span className={style.value}>{name}</span>
      </span>
      <span className={style.key}>
        Город: <span className={style.value}>{city}</span>
      </span>
      <div>
        <span className={style.key}>
          Компания: <span className={style.value}>{companyName}</span>
        </span>
        <Link to={`/user/${id}`} className={style.link}>
          Подробнее
        </Link>
      </div>
    </div>
  );
};
export default UserCard;
