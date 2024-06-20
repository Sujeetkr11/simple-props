import React from 'react';
import ChildComponent from './ChildComponent';

export default function ParentComponent () {
  return (
    <div>
        <h1>This is parent header</h1>
        < ChildComponent message = "Sending the message from Parent to Child" />
    </div>
  );
}