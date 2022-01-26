import { useRef, useEffect } from "react";
import * as style from "./style.module.scss";
import UserCard from "../../components/UserCard";


interface User {
    name: string;
    id: number;
    address: {
      city: any;
    };
    company: {
      name: any;
    };
  }
  interface Users {
    users: User,
    filter: Function
}

const MainPage = ({ users, filter }:Users) => {

  const userArray = Object.values(users);
  const ref = useRef(window);

  useEffect(() => {
    ref.current.scrollTo(0, 0);
  }, []);

  return (
    <>
      <aside className={style.aside}>
        <span>Сортировка</span>
        <button onClick={() => filter(userArray, "name")}>По городу</button>
        <button onClick={() => filter(userArray, "company.name")}>
          По компаниям
        </button>
      </aside>
      <main>
        <div className={style.container}>
          <h1>Список пользователей</h1>
          {userArray.map((user: User, index: number) => (
            <UserCard
              key={index}
              name={user.name}
              address={user.address.city}
              company={user.company.name}
              id={user.id}
            />
          ))}
          <span>Найдено всего {userArray.length} пользователей</span>
        </div>
      </main>
    </>
  );
};
export default MainPage;
