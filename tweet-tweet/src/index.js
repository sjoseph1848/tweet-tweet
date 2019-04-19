import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Tweet() {
  return(
    <div className="tweet">
      <Avatar />
      <div className="conten">
        <NameWithHandle/>
        <Message />
     </div>
    </div>
  );
}

function Avatar() {
  return (
    <img
    src="https://source.unsplash.com/user/erondu/daily"
    className="avatar"
    alt="avatar" />
  );
}

function Message() {
  return (
    <div className="message">
      Blah Blah Blah
    </div>
  );
}

function NameWithHandle() {
  return (
    <span 
      className="name-with-handle">
      <span className="name">
        Rob Johnson 
      </span>
      <span className="handle">
        @robjohnson123
      </span>
    </span>
  );
}

ReactDOM.render(
  <Tweet/>,
  document.querySelector('#root')
)
