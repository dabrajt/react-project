import React from 'react';
import ReactDOM from 'react-dom';

const Hello = () => (<div><h1>hello dabrajt</h1></div>);

const page = (
  <div>
    <Hello />
  </div>
);

ReactDOM.render(page, document.querySelector('#app'));
