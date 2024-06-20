import React from 'react';

export default function ChildComponent(props) {
    return (
        <div>
            <h2>This is Child Component</h2>
            <h3>{props.message}</h3>    {/* make sure to use the props inside {}  */}
        </div>
    );

}