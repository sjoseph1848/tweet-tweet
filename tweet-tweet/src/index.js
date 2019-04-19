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
        <div className="buttons">
          <ReplyButton/>
          <RetweetButton/>
          <LikeButton />
          <MoreOptionsButton />        
        </div>
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


//Buttons 
const Time = () => 
  <span className="time">
    3h ago
  </span>;


const ReplyButton = () => 
  <i className=" fa fa-reply \ 
    reply-button" />

const RetweetButton = () => 
  <i className="fa fa-retweet \
    retweet-button" />;

const LikeButton = () => 
  <i className="fa fa-heart \
      like-button" />;
const MoreOptionsButton = () => 
  <i className="fa fa-ellipsis-h \
    more-options-buttons" />;

ReactDOM.render(
  <Tweet/>,
  document.querySelector('#root')
)
