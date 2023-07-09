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
                <span className="fas fa-laptop-code" />
              </div>
              <div className="name">Ivy Tech Community College | 2011-2015</div>
              <div className="text">
              Web Design & Development 
              </div>
            </div>
          </div>
          <div className="service-col">
            <div className="service-item content-box">
              <div className="icon">
                <span className="fas fa-graduation-cap" />
              </div>
              <div className="name">Penn Foster High School | 2003-2007</div>
              <div className="text">
              High School Diploma
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
