const Footer = () => {
  return (
    <footer className="footer">
      <div className="copy">
        <p>E: <a rel="noreferrer" href="mailto:spensermcconnell@gmail.com">spensermcconnell@gmail.com</a></p>
        <p>T: <a href="tel:812-343-5020">812.343.5020</a></p>
      </div>
      <div className="soc-box">
        <div className="follow-label">Follow Me</div>
        <div className="soc">
          <a target="_blank" rel="noreferrer" href="https://github.com/Spenquatch">
            <span className="icon fab fa-github" />
          </a>
          <a target="_blank" rel="noreferrer" href="https://www.instagram.com/spenquatch">
            <span className="icon fab fa-instagram" />
          </a>
          <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/spenser-mcconnell">
            <span className="icon fab fa-linkedin-in" />
          </a>
        </div>
      </div>
      <div className="clear" />
    </footer>
  );
};
export default Footer;
