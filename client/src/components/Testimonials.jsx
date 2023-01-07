import React from "react";

function Testimonials() {
  return (
    <div className="container testimonial-div">
      <div
        id="testimonialCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://bballershoopsroswell.com/wp-content/uploads/2022/08/8_Team.jpg"
              className="d-block w-100"
              alt="Lil Ballers Team"
            />
            <div className="testimonial text-center">
              <p>
                "Coach Kevin is a phenomenal basketball coach. He is patient,
                knowledgeable, and great at helping kids build both confidence
                and skills. Our son learned a lot about being a team player and
                the importance of good sportsmanship, and our family literally
                can’t say enough great things about Coach Kevin’s leadership.
                Would highly recommend his camp to all."
              </p>
              <p>-Millie R.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://bballershoopsroswell.com/wp-content/uploads/bb-plugin/cache/5_10-shooting-768x1024-portrait.jpg"
              className="d-block w-100"
              alt="..."
            />
            <div className="testimonial text-center">
              <p>
                "Coach Kevin has been coaching my boy for 3 seasons and he is
                amazing! He has so much patience with the kids and focuses on
                teaching the fundamentals while having fun. Tristan is always so
                excited to train with him."
              </p>
              <p>-Emily H.</p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#testimonialCarousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#testimonialCarousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Testimonials;
