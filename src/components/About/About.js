import React from "react";

import { Container, Row, Col } from "reactstrap";


import "./about.css";

const About = () => {
  return (
    <section className="about_content4" >
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__img">
              <img src="https://wcu.edu.et/Gallery/GraduationDay/30grd.jpg" alt="about-img" />
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__content">
              <h2>Habtamu Abebe (PhD) 
President of Wachemo University
March 2022</h2>
              <p className="about__content1">
              Wachemo University is one of the leading comprehensive universities in Ethiopia founded in 2004 E.C. The university has been working hard to achieve its mission of teaching learning, research and community service, and it has continued producing qualified and productive manpower. To this end, the university focuses on academic quality, equity, and fairness.

Wachemo University has three campuses: Main campus, Durame campus and Nigist Eleni Mohamed Memorial Comprehensive Specialized Hospital. It has also seven agricultural and technology transfer centers, and seven teaching and centers.

Finally, Wachemo University Future Focus Areas: Agro-processing, Sustainable Energy, Indigenous Knowledge and Green Tourism, and Integrated Town Development.
              </p>

              <div className="about__counter">
                <div className=" d-flex gap-5 align-items-center">
                  <div className="single__counter">
                   

                    <p className="counter__title">Vision</p>
                  </div>

                  
                </div>

                <div className=" d-flex gap-5 align-items-center">
                  <div className="single__counter">
                    

                    <p className="counter__title1">Aspires to become one of the ten first  universities in Ethiopia and home of brilliants by 2017 E.C</p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;