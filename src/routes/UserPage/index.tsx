import React from 'react';
import { useParams } from "react-router-dom";
import { useState, useRef, useEffect } from 'react';
import Input from '../../components/Input';
import TextArea from '../../components/TextArea';
import * as style from './style.module.scss';
import cn from 'classnames';


const UserPage = ({ users }) => {

    const { storyId: id  } = useParams();
    const [user] = users.filter(i => i.id == id);
    const [data, setData] = useState(user);
    const [editMode, setEditMode] = useState(true);
    const ref = useRef(window);
    useEffect(() => {
        ref.current.scrollTo(0, 0);
    },[])

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data)
    }
    const handleClick = () => {
        setEditMode(prevState => !prevState);
    }
    return (
        <div>
            <section className={style.section}>
                <h1>Профиль пользователя</h1>
                <button onClick={handleClick}>Редактировать</button>
            </section>
           <form onSubmit={handleSubmit} className={style.container}>
               <div className={cn(style.inputContainer, {[style.enabled] : editMode })} >
               <Input
                readOnly={editMode} 
                value={data?.name}
                name='name'
                type='text'
                onChange={(event) => setData(prevState => ({
                    ...prevState,
                    name: event.target.value
                }))}
                />
                <Input 
                readOnly={editMode} 
                value={data?.username}
                name='username'
                type='text'
                onChange={(event) => setData(prevState => ({
                    ...prevState,
                    username: event.target.value
                }))}
                
                />
                <Input 
                readOnly={editMode} 
                value={data?.email}
                name='email'
                type='email'
                onChange={(event) => setData(prevState => ({
                    ...prevState,
                    email: event.target.value
                }))}
                
                />
                <Input 
                readOnly={editMode} 
                value={data?.address?.street}
                name='street'
                type='text'
                onChange={(event: React.FormEvent<HTMLInputElement>) => setData(prevState => ({
                    ...prevState,
                    address: {
                        ...prevState.address,
                        street: event.target.value,
                    }
                }))}
                
                />
                <Input 
                readOnly={editMode} 
                value={data?.address?.city}
                name='city'
                type='text'
                onChange={(event) => setData(prevState => ({
                    ...prevState,
                    address: {
                        ...prevState.address,
                        city: event.target.value,
                    }
                }))}
                
                />
                <Input 
                readOnly={editMode} 
                value={data?.address?.zipcode}
                name='zipcode'
                type='text'
                onChange={(event) => setData(prevState => ({
                    ...prevState,
                    address: {
                        ...prevState.address,
                        zipcode: event.target.value,
                    }
                }))}
                
                />
                 <Input 
                readOnly={editMode} 
                value={data?.phone}
                name='phone'
                type='tel'
                onChange={(event) => setData(prevState => ({
                    ...prevState,
                    phone: event.target.value
                }))}
                
                />
                 <Input 
                readOnly={editMode} 
                value={data?.website}
                type='url'
                name='website'
                onChange={(event) => setData(prevState => ({
                    ...prevState,
                    website: event.target.value
                }))}
                
                />
                <TextArea
                readOnly={editMode}
                name='Comment'
                value={undefined}
                onChange={(event) => setData(prevState => ({
                    ...prevState,
                    comment: event.target.value
                }))}
                
                />

               </div>
              
               <button className={cn(style.button, {[style.disabled] : editMode})} disabled={editMode}>Отправить</button>
           </form>
        </div>
    )
}
export default UserPage;