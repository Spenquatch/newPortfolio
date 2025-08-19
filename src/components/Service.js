const Service = () => {
  return (
    <div className="section service" id="section-services">
      <div className="content">
        {/* title */}
        <div className="title">
          <div className="title_inner">How I Help</div>
        </div>
        {/* service items */}
        <div className="service-items">
          <div className="service-col">
            <div className="service-item content-box">
              <div className="icon">
                <span className="fas fa-project-diagram" />
              </div>
              <div className="name">AI Systems & Architecture</div>
              <div className="text">
                End-to-end design of AI systems that use real context and plug
                into your tools. Clear boundaries, reliable data flow,
                measurable outcomes.
              </div>
            </div>
          </div>
          <div className="service-col">
            <div className="service-item content-box">
              <div className="icon">
                <span className="fas fa-robot" />
              </div>
              <div className="name">Agent Workflows & Automation</div>
              <div className="text">
                Task-specific agents that handle the boring stuff, escalate when
                needed, and leave a clean audit trail.
              </div>
            </div>
          </div>
          <div className="service-col">
            <div className="service-item content-box">
              <div className="icon">
                <span className="fas fa-bolt" />
              </div>
              <div className="name">Rapid Prototyping</div>
              <div className="text">
                Fast builds to validate ideas, from clickable demos to working
                internal tools. Ship, learn, iterate.
              </div>
            </div>
          </div>
          <div className="service-col">
            <div className="service-item content-box">
              <div className="icon">
                <span className="fas fa-tasks" />
              </div>
              <div className="name">Technical Product Management</div>
              <div className="text">
                Translate strategy into shipped work. Roadmaps, prioritization,
                delivery that holds up under pressure.
              </div>
            </div>
          </div>
          <div className="service-col">
            <div className="service-item content-box">
              <div className="icon">
                <span className="fas fa-shield-alt" />
              </div>
              <div className="name">Codebase & Infra Audits</div>
              <div className="text">
                Practical audits that flag risk, uncover leverage points, and
                map a path to &quot;this actually works.&quot;
              </div>
            </div>
          </div>
          <div className="service-col">
            <div className="service-item content-box">
              <div className="icon">
                <span className="fas fa-tools" />
              </div>
              <div className="name">Internal Tools & Platforms</div>
              <div className="text">
                Build or harden the systems your team lives in, from dashboards
                to CI/CD to the glue code that keeps it moving.
              </div>
            </div>
          </div>
          <div className="service-col">
            <div className="service-item content-box">
              <div className="icon">
                <span className="fas fa-chalkboard-teacher" />
              </div>
              <div className="name">AI Enablement & Training</div>
              <div className="text">
                Hands-on workshops and playbooks so teams can use AI well, not
                just talk about it.
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
