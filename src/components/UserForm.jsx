import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import './styles/userForm.css'

const UserForm = ({createUser, updateUser, editUser, setUpdateUser, isOpen, setIsOpen}) => {
const {handleSubmit, register, reset} = useForm();

useEffect(() => {
    if (updateUser) {
        reset(updateUser);
        setIsOpen(true);
    }
}, [updateUser]);

const submit = data => {
    if (updateUser) {
        editUser('users', data, updateUser.id);
        setUpdateUser();
    } else {
        createUser('users', data);
    }
    setIsOpen(false);
   reset({
    firs_name: '',
    last_name: '',
    email: '',
    password: '',
    birthday: '',
   });
}
const handleClose = () => {
    setIsOpen(false);
    setUpdateUser();
    reset({
        firs_name: '',
        last_name: '',
        email: '',
        password: '',
        birthday: '',
       });

}

  return (
    <div className={`form__back ${isOpen && 'active'}`}>
     <form className='form' onSubmit={handleSubmit(submit)}>

        <button onClick={handleClose} type='button' className='form__close'><ion-icon name="close-outline"></ion-icon></button>
        <h2 className='form__title'>User Form</h2>
        <div className='form__item'>
            <label htmlFor="first_name">First name </label>
            <input className='form__items' {...register('first_name')} id= 'first_name' type="text" />
        </div>
        <div className='form__item'>
            <label htmlFor="last_name">Last name </label>
            <input className='form__items' {...register('last_name')} id= 'last_name' type="text" />
        </div>
        <div className='form__item'>
            <label htmlFor="email">Email </label>
            <input className='form__items' {...register('email')} id= 'email' type="text" />
        </div>
        <div className='form__item'>
            <label htmlFor="password">Password </label>
            <input className='form__items' {...register('password')} id= 'password' type="password" />
        </div>
        <div className='form__item'>
            <label htmlFor="birthday">Birthday </label>
            <input className='form__items' {...register('birthday')} id= 'birthday' type="date" />
        </div>
        <button className='form__btn'>Submit</button>
     </form>

    </div>
  )
}

export default UserForm;
