import "./Style.css";

const Footer = () => {
  return (
    <footer
      className="footer"
      style={{ backgroundImage: "url(/img/footer.png)" }}
    >
      <div className="redes">
        <a href="https://github.com/TorresFrancisco">
          <img className="icon" src="/img/github.png" alt="GitHub" />
        </a>
        <a href="https://www.linkedin.com/in/francisco-torres-venegas-366a89211/">
          <img className="icon" src="/img/linkedin.png" alt="LinkedIn" />
        </a>
      </div>
      <img src="/img/Logo.png" alt="org" />
      <strong>Desarrollado por Francisco Torres</strong>
    </footer>
  );
};

export default Footer;
