import React from 'react';

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