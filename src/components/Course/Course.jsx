import React from "react";
import { Container, Row, Col } from "reactstrap";

import IM from "../../assets/IM.png";
import IM1 from "../../assets/IM1.png";
import IM2 from "../../assets/IM2.png";
import CourseCard from "./CourseCard";
import "./course.css";


const coursesData = [
  {
    id: "01",
    title: "Introduction To Javascript",
   
    imgUrl: IM,
  },

  {
    id: "02",
    title: "Introduction to C++",
    
    imgUrl: IM1,
  },

  {
    id: "03",
    title: "Introduction Fundamental Electrical Circuit",
    imgUrl: IM2,
  },
];

const Courses = () => {
  return (
    <section className="background-img">
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <div className="course__top d-flex justify-content-between align-items-center">
              <div className="course__top__left w-50">
                <h2>Our Courses</h2>
                
              </div>

              
            </div>
          </Col>
          {coursesData.map((item) => (
            <Col lg="4" md="6" sm="6">
              <CourseCard key={item.id} item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Courses;
