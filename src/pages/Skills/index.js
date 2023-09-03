/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import "./index.css";

import SecondTitle from "../../components/Titles/SecondTitle";

import AdobePhotoImage from "../../images/adobe-photoshop-2.svg"
import AdobeXdImage from "../../images/adobe-xd-1.svg"
import CssImage from "../../images/css-3.svg"
import FigmaImage from "../../images/figma-1.svg"
import GitIcon from "../../images/git-icon.svg"
import HtmlImage from "../../images/html-1.svg"
import InvisionImage from "../../images/invision.svg"
import JavascriptImage from "../../images/logo-javascript.svg"
import ReactImage from "../../images/react-2.svg"
import SketchImage from "../../images/sketch-2.svg"

export default () => {
  return (
    <section className="skills section" id="skills">
      <SecondTitle title="Skills." />
      <span className="section__subtitle">My favorite skills</span>

      <div className="skills__container container grid section__border">
        {/*Skills 1 */}
        <div className="skills__content">
          <h3 className="skills__title">
            <i className="ri-braces-line"></i>Frontend Developer
          </h3>

          <div className="skills__info">
            <div className="skills__data">
              <div className="skills__blob">
                <img src={HtmlImage} alt="skills"></img>
              </div>

              <h3 className="skills__name">Html</h3>
              <span className="skills__subtitle">Intermediate</span>
            </div>

            <div className="skills__data">
              <div className="skills__blob">
                <img src={CssImage} alt="skills"></img>
              </div>

              <h3 className="skills__name">CSS</h3>
              <span className="skills__subtitle">Intermediate</span>
            </div>

            <div className="skills__data">
              <div className="skills__blob">
                <img src={JavascriptImage} alt="skills"></img>
              </div>

              <h3 className="skills__name">JavaScript</h3>
              <span className="skills__subtitle">Intermediate</span>
            </div>

            <div className="skills__data">
              <div className="skills__blob">
                <img src={ReactImage} alt="skills"></img>
              </div>

              <h3 className="skills__name">React</h3>
              <span className="skills__subtitle">Intermediate</span>
            </div>

            <div className="skills__data">
              <div className="skills__blob">
                <img src={GitIcon} alt="skills"></img>
              </div>

              <h3 className="skills__name">Git</h3>
              <span className="skills__subtitle">Intermediate</span>
            </div>
          </div>
        </div>

        {/*Skills 2 */}
        <div className="skills__content">
          <h3 className="skills__title">
            <i className="ri-pantone-line"></i>Web Design
          </h3>

          <div className="skills__info">
            
            <div className="skills__data">
              <div className="skills__blob">
                <img src={FigmaImage} alt="skills"></img>
              </div>

              <h3 className="skills__name">Figma</h3>
              <span className="skills__subtitle">Intermediate</span>
            </div>

            <div className="skills__data">
              <div className="skills__blob">
                <img src={SketchImage} alt="skills"></img>
              </div>

              <h3 className="skills__name">Sketch</h3>
              <span className="skills__subtitle">Intermediate</span>
            </div>

            <div className="skills__data">
              <div className="skills__blob">
                <img src={AdobeXdImage} alt="skills"></img>
              </div>

              <h3 className="skills__name">Adobe XD</h3>
              <span className="skills__subtitle">Intermediate</span>
            </div>

            <div className="skills__data">
              <div className="skills__blob">
                <img src={AdobePhotoImage} alt="skills"></img>
              </div>

              <h3 className="skills__name">Photoshop</h3>
              <span className="skills__subtitle">Intermediate</span>
            </div>

            <div className="skills__data">
              <div className="skills__blob">
                <img src={InvisionImage} alt="skills"></img>
              </div>

              <h3 className="skills__name">InvisionApp</h3>
              <span className="skills__subtitle">Intermediate</span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
