import React from 'react';
import './Chats.css';
import Chat from './Chat';
function Chats() {
  return (
    <div className="chats">
      <Chat
        name="Laxmi"
        message="Wassup!"
        timestamp="40s ago"
        profilePic="..."
      />
      <Chat
        name="Nag"
        message="Yoooooooooo!"
        timestamp="40hrs ago"
        profilePic="..."
      />
      <Chat
        name="Laxnag"
        message="Whaaaatt!"
        timestamp="40min ago"
        profilePic="..."
      />
    </div>
  );
}
export default Chats;
