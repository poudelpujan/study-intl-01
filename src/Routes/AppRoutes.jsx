import React, { useEffect, Suspense } from "react";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";

import Home from "../pages/Home/Home";
import { About } from "../pages/About/About";
import Process from "../pages/Process/Process";
import Gallery from "../pages/Gallery/Gallery";
import ContactUs from "../pages/Contacts/ContactUs";
import CountryUsa from "../pages/Countries/CountryUsa/CountryUsa";
import CountryCanada from "../pages/Countries/CountryCanada/CountryCanada";
import CountryAustralia from "../pages/Countries/CountryAustralia/CountryAustralia";
import CountryNewZealand from "../pages/Countries/CountryNewZealand/CountryNewZealand";
import CountryJapan from "../pages/Countries/CountryJapan/CountryJapan";
import CountryKorea from "../pages/Countries/CountryKorea/CountryKorea";
import CountryUk from "../pages/Countries/CountryUk/CountryUk";
import CoursesGed from "../pages/Courses/CoursesGed/CoursesGed";
import CoursesToefl from "../pages/Courses/CoursesToefl/CoursesToefl";
import CoursesSat from "../pages/Courses/CoursesSat/CoursesSat";
import CoursesPte from "../pages/Courses/CoursesPte/CoursesPte";
import CoursesIelts from "../pages/Courses/CoursesIelts/CoursesIelts";
import { ScrollToTop } from "./ScrollToTop";

const AppRoutes = () => {
  const location = useLocation();
  useEffect(() => {
    const segments = document.title.split(" | ");
    segments[segments.length - 1] = segments[segments.length - 1].replace(
      /\/$/,
      ""
    );
    document.title = segments.join(" | ");
  }, [location]);

  return (
    <div>
      <ScrollToTop />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about-us/" element={<About title="About Us" />} />
        <Route exact path="/process/" element={<Process title="Process" />} />
        <Route exact path="/gallery/" element={<Gallery title="Gallery" />} />

        {/* study in abroad routes */}
        <Route
          exact
          path="/study-in/countries/canada/"
          element={<CountryCanada title="Study in Canada" />}
        />
        <Route
          exact
          path="/study-in/countries/australia/"
          element={<CountryAustralia title="Study in Australia" />}
        />
        <Route
          exact
          path="/study-in/countries/usa/"
          element={<CountryUsa title="Study in USA" />}
        />
        <Route
          exact
          path="/study-in/countries/uk/"
          element={<CountryUk title="Study in UK" />}
        />
        <Route
          exact
          path="/study-in/countries/new-zealand/"
          element={<CountryNewZealand title="Study in New Zealand" />}
        />
        <Route
          exact
          path="/study-in/countries/japan/"
          element={<CountryJapan title="Study in Japan" />}
        />
        <Route
          exact
          path="/study-in/countries/korea/"
          element={<CountryKorea title="Study in Korea" />}
        />

        {/* course routes */}
        <Route
          exact
          path="/courses/ielts/"
          element={<CoursesIelts title="Ielts" />}
        />
        <Route
          exact
          path="/courses/pte-a/"
          element={<CoursesPte title="PTE-A" />}
        />
        <Route
          exact
          path="/courses/sat/"
          element={<CoursesSat title="SAT" />}
        />
        <Route
          exact
          path="/courses/ged/"
          element={<CoursesGed title="GED" />}
        />
        <Route
          exact
          path="/courses/toefl/"
          element={<CoursesToefl title="TOEFL" />}
        />

        <Route
          exact
          path="/contact-us/"
          element={<ContactUs title="Contact Us" />}
        />
      </Routes>
    </div>
  );
};

export default AppRoutes;
