/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Component } from "react";
import { UilHouseUser } from "@iconscout/react-unicons";
import { Data } from "../mock/NavItemData";
import HeaderAnimation from '../Animation/HeaderAnimation'

export class NavMenu extends Component {
  render() {
    return (
      <div className="nav__menu" id="nav-menu">
        <ul onClick={HeaderAnimation} className="nav__list">
          <li className="nav__item">
            <a href="#home" className="nav__link active-link">
              <i className="nav__icon">
                <UilHouseUser></UilHouseUser>
              </i>
              <span className="nav__name">Home</span>
            </a>
          </li>
          {Data.map(({ id, link, ref, icon, name }) => {
            return (
              <li key={id} className="nav__item" id={link}>
                <a href={ref} className="nav__link">
                  <i className="nav__icon">{icon}</i>
                  <span className="nav__name">{name}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
