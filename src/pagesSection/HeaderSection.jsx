import devImg from "../images/heroImg.png";

function HeaderSection() {
  return (
    <section className="header-section">
      <nav className="header">
        <h2 className="welcome">WELCOME!</h2>
        <div className="navbar">
          <a href="#about">ABOUT</a>
          <a href="#passions">PASSIONS</a>
          <a href="#portfolio">PORTFOLIO</a>
          <a href="#contact">CONTACT ME</a>
        </div>
      </nav>
      <mian className="main-header">
        <div className="message-about">
          <h2>Hi!</h2>
          <h1>I am ....</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo
            nemo commodi vitae non, cupiditate consequatur doloremque sapiente
            ratione ad, maiores quibusdam cum accusamus natus error numquam
            eaque deleniti expedita est.
          </p>
        </div>
        <div className="image-about">
          <img src={devImg} alt="Developer" />
        </div>
      </mian>
    </section>
  );
}

export default HeaderSection;
