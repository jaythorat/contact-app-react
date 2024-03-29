import React from "react";
import user from "../images/user.png"


const ContactCard = (props) =>{
    const {id,name,email} = props.contact;
    return (
        <div className="item">
            <img className="ui avatar image" src={user} alt ="user" ></img>
                <div className="content">
                    <div className="header">{name}</div>
                    <div className="">{email}</div>
                </div>
                <i className="trash alternate outline icon"style ={{color:"red",}} 
                onClick={()=> props.clickHander(id)}>

                </i>
            </div>
    );

}

export default ContactCard;