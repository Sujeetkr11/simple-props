import React from 'react';

//chaning the props with exact variable which is coming from app.js
//put the variables inside {} comma seperated. 
export default function UserCard ({name, age, occupation}) { 
    return (
         <div>
            <h3>Inside user card: </h3>
            <ul>
                <ol>name = {name}</ol>
                <ol>age = {age}</ol>
                <ol>occupation = {occupation}</ol>
            </ul>
         </div>      
    );
}