import Link from "next/link";
import { useRouter } from 'next/router';
import { Fragment, useState } from "react";

const Menu = () => {
  const router = useRouter(); // Initialize the router variable using the useRouter hook

  return (
    <Fragment>
      <div className="logo hover-masks-logo">
        <a     href="downloadFiles/spenserMcconnellResume2023.pdf"
               target="_blank"
               download
               rel="noreferrer" >
          <span className="mask-lnk">
            Spenser <strong>McConnell</strong>
          </span>
          <span className="mask-lnk mask-lnk-hover">
            Download <strong>CV</strong>
          </span>
        </a>
      </div>
      {/* top menu */}
      <div className="top-menu hover-masks">
        <div className="top-menu-nav">
          <div className="menu-topmenu-container">
            <ul className="menu">
              <li className="menu-item">
                <Link href="/">
                  <a className={router.pathname == "/" ? "active" : ""}>
                    <span className="mask-lnk">Home</span>
                    <span className="mask-lnk mask-lnk-hover">Home</span>
                  </a>
                </Link>
              </li>
              <li className="menu-item">
                <Link href="/resume">
                  <a className={router.pathname == "/resume" ? "active" : ""}>
                    <span className="mask-lnk">Resume</span>
                    <span className="mask-lnk mask-lnk-hover">Resume</span>
                  </a>
                </Link>
              </li>
              <li className="menu-item">
                <Link href="/work">
                  <a className={router.pathname == "/work" ? "active" : ""}>
                    <span className="mask-lnk">Work</span>
                    <span className="mask-lnk mask-lnk-hover">Work</span>
                  </a>
                </Link>
              </li>
              <li className="menu-item">
                <Link href="/contacts">
                  <a className={router.pathname == "/contacts" ? "active" : ""}>
                    <span className="mask-lnk">Contact</span>
                    <span className="mask-lnk mask-lnk-hover">Contact</span>
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

const Header = () => {
  return (
    <Fragment>
      <MobileHeader />
      <DeskTopHeader />
    </Fragment>
  );
};
export default Header;

const DeskTopHeader = () => (
  <header className={`header desktopHeader`}>
    <div className="head-top">
      <Menu />
    </div>
  </header>
);

const MobileHeader = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <header className={`header mobileHeader ${toggle ? "active" : ""}`}>
      <div className="head-top">
        {/* menu button */}
        <a href="#" className="menu-btn" onClick={() => setToggle(!toggle)}>
          <span />
        </a>
        {/* logo */}
        <Menu />
      </div>
    </header>
  );
};
