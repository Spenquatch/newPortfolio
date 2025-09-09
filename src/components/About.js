import { useEffect } from "react";
import Link from "next/link";
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
            I&apos;ve been building software for over 15 years, and for the last five, I&apos;ve been hooked on AI development. It started as a way to boost my own workflow with smarter testing, automated code reviews, and instant prototypes. Then the rabbit hole opened, and I went all in. Now I&apos;m building 8-stage prompt frameworks, self-improving RL feedback loops, synthetic training data pipelines, and real-time streaming media servers for in-meeting AI avatars.
          </p>
          <p style={{ marginTop: '15px' }}>
            These days I treat AI like any other part of the stack. I understand how it works, stress-test it, and only keep what&apos;s useful. I squeeze most of this work into early mornings and late nights, between managing 3½-year-old twins. When your time&apos;s precious, you quickly learn the difference between what sounds cool and what actually works.
          </p>
          <div className="info-list">
            <ul>
              <li>
                <strong>Freelance:</strong> Available (select projects)
              </li>
              <li>
                <strong>Location:</strong> Indianapolis, IN
              </li>
              <li>
                <strong>Phone:</strong>{" "}
                <a href="tel:812-343-5020">812-343-5020</a>
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
            <Link href="/contacts#section-contacts" legacyBehavior>
              <a className="btn btn-6">
                <span className="btn-text">Get in Touch!</span>
                <span className="btn-bg"></span>
              </a>
            </Link>
          </div>
        </div>
        <div className="clear" />
      </div>
    </div>
  );
};

export default About;
