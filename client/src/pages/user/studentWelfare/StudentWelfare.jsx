import { Routes, Route } from "react-router-dom";
import Section1 from "./SW_Section1";
import HorizontalGallery from "./HorizontalGallery";
import KeyframeAnimation from "./KeyframeAnimation";
import CourseOutcomeCards from "./CourseOutcomeCards";

const About = () => {
  return (
    <div>
        <Section1/>
        <HorizontalGallery/>
        <KeyframeAnimation/>
        <CourseOutcomeCards/>
    </div>
  );
};

export default About;
