import github from "../images/github.png";
import email from "../images/email.png";
import phone from "../images/phone.png";

function FooterSection() {
  return (
    <section className="footer">
      <h1>Contact Me</h1>
      <div className="contact-section">
        <div className="github">
          <img src={github} alt="github" />
          <p>GitHub</p>
        </div>
        <div className="email">
          <img src={email} alt="email" />
          <p>Email</p>
        </div>
        <div className="phone">
          <img src={phone} alt="phone" />
          <p>Tel</p>
        </div>
      </div>
    </section>
  );
}
export default FooterSection;
