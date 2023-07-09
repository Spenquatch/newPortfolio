const Service = () => {
  return (
    <div className="section service" id="section-services">
      <div className="content">
        {/* title */}
        <div className="title">
          <div className="title_inner">Services</div>
        </div>
        {/* service items */}
        <div className="service-items">
          <div className="service-col">
            <div className="service-item content-box">
              <div className="icon">
                <span className="fas fa-code" />
              </div>
              <div className="name">Full Stack Web Development</div>
              <div className="text">
              Develop comprehensive solutions for creating robust and dynamic websites and web applications. From crafting intuitive front-end user interfaces to developing efficient back-end server logic, I ensure seamless integration of all layers of web development.
              </div>
            </div>
          </div>
          <div className="service-col">
            <div className="service-item content-box">
              <div className="icon">
                <span className="fas fa-clipboard-check" />
              </div>
              <div className="name">Technical Project Management</div>
              <div className="text">
              Careful oversight and expert direction of technology-focused projects, ensuring they are executed within scope, timeframes and budget, and seamlessly aligned with technical specifications and overarching business objectives.
              </div>
            </div>
          </div>
          <div className="service-col">
            <div className="service-item content-box">
              <div className="icon">
                <span className="fas fa-palette" />
              </div>
              <div className="name">UI/UX Design</div>
              <div className="text">
                Designing user interfaces and user experiences that are visually appealing and user-friendly. This includes creating rapid prototypes to test and validate design concepts before full-scale development.
              </div>
            </div>
          </div>          
          <div className="service-col">
            <div className="service-item content-box">
              <div className="icon">
                <span className="fas fa-ad" />
              </div>
              <div className="name">Digital Marketing and Brand Development</div>
              <div className="text">
              Developing and executing innovative digital marketing campaigns, including social media marketing, to enhance brand visibility and engagement. This also includes creating brand-specific logos and graphics.
              </div>
            </div>
          </div>
          <div className="service-col">
            <div className="service-item content-box">
              <div className="icon">
                <span className="fas fa-terminal" />
              </div>
              <div className="name">Custom Software Development</div>
              <div className="text">
                Utilizing modern technologies and frameworks such as ReactJS for custom software development. This includes designing, coding, integration testing, and debugging to ensure the software meets client requirements.
              </div>
            </div>
          </div>
          <div className="service-col">
            <div className="service-item content-box">
              <div className="icon">
                <span className="fas fa-sitemap" />
              </div>
              <div className="name">Content Management and Hosting Services</div>
              <div className="text">
                Content management solutions including hosting, domain management, and email services, ensuring that clients&apos; websites are secure and perform optimally.
              </div>
            </div>
          </div>
          <div className="service-col">
            <div className="service-item content-box">
              <div className="icon">
                <span className="fas fa-tag" />
              </div>
              <div className="name">E-Commerce Solutions</div>
              <div className="text">
                Building and maintaining e-commerce websites, including setting up online stores, payment gateways, and ensuring security for transactions.
              </div>
            </div>
          </div>
        </div>
        <div className="clear" />
      </div>
    </div>
  );
};
export default Service;
