function ContentSection() {
  return (
    <section className="content">
      <div className="passions-section">
        <h1 className="passions">Additional passions</h1>
        <div className="passions-list">
          <div className="front-end">
            <h4>Front-End Developer</h4>
            <div className="detail">
              <p>HTML</p>
              <p>CSS</p>
              <p>JAVASCRIPT</p>
              <p>Tailwind</p>
              <p>React</p>
            </div>
          </div>
          <div className="back-end">
            <h4>Back-End Developer</h4>
            <div className="detail">
              <p>Node.js</p>
              <p>NoSQL (MongoDB)</p>
              <p>SQL (PostgreSQL)</p>
            </div>
          </div>
          <div className="ux-ui">
            <h4>UI/UX Designer</h4>
            <div className="detail">
              <p>Figma</p>
            </div>
          </div>
        </div>
      </div>
      <div className="portfolio-section">
        <h1 className="portfolio">My Portfolio</h1>
        <div className="portfolio-list">
          <div className="job1">
            <h4>First</h4>
            <div className="detail-job">
              <p>position: Electrical Engineering</p>
            </div>
          </div>
          <div className="job2">
            <h4>Second</h4>
            <div className="detail-job">
              <p>position: Failure Analysis Engineering</p>
            </div>
          </div>
          <div className="website">
            <h4>E-commerce website</h4>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContentSection;
