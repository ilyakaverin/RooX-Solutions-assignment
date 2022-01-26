import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import Input from "../../components/Input";
import TextArea from "../../components/TextArea";
import * as style from "./style.module.scss";
import cn from "classnames";

interface State {
    address: object[];
    isLoading: boolean,
    data: object[]
    
}
interface User {
    id: string
}



const UserPage = ({ users }:any) => {
  const { storyId: id } = useParams();
  const [user] = users.filter((i:User) => i.id == id);
  const [data, setData] = useState(user);
  const [editMode, setEditMode] = useState(true);
  const navigate = useNavigate();
  const ref = useRef(window);
  useEffect(() => {
    ref.current.scrollTo(0, 0);
  }, []);
  const handleSubmit = (event:React.FormEvent<HTMLInputElement>) => {
    event.preventDefault();
    console.log(data);
  };
  const handleClick = () => {
    setEditMode((prevState) => !prevState);
  };
  const handleBack = () => {
      navigate('/')
  }
  return (
    <div>
      <section className={style.section}>
        <h1>Профиль пользователя</h1>
        <div className={style.buttons}>
        <button onClick={() => handleClick()}>Редактировать</button>
        <button onClick={() => handleBack()}>Назад</button>
        </div>
      </section>
      <form onSubmit={(event:any) => handleSubmit(event)} className={style.container}>
        <div
          className={cn(style.inputContainer, { [style.enabled]: editMode })}
        >
          <Input
            readOnly={editMode}
            value={data?.name}
            name="name"
            type="text"
            onChange={(event:React.FormEvent<HTMLInputElement>) =>
              setData((prevState:State) => ({
                ...prevState,
                name: event.target.value,
              }))
            }
          />
          <Input
            readOnly={editMode}
            value={data?.username}
            name="username"
            type="text"
            onChange={(event:React.FormEvent<HTMLInputElement>) =>
              setData((prevState:State) => ({
                ...prevState,
                username: event.target.value,
              }))
            }
          />
          <Input
            readOnly={editMode}
            value={data?.email}
            name="email"
            type="email"
            onChange={(event:React.FormEvent<HTMLInputElement>) =>
              setData((prevState:State) => ({
                ...prevState,
                email: event.target.value,
              }))
            }
          />
          <Input
            readOnly={editMode}
            value={data?.address?.street}
            name="street"
            type="text"
            onChange={(event: React.FormEvent<HTMLInputElement>) =>
              setData((prevState:State) => ({
                ...prevState,
                address: {
                  ...prevState.address,
                  street: event.target.value,
                },
              }))
            }
          />
          <Input
            readOnly={editMode}
            value={data?.address?.city}
            name="city"
            type="text"
            onChange={(event:React.FormEvent<HTMLInputElement>) =>
              setData((prevState:State) => ({
                ...prevState,
                address: {
                  ...prevState.address,
                  city: event.target.value,
                },
              }))
            }
          />
          <Input
            readOnly={editMode}
            value={data?.address?.zipcode}
            name="zipcode"
            type="text"
            onChange={(event:React.FormEvent<HTMLInputElement>) =>
              setData((prevState:State) => ({
                ...prevState,
                address: {
                  ...prevState.address,
                  zipcode: event.target.value,
                },
              }))
            }
          />
          <Input
            readOnly={editMode}
            value={data?.phone}
            name="phone"
            type="tel"
            onChange={(event:React.FormEvent<HTMLInputElement>) =>
              setData((prevState:State) => ({
                ...prevState,
                phone: event.target.value,
              }))
            }
          />
          <Input
            readOnly={editMode}
            value={data?.website}
            type="url"
            name="website"
            onChange={(event:React.FormEvent<HTMLInputElement>) =>
              setData((prevState:State) => ({
                ...prevState,
                website: event.target.value,
              }))
            }
          />
          <TextArea
            readOnly={editMode}
            name="Comment"
            value={''}
            onChange={(event:React.FormEvent<HTMLInputElement>) =>
              setData((prevState:State) => ({
                ...prevState,
                comment: event.target.value,
              }))
            }
          />
        </div>

        <button
          className={cn(style.button, { [style.disabled]: editMode })}
          disabled={editMode}
          type="submit"
          
        >
          Отправить
        </button>
      </form>
    </div>
  );
};
export default UserPage;
