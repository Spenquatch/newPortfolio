const ResumeSection = () => {
  return (
    <div className="section education" id="section-education">
      <div className="content">
        {/* title */}
        <div className="title">
          <div className="title_inner">Education</div>
        </div>
        {/* service items */}
        <div className="service-items">
          <div className="service-col">
            <div className="service-item content-box">
              <div className="icon">
                <span className="fas fa-graduation-cap" />
              </div>
              <div className="name">Ivy Tech Community College | 2013-2015</div>
              <div className="text">
              Web Design & Development 
              </div>
            </div>
          </div>
          <div className="service-col">
            <div className="service-item content-box">
              <div className="icon">
                <span className="fas fa-book-open" />
              </div>
              <div className="name">Continuous Learning: AI/ML Systems</div>
              <div className="text">
              Self-directed learning in AI/ML systems, LLMs, and automation
              </div>
            </div>
          </div>         
        </div>
        <div className="clear" />
      </div>
    </div>

    
  );
};
export default ResumeSection;
