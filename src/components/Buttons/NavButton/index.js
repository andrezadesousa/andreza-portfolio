/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Component } from "react";
import DarkThemeAnimation from '../../../Animation/DarkTheme'

export class NavButton extends Component {
  render() {
    return (
      <div onClick={DarkThemeAnimation} className="nav__btns">
        {/* Theme change */}
        <i className="uil uil-moon change-theme" id="theme-button">
        </i>
      </div>
    );
  }
}
