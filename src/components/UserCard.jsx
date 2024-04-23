import React from 'react'

const UserCard = ({user}) => {

   // console.log(user);

   const handleDelete = () =>{

   }

   const handleEdit = () => {

   }

  return (
    <section>
        <h2>{user.first_name} {user.last_name}</h2>
        <hr />
        <ul>
            <li><span>Email: </span><span>{user.email}</span></li>
            <li><span>Birthday: </span><span>{user.birthday}</span></li>
        </ul>
        <hr />
        <div>
            <button onClick={handleDelete}>Delete</button>
            <button onClick={handleEdit}>Edit</button>
        </div>
    </section>
  )
}

export default UserCard;
