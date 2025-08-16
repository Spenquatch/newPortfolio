const Clients = () => {
  return (
    <div className="section clients" id="section-clients">
      <div className="content">
        {/* title */}
        <div className="title">
          <div className="title_inner">Brands I&apos;ve Worked With</div>
        </div>
        {/* clients items */}
        <div className="content-box">
          <div className="clients-items">
            <div className="clients-col">
              <div className="clients-item">
                <a target="_blank" rel="noreferrer" href="https://unincorporated.com">
                <img src="images/logos/uninc.png" alt="UNINCORPORATED" />
                </a>
              </div>
            </div> 
            <div className="clients-col">
              <div className="clients-item">
                <a target="_blank" rel="noreferrer" href="https://acadium.com">
                <img src="images/logos/acadium.png" alt="Acadium" />
                </a>
              </div>
            </div>
            <div className="clients-col">
              <div className="clients-item">
                <a target="_blank" rel="noreferrer" href="https://humana.com">
                <img src="images/logos/humana.png" alt="Humana" />
                </a>
              </div>
            </div>
            <div className="clients-col">
              <div className="clients-item">
                <a target="_blank" rel="noreferrer" href="https://mkragency.com">
                <img src="images/logos/mkr.png" alt="MKR" />
                </a>
              </div>
            </div>
            <div className="clients-col">
              <div className="clients-item">
                <a target="_blank" rel="noreferrer" href="#">
                <img src="images/logos/kings.png" alt="King's Window Tint" />
                </a>
              </div>
            </div>           
          </div>
        </div>
        <div className="clear" />
      </div>
    </div>
  );
};
export default Clients;
