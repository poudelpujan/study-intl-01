import React from "react";
import { AboutButton } from "../../Buttons/buttons";
import { CourseCards } from "../../Layouts/Cards/Cards";
import { StudyAbroadCards } from "../Cards/Cards";

export const ColumnAbout = ({ title }) => {
  return (
    <section className="is__aboutColumn ">
      <div className="is__aboutColumn-wrapper container">
        <div className="is__aboutColumn-wrapper-content">
          <div className="is__aboutColumn-wrapper-content-title">
            <h1>{title}</h1>
          </div>

          <div className="is__aboutColumn-wrapper-content-desc">
            <p>
              IStudy International Education is committed to provide the optimal
              assistance for Nepalese students seeking education at
              international educational institutions
            </p>
          </div>
          <div className="is__aboutColumn-btn">
            <AboutButton />
          </div>
        </div>
      </div>
    </section>
  );
};

export const ColumnCourses = ({ title }) => {
  return (
    <section className="is__courses">
      <div className="is__courses-wrapper container">
        <div className="is__courses-wrapper-title">
          <h1>{title}</h1>
        </div>
        <div className="is__courses-wrapper-content">
          <CourseCards />
          {/* <div className="is__courses-wrapper-content-cards"></div> */}
        </div>
      </div>
    </section>
  );
};

export const ColumnStudyAbroad = ({ title }) => {
  return (
    <section className=" is__studyAbroad">
      <div className="is__studyAbroad-wrapper container">
        <div className="is__studyAbroad-wrapper-title">
          <h1>{title}</h1>
        </div>
        <div className="is__StudyAbroad-wrapper-content">
          <StudyAbroadCards />
        </div>
      </div>
    </section>
  );
};
