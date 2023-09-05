import React from "react";

const UserCard = (props) => {
 return (
    <>
        <div className='card text-bg-dark '>
            <p>Name: {props.name}</p>
            <p>Contact No.: {props.contactNumber}</p>
            <p>Age: {props.age}</p>
            <p>Address: {props.address}</p>
        </div>
    </>
 )
}

export default UserCard;