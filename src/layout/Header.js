import Link from "next/link";
import { useRouter } from 'next/router';
import { Fragment, useState } from "react";

const Menu = () => {
  const router = useRouter(); // Initialize the router variable using the useRouter hook

  return (
    <Fragment>
      <div className="logo">
        <Link href="/" legacyBehavior>
          <a>
            <span className="mask-lnk">
              Spenser <strong>McConnell</strong>
            </span>
          </a>
        </Link>
      </div>
      {/* top menu */}
      <div className="top-menu hover-masks">
        <div className="top-menu-nav">
          <div className="menu-topmenu-container">
            <ul className="menu">
              <li className="menu-item">
                <Link href="/" legacyBehavior>
                  <a className={router.pathname == "/" ? "active" : ""}>
                    <span className="mask-lnk">Home</span>
                    <span className="mask-lnk mask-lnk-hover">Home</span>
                  </a>
                </Link>
              </li>
              <li className="menu-item">
                <Link href="/resume" legacyBehavior>
                  <a className={router.pathname == "/resume" ? "active" : ""}>
                    <span className="mask-lnk">Resume</span>
                    <span className="mask-lnk mask-lnk-hover">Resume</span>
                  </a>
                </Link>
              </li>
              <li className="menu-item">
                <Link href="/projects" legacyBehavior>
                  <a className={router.pathname == "/projects" ? "active" : ""}>
                    <span className="mask-lnk">Projects</span>
                    <span className="mask-lnk mask-lnk-hover">Projects</span>
                  </a>
                </Link>
              </li>
              <li className="menu-item">
                <Link href="/contacts" legacyBehavior>
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
