/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import "./index.css"

import SecondTitle from "../../components/Titles/SecondTitle";

import { StudiesIconMobile } from "../../components/StudiesIconMobile"

export default () => {
  return (
    <section className="qualification section" id="studies-mobile">
      <SecondTitle title="Qualificação." />
      
      <div className="qualification__container container">
        <StudiesIconMobile firstText="Cursos" secondText="Bootcamps" />
  
        <div className="qualification__section">

          {/*Qualification content 1 */}
          <div className="qualification__content qualification__active" data-content id="education">
            {/*Qualification 1 */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Computer Enginner</h3>
                <span className="qualification__subtitle">
                  Peru - University
                </span>
                <div className="qualification__calendar">
                  <i class="ri-calendar-2-line"></i>
                  2009 - 2014
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            {/*Qualification 2 */}
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Computer Enginner</h3>
                <span className="qualification__subtitle">
                  Peru - University
                </span>
                <div className="qualification__calendar">
                  <i class="ri-calendar-2-line"></i>
                  2009 - 2014
                </div>
              </div>
            </div>

            {/*Qualification 3 */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Computer Enginner</h3>
                <span className="qualification__subtitle">
                  Peru - University
                </span>
                <div className="qualification__calendar">
                  <i class="ri-calendar-2-line"></i>
                  2009 - 2014
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            {/*Qualification 4 */}
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                {/*<span className="qualification__line"></span>*/}
              </div>
              <div>
                <h3 className="qualification__title">Computer Enginner</h3>
                <span className="qualification__subtitle">
                  Peru - University
                </span>
                <div className="qualification__calendar">
                  <i class="ri-calendar-2-line"></i>
                  2009 - 2014
                </div>
              </div>
            </div>
            
          </div>

          {/*Qualification content 2 */}
          <div className="qualification__content" data-content id="work">
            {/*Qualification 1 */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Frontend developer</h3>
                <span className="qualification__subtitle">
                  Peru - University
                </span>
                <div className="qualification__calendar">
                  <i class="ri-calendar-2-line"></i>
                  2009 - 2014
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            {/*Qualification 2 */}
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Computer Enginner</h3>
                <span className="qualification__subtitle">
                  Peru - University
                </span>
                <div className="qualification__calendar">
                  <i class="ri-calendar-2-line"></i>
                  2009 - 2014
                </div>
              </div>
            </div>

            {/*Qualification 3 */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Computer Enginner</h3>
                <span className="qualification__subtitle">
                  Peru - University
                </span>
                <div className="qualification__calendar">
                  <i class="ri-calendar-2-line"></i>
                  2009 - 2014
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                {/*<span className="qualification__line"></span>*/}
              </div>
            </div> 
          </div>
        </div>
      </div>
    </section>
  );
};
