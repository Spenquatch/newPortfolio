import { useEffect } from "react";
import { buttonHover } from "../utils";


const About = () => {
  useEffect(() => {
    buttonHover();
  }, []);

  return (
    <div className="section about" id="next_section">
      <div className="content content-box">
        {/* image */}
        <div className="image">
          <img src="images/profilePic.jpg" alt="" />
        </div>
        {/* desc */}
        <div className="desc">
          <p>
            Hello there! I'm <strong>Spenser McConnell</strong>, a passionate Web Developer and Technical Project Manager from Indianapolis, Indiana. With a <strong>analytical</strong> mind and a drive for <strong>results</strong>, I've dedicated my career to <strong>empowering</strong> my clients by boosting their brand visibility, driving revenue growth, and <strong>ensuring profitability</strong>. I take great pride in my <strong>interpersonal skills</strong>, and a strong combination of <strong>leadership</strong>, clear communication, and tenacious <strong>problem-solving skills</strong> have fueled my journey.
          </p>
          <div className="info-list">
            <ul>
              <li>
                <strong>Freelance:</strong> Available
              </li>
              <li>
                <strong>Location:</strong> Indianapolis, IN
              </li>
              <li>
                <strong>Phone:</strong>{" "}
                <a href="tel:812-343-5020">812.343.5020</a>
              </li>
              <li>
                <strong>E-mail:</strong>{" "}
                <a
                  rel="noreferrer"
                  href="mailto:spensermcconnell@gmail.com"
                >
                  spensermcconnell@gmail.com
                </a>
              </li>
            </ul>
          </div>
          <div className="bts">
            <a href="downloadFiles/spenserMcconnellResume2023.pdf"
               target="_blank"
               download
               rel="noreferrer" 
               className="btn btn-6">
            <span className="btn-text">Download CV</span>
              <span className="btn-bg"></span>
            </a>
          </div>
        </div>
        <div className="clear" />
      </div>
    </div>
  );
};

export default About;
