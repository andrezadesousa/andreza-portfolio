import React from "react";
import './index.css'

import { homeLinks } from '../../mock/HomeLinks/index'

export function handleModalHeader() {
    return (
        <ul className="nav__list">
            {homeLinks.map((homeLink) => {
                return (
                    <li key={homeLink.id} className="nav__item">
                        <a href={homeLink.ref} className={homeLink.classNav}>
                            {homeLink.text}
                        </a>
                    </li>
                )
            })}
        </ul>
    )
}