import React from "react";
import "./Testimonial.scss";
import { Codes } from "../../assets/images";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";

function Testimonial() {
  const generateStars = (rating) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<FaStar key={i} className="star-icon" />);
    }
    return stars;
  };

  return (
    <section className="tesimonial-container">
      <h1>Testimonials</h1>
      <div className="say">
        What are amazing customers <span className="span-color">say</span>
      </div>
      <div className="testimonial-wrapper">
        <FaChevronLeft className="chevron-icon" />

        <div className="testimonial">
          <img src={Codes} alt=" codes image" width={130} height={100} />
          <div className="stars">{generateStars(5)}</div>
          <p>
            "Norr has been a game-changer for our event planning business. Their
            intuitive platform and excellent customer service have made the
            process seamless and efficient. We highly recommend Norr to anyone
            looking to take their events to the next level."
          </p>
          <h3>Fabrice Mokfembam</h3>
        </div>
        <FaChevronRight className="chevron-icon" />
      </div>
    </section>
  );
}

export default Testimonial;
