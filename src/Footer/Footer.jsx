import React from 'react';

import './footer.css';

function Footer () {

  return (
    <section className="footer">
      <hr className="footer-seperator" />
     
      <section className="footer-info">
        <section className="footer-info-left">
          <section className="footer-info1">
           <b> About </b>
          </section>
          <section className="footer-info__name">
            <a href="/">Blogs</a> 
          </section>
          <section className="footer-info__returns">
        <a href="/">Our Team</a>  
            <br />
        <a href="/">Customers</a>    
          </section>        
        </section>
        <section className="footer-info-center">
          <secttion className="footer-info2">
           <b> Support </b> 
          </secttion>
          <section className="footer-info__email">
          <a href="/">Support Center</a> 
          </section>
          <section className="footer-info__terms">
            <a href="/">Feedback</a><br />
           <a href="/">Learning Center</a> 
            <br />
            
          </section>
        </section>
        <section className="footer-info-right">
          <section className="footer-info__number">
         <b> Contact Us </b>  
          </section>
          <section className="footer-info__contact">
            phone: +251 465551910
            <br />
            Address: Hossana, Ethiopia <br />
            Post Box 667, Hosaena, Ethiopia
          </section>
        </section>
      </section>
      <hr className="footer-seperator" />
      <h6 className='footer-list'>
      Copyright @2023 Wachemo Universtiy (Developed and Maintained by Samuel Teshale). All Rights Reserved.
      </h6>
    </section>
    
  )

}

export default Footer;