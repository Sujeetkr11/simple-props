import React from 'react';

//chaning the props with exact variable which is coming from app.js
//put the variables inside {} comma seperated. 
export default function UserCard (props) { 
    return (
         <div>
            <h3>Inside user card: </h3>
            <ul>
                <ol>name = {props.name}</ol>
                <ol>age = {props.age}</ol>
                <ol>occupation = {props.occupation}</ol>
            </ul>
         </div>      
    );
}