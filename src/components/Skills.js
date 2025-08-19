import { useEffect } from "react";
import { createSkillsDot, dotResize } from "../utils";

export const DesignSkills = () => {
  return (
    <div className="section skills" id="section-skills">
      <div className="content">
        {/* title */}
        <div className="title">
          <div className="title_inner">Systems & Product Skills</div>
        </div>
        {/* skills items */}
        <div className="skills percent content-box">
          <ul>
            <li>
              <div className="name">System Design</div>
              <div className="progress ">
                <div className="percentage" style={{ width: "90%" }}>
                  <span className="percent">90%</span>
                </div>
              </div>
            </li>
            <li>
              <div className="name">Product Strategy</div>
              <div className="progress ">
                <div className="percentage" style={{ width: "85%" }}>
                  <span className="percent">85%</span>
                </div>
              </div>
            </li>
            <li>
              <div className="name">Information Architecture</div>
              <div className="progress ">
                <div className="percentage" style={{ width: "80%" }}>
                  <span className="percent">80%</span>
                </div>
              </div>
            </li>
            <li>
              <div className="name">UX for Internal Tools</div>
              <div className="progress ">
                <div className="percentage" style={{ width: "80%" }}>
                  <span className="percent">80%</span>
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
          <div className="title_inner">Communication</div>
        </div>
        {/* skills items */}
        <div className="skills percent content-box">
          <ul>
            <li>
              <div className="name">Technical Writing</div>
              <div className="progress">
                <div className="percentage" style={{ width: "90%" }}>
                  <span className="percent">90%</span>
                </div>
              </div>
            </li>
            <li>
              <div className="name">Stakeholder Communication</div>
              <div className="progress">
                <div className="percentage" style={{ width: "90%" }}>
                  <span className="percent">90%</span>
                </div>
              </div>
            </li>
            <li>
              <div className="name">Mentoring & Team Leadership</div>
              <div className="progress">
                <div className="percentage" style={{ width: "85%" }}>
                  <span className="percent">85%</span>
                </div>
              </div>
            </li>
            <li>
              <div className="name">Workshops & Training</div>
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
          <div className="title_inner">Core Tech</div>
        </div>
        {/* skills items */}
        <div className="skills circles content-box">
          <ul>
            <li>
              <div className="name">Python</div>
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
              <div className="name">TypeScript / Node</div>
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
              <div className="name">React / Next.js</div>
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
              <div className="name">Docker / Kubernetes</div>
              <div className="progress p80">
                {" "}
                {/* p80 = 80% circle fill color */}
                <div className="percentage">
                  <span className="percent">80%</span>
                </div>
                <span>80%</span>
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
              <div className="name">Systems thinking</div>
            </li>
            <li>
              <div className="name">Shipping fast safely</div>
            </li>
            <li>
              <div className="name">Product sense</div>
            </li>
            <li>
              <div className="name">Technical audits</div>
            </li>
            <li>
              <div className="name">Architecture diagrams that matter</div>
            </li>
            <li>
              <div className="name">Agent design</div>
            </li>
            <li>
              <div className="name">Prompt and tool orchestration</div>
            </li>
            <li>
              <div className="name">Data pipeline hygiene</div>
            </li>
            <li>
              <div className="name">Real-time streaming basics</div>
            </li>    
            <li>
              <div className="name">API design</div>
            </li>                        
            <li>
              <div className="name">Documentation people read</div>
            </li>  
            <li>
              <div className="name">Clear roadmaps</div>
            </li> 
            <li>
              <div className="name">Prioritization</div>
            </li>  
            <li>
              <div className="name">Developer experience (DX)</div>
            </li>  
            <li>
              <div className="name">Observability basics</div>
            </li>
            <li>
              <div className="name">Security-minded defaults</div>
            </li>   
            <li>
              <div className="name">Vendor evaluation</div>
            </li> 
            <li>
              <div className="name">Cost awareness</div>
            </li>
            <li>
              <div className="name">Stakeholder alignment</div>
            </li>
            <li>
              <div className="name">Workshop facilitation</div>
            </li>   
            <li>
              <div className="name">Mentoring engineers</div>
            </li> 
            <li>
              <div className="name">Hands-on prototyping</div>
            </li>
            <li>
              <div className="name">Glue code and integrations</div>
            </li>  
            <li>
              <div className="name">Cutting scope without losing value</div>
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
              <div className="name">Python</div>
            </li>
            <li>
              <div className="name">TypeScript</div>
            </li>
            <li>
              <div className="name">Node.js</div>
            </li>
            <li>
              <div className="name">React / Next.js</div>
            </li>
            <li>
              <div className="name">Flask / FastAPI</div>
            </li>
            <li>
              <div className="name">LangChain</div>
            </li>
            <li>
              <div className="name">Rasa / spaCy</div>
            </li>
            <li>
              <div className="name">OpenAI / Anthropic APIs</div>
            </li>
            <li>
              <div className="name">Llama / HF Transformers</div>
            </li> 
            <li>
              <div className="name">Weaviate</div>
            </li> 
            <li>
              <div className="name">Postgres</div>
            </li>                               
            <li>
              <div className="name">Redis</div>
            </li>        
            <li>
              <div className="name">RabbitMQ / Bull</div>
            </li>   
            <li>
              <div className="name">WebSockets / WebRTC</div>
            </li>     
            <li>
              <div className="name">LiveKit / mediasoup</div>
            </li>
            <li>
              <div className="name">Docker / Compose</div>
            </li> 
            <li>
              <div className="name">Kubernetes</div>
            </li>                                   
            <li>
              <div className="name">Azure / AWS</div>
            </li>   
            <li>
              <div className="name">GitHub Actions</div>
            </li>   
            <li>
              <div className="name">NGINX / Traefik</div>
            </li>  
            <li>
              <div className="name">Terraform / Packer</div>
            </li>             
            <li>
              <div className="name">Bash scripting</div>
            </li>
            <li>
              <div className="name">Vite / esbuild / Webpack</div>
            </li>
            <li>
              <div className="name">ESLint / Prettier / black / flake8</div>
            </li>
            <li>
              <div className="name">Selenium / Puppeteer</div>
            </li>
            <li>
              <div className="name">Cloudflare</div>
            </li>
            <li>
              <div className="name">Signoz basic metrics</div>
            </li>
            <li>
              <div className="name">FFmpeg / GStreamer</div>
            </li>
            <li>
              <div className="name">ClickUp / Notion for ops</div>
            </li>
            <li>
              <div className="name">Zapier / n8n / Make</div>
            </li>                                                                                                                       
          </ul>
        </div>
      </div>
    </div>
  );
};
