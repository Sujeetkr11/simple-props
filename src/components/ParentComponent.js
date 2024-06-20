import React from 'react';
import Child from './ChildComponent';

function ParentComponent () {
    return (
      <div>
        <h1>This is parent header</h1>
        < Child message = "Sending the message from Parent to Child" />
      </div> 
    );

}

export default ParentComponent; 