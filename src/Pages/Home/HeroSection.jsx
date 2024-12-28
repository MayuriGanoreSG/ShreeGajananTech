export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Welcome to</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">ShreeGajanan</span>{" "}
            <br />
            Technologies
          </h1>
          <p className="hero--section-description">
            Empowering innovation with integrity, fostering trust through technology.
            <br />
          </p>
        </div>
        <div style={{
          display: "flex",
          justifyContent: "center",
          marginTop:"30px",
          alignItems: "center",
        }}>
          <button className="btn btn-primary">Get In Touch</button>
        </div>
      </div>
      <div className="hero--section--img">
        <img className="hero-img" src="./img/hero_img.png" alt="Hero Section" />
      </div>
    </section>
  );
}
