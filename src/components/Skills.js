import { useEffect } from "react";
import { createSkillsDot, dotResize } from "../utils";

export const DesignSkills = () => {
  return (
    <div className="section skills" id="section-skills">
      <div className="content">
        {/* title */}
        <div className="title">
          <div className="title_inner">Design Skills</div>
        </div>
        {/* skills items */}
        <div className="skills percent content-box">
          <ul>
            <li>
              <div className="name">Web Design</div>
              <div className="progress ">
                <div className="percentage" style={{ width: "90%" }}>
                  <span className="percent">90%</span>
                </div>
              </div>
            </li>
            <li>
              <div className="name">Illustrations</div>
              <div className="progress ">
                <div className="percentage" style={{ width: "70%" }}>
                  <span className="percent">70%</span>
                </div>
              </div>
            </li>
            <li>
              <div className="name">Photoshop</div>
              <div className="progress ">
                <div className="percentage" style={{ width: "95%" }}>
                  <span className="percent">95%</span>
                </div>
              </div>
            </li>
            <li>
              <div className="name">Graphic Design</div>
              <div className="progress ">
                <div className="percentage" style={{ width: "85%" }}>
                  <span className="percent">85%</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export const LanguagesSkills = () => {
  useEffect(() => {
    dotResize();
    setTimeout(createSkillsDot, 1000);
  }, []);

  return (
    <div className="section skills" id="section-skills-lang">
      <div className="content">
        {/* title */}
        <div className="title">
          <div className="title_inner">Languages Skills</div>
        </div>
        {/* skills items */}
        <div className="skills percent content-box">
          <ul>
            <li>
              <div className="name">English</div>
              <div className="progress">
                <div className="percentage" style={{ width: "90%" }}>
                  <span className="percent">90%</span>
                </div>
              </div>
            </li>
            <li>
              <div className="name">German</div>
              <div className="progress">
                <div className="percentage" style={{ width: "70%" }}>
                  <span className="percent">70%</span>
                </div>
              </div>
            </li>
            <li>
              <div className="name">Italian</div>
              <div className="progress">
                <div className="percentage" style={{ width: "55%" }}>
                  <span className="percent">55%</span>
                </div>
              </div>
            </li>
            <li>
              <div className="name">French</div>
              <div className="progress">
                <div className="percentage" style={{ width: "85%" }}>
                  <span className="percent">85%</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export const CodingSkills = () => {
  return (
    <div className="section skills" id="section-skills-code">
      <div className="content">
        {/* title */}
        <div className="title">
          <div className="title_inner">Coding Skills</div>
        </div>
        {/* skills items */}
        <div className="skills circles content-box">
          <ul>
            <li>
              <div className="name">WordPress</div>
              <div className="progress p90">
                {" "}
                {/* p90 = 90% circle fill color */}
                <div className="percentage">
                  <span className="percent">90%</span>
                </div>
                <span>90%</span>
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>
              </div>
            </li>
            <li>
              <div className="name">PHP / MYSQL</div>
              <div className="progress p75">
                {" "}
                {/* p75 = 75% circle fill color */}
                <div className="percentage">
                  <span className="percent">75%</span>
                </div>
                <span>75%</span>
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>
              </div>
            </li>
            <li>
              <div className="name">Angular / JavaScript</div>
              <div className="progress p85">
                {" "}
                {/* p85 = 85% circle fill color */}
                <div className="percentage">
                  <span className="percent">85%</span>
                </div>
                <span>85%</span>
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>
              </div>
            </li>
            <li>
              <div className="name">HTML / CSS</div>
              <div className="progress p95">
                {" "}
                {/* p95 = 95% circle fill color */}
                <div className="percentage">
                  <span className="percent">95%</span>
                </div>
                <span>95%</span>
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export const KnowledgeSkills = () => {
  return (
    <div className="section skills" id="section-skills-know">
      <div className="content">
        {/* title */}
        <div className="title">
          <div className="title_inner">Core Strengths</div>
        </div>
        {/* skills */}
        <div className="skills list content-box">
          <ul>
            <li>
              <div className="name">Front-End Development</div>
            </li>
            <li>
              <div className="name">Software/Product Development</div>
            </li>
            <li>
              <div className="name">Project Management</div>
            </li>
            <li>
              <div className="name">Brand Development</div>
            </li>
            <li>
              <div className="name">Digital Advertising</div>
            </li>
            <li>
              <div className="name">Digital & Social Media Marketing</div>
            </li>
            <li>
              <div className="name">E-Commerce & Sales Strategy</div>
            </li>
            <li>
              <div className="name">Customer Experience Management</div>
            </li>
            <li>
              <div className="name">User Experience (UX) Design</div>
            </li>    
            <li>
              <div className="name">User Interface (UI) Design </div>
            </li>                        
            <li>
              <div className="name">Rapid Prototyping</div>
            </li>  
            <li>
              <div className="name">Programming & Scripting</div>
            </li> 
            <li>
              <div className="name">Networking/System Administration</div>
            </li>  
            <li>
              <div className="name">Troubleshooting & Debugging</div>
            </li>  
            <li>
              <div className="name">Integration Testing</div>
            </li>
            <li>
              <div className="name">A/B Testing</div>
            </li>   
            <li>
              <div className="name">Installation & Configuration</div>
            </li> 
            <li>
              <div className="name">Market Research & Analysis</div>
            </li>
            <li>
              <div className="name">Lean & Agile Methodology</div>
            </li>
            <li>
              <div className="name">Cross-Functional Team Leadership</div>
            </li>   
            <li>
              <div className="name">Multidisciplinary Collaboration</div>
            </li> 
            <li>
              <div className="name">Interpersonal Communication</div>
            </li>
            <li>
              <div className="name">Staff Training & Development</div>
            </li>  
            <li>
              <div className="name">Coaching & Mentoring</div>
            </li>                                        
            <li>
              <div className="name">Complex Problem Solving</div>
            </li>    
            <li>
              <div className="name">Analytical Skills</div>
            </li>                                    
            <li>
              <div className="name">Time Management </div>
            </li>                                                                                                                                                                                                                                                            
          </ul>
        </div>
      </div>
    </div>
  );
};

export const TechnicalSkills = () => {
  return (
    <div className="section skills" id="section-tech-skills-know">
      <div className="content">
        {/* title */}
        <div className="title">
          <div className="title_inner">Technical Skills & Technologies</div>
        </div>
        {/* skills */}
        <div className="skills list content-box">
          <ul>
            <li>
              <div className="name">HTML5</div>
            </li>
            <li>
              <div className="name">CSS / SASS</div>
            </li>
            <li>
              <div className="name">JavaScript</div>
            </li>
            <li>
              <div className="name">jQuery</div>
            </li>
            <li>
              <div className="name">ReactJS</div>
            </li>
            <li>
              <div className="name">NextJS</div>
            </li>
            <li>
              <div className="name">NodeJS</div>
            </li>
            <li>
              <div className="name">PHP</div>
            </li>
            <li>
              <div className="name">WordPress</div>
            </li> 
            <li>
              <div className="name">MySQL</div>
            </li> 
            <li>
              <div className="name">Git / GitHub </div>
            </li>                               
            <li>
              <div className="name">REST API</div>
            </li>        
            <li>
              <div className="name">JSON</div>
            </li>   
            <li>
              <div className="name">Python</div>
            </li>     
            <li>
              <div className="name">CLI</div>
            </li>
            <li>
              <div className="name">VS Code</div>
            </li> 
            <li>
              <div className="name">OpenAI</div>
            </li>                                   
            <li>
              <div className="name">Adobe Creative Suite</div>
            </li>   
            <li>
              <div className="name">Figma</div>
            </li>   
            <li>
              <div className="name">Facebook Ads Manager</div>
            </li>  
            <li>
              <div className="name">Windows, Mac OS, & Linux</div>
            </li>             
            <li>
              <div className="name">MS Office Suite</div>
            </li>                                                                                                                          
          </ul>
        </div>
      </div>
    </div>
  );
};
