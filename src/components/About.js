import React from "react";

const About = () => {
  return (
    <>
      <div className="card text-center">
        <div className="card-header">About Us</div>
        <div className="card-body">
          <h5 className="card-title">Created By -</h5>
          <p className="card-text">
            Abhijeet Gupta Btech CSE UnderGraduate
          </p>
          <a href="/" className="btn btn-primary">
            Go to Home page
          </a>
        </div>
        <div className="card-footer text-muted">2 days ago</div>
      </div>
    </>
  );
};

export default About;
