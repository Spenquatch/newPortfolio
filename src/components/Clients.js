const Clients = () => {
  return (
    <div className="section clients" id="section-clients">
      <div className="content">
        {/* title */}
        <div className="title">
          <div className="title_inner">Brands I've Worked With</div>
        </div>
        {/* clients items */}
        <div className="content-box">
          <div className="clients-items">
            <div className="clients-col">
              <div className="clients-item">
                <a target="_blank" rel="noreferrer" href="#">
                <img src="images/logos/humana.png" alt="" />
                </a>
              </div>
            </div> 
            <div className="clients-col">
              <div className="clients-item">
                <a target="_blank" rel="noreferrer" href="#">
                <img src="images/logos/ims.png" alt="" />
                </a>
              </div>
            </div>
            <div className="clients-col">
              <div className="clients-item">
                <a target="_blank" rel="noreferrer" href="#">
                <img src="images/logos/belray.png" alt="" />
                </a>
              </div>
            </div>
            <div className="clients-col">
              <div className="clients-item">
                <a target="_blank" rel="noreferrer" href="#">
                <img src="images/logos/hoosierlottery.png" alt="" />
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
