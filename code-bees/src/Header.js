import React from 'react'
import './Header.css';
import { Link, useHistory } from 'react-router-dom';
import PersonIcon from '@material-ui/icons/Person';
import CommentIcon from '@material-ui/icons/Comment';
import AdbIcon from '@material-ui/icons/Adb';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
function Header({ backButton }) { //header function
  const history = useHistory();
  return (
    <div className="header">
    {backButton ? (
      <IconButton onClick={() => history.replace(backButton)}>
        <ArrowBackIosIcon className="header_icon" />
      </IconButton>
    ):(
      <IconButton>
        <PersonIcon className="header_icon"/>
      </IconButton>
    )}
    <Link to="/">
      <img
      src="https://raw.githubusercontent.com/laxminagln/CodeBees/master/cb.png?token=AIFJEBX3I3BY6WCRL73NJDK7GLAEU"
      className="header_logo"
      alt="Code Bees"
      />
    </Link>
    <Link to="/chat">
      <IconButton>
        <CommentIcon className="header_icon"/>
        </IconButton>
    </Link>
    </div>
  )
}
export default Header //exporting header
