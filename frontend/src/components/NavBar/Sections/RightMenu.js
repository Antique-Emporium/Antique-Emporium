/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Menu } from 'antd';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { useSelector } from "react-redux";

function RightMenu(props) {
    return (
      <Menu mode={props.mode}>
        <Menu.Item key="logout">
          <a onClick={() => console.log("Logged out")}>Logout</a>
        </Menu.Item>
      </Menu>
    )
  }

export default withRouter(RightMenu);