import React, { useState } from 'react';
import './ChatScreen.css'
import Avatar from '@material-ui/core/Avatar';
function ChatScreen() {
  const [input,setInput] = useState([])
  const [messages, setMessages] = useState([
    {
      name: 'Laxnag',
      image: '...',
      message: 'Whats up'
    },
    {
      message: 'Wassup'
    },
  ]);
  const handleSend = e => {
    e.preventDefault();
    setMessages([...messages,{message:input}]);
    setInput('');
  }
  return (
    <div className="chatScreen">
      <p className="chatScreen_timestamp">You matched with her on 04/01/99</p>
      {messages.map((message) =>(
        message.name ? (
          <div className="chatScreen_message">
            <Avatar
              className="chatScreen_image"
              alt={message.name}
              src={message.image}
            />
            <p className="chatScreen_text">
              {message.message}
            </p>
          </div>
        ):(
          <div className="chatScreen_message">
            <p className="chatScreen_textUser">
              {message.message}
            </p>
          </div>
        )
      ))}
        <form className="chatScreen_input">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="chatScreen_inputField"
            placeholder="Type your message"
            type="text"
          />
          <button
            onClick={handleSend}
            type="submit"
            className="chatScreen_inputButton">SEND</button>
        </form>
    </div>
  );
}
export default ChatScreen;
