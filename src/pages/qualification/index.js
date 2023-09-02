/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import "./index.css";

import SectionTitle from "../../components/Titles/SectionTitle";
import SectionSubtitle from "../../components/Titles/SectionSubtitle";

export default () => {
  return (
    <section className="qualification section bd-container" id="qualification">
      <SectionSubtitle title="Experience and education" />
      <SectionTitle title="Qualification" />

      <div className="qualification__container bd-grid">
        <div className="qualification__content">
          <h2 className="qualification__title">
            <i className="bx bx-briefcase-alt qualification__title-icon"></i>
            Work Experience
          </h2>

          <div className="bd-grid">
            <div className="qualification__data">
              <h3 className="qualification__area">Senior Front end</h3>

              <div className="qualification__box">
                <span className="qualification__work">
                  <i className="bx bx-briefcase-alt qualification__-icon"></i>
                  Adobe - New York
                </span>
                 
                <span className="qualification__work">
                  <i className="bx bx-calendar-alt qualification__-icon"></i>
                  Jan 2019 - Aug 2019
                </span>
              </div>
            </div>
            
            <div className="qualification__data">
              <h3 className="qualification__area">Senior Front end</h3>

              <div className="qualification__box">
                <span className="qualification__work">
                  <i className="bx bx-briefcase-alt qualification__-icon"></i>
                  Adobe - New York
                </span>
                 
                <span className="qualification__work">
                  <i className="bx bx-calendar-alt qualification__-icon"></i>
                  Jan 2019 - Aug 2019
                </span>
              </div>
            </div>

            <div className="qualification__data">
              <h3 className="qualification__area">Senior Front end</h3>

              <div className="qualification__box">
                <span className="qualification__work">
                  <i className="bx bx-briefcase-alt qualification__-icon"></i>
                  Adobe - New York
                </span>
                 
                <span className="qualification__work">
                  <i className="bx bx-calendar-alt qualification__-icon"></i>
                  Jan 2019 - Aug 2019
                </span>
              </div>
            </div>
          </div>

        </div>

        <div className="qualification__content">
          <h2 className="qualification__title">
            <i className="bx bx-book-bookmark qualification__title-icon"></i>
            Education
          </h2>

          <div className="bd-grid">
            <div className="qualification__data">
              <h3 className="qualification__area">Conputer tech</h3>

              <div className="qualification__box">
                <span className="qualification__work">
                  <i className="bx bx-book-alt qualification__-icon"></i>
                  Lima - Computer institute
                </span>
                 
                <span className="qualification__work">
                  <i className="bx bx-calendar-alt qualification__-icon"></i>
                  Jan 2019 - Aug 2019
                </span>
              </div>
            </div>

            <div className="qualification__data">
              <h3 className="qualification__area">Conputer tech</h3>

              <div className="qualification__box">
                <span className="qualification__work">
                  <i className="bx bx-book-alt qualification__-icon"></i>
                  Lima - Computer institute
                </span>
                 
                <span className="qualification__work">
                  <i className="bx bx-calendar-alt qualification__-icon"></i>
                  Jan 2019 - Aug 2019
                </span>
              </div>
            </div>

            <div className="qualification__data">
              <h3 className="qualification__area">Conputer tech</h3>

              <div className="qualification__box">
                <span className="qualification__work">
                  <i className="bx bx-book-alt qualification__-icon"></i>
                  Lima - Computer institute
                </span>
                 
                <span className="qualification__work">
                  <i className="bx bx-calendar-alt qualification__-icon"></i>
                  Jan 2019 - Aug 2019
                </span>
              </div>
            </div>        

          </div>

        </div>
      </div>
    </section>
  );
};
