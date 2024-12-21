import "./App.css";
import logo from "./assets/images/site-logo.svg";
import playbtn from "./assets/images/play-btn-pic.png";
import lampa from "./assets/images/lampa.svg";
import qalam from "./assets/images/qalam.svg";
import yuklash from "./assets/images/yuklash.svg";
import logos from "./assets/images/logos.png";
import bg from "./assets/images/top-right-bg.png";
function App() {
  return (
    <>
      <header className="header">
        <div className="header__container container">
          <a className="logo" href="#">
            <img src={logo} alt="logo" width="120" height="25" />
          </a>
          <nav className="sitenav">
            <ul className="sitenav__list">
              <div className="dropdown">
                <button className="dropdown-btn">Product ▼</button>
                <ul className="dropdown-list">
                  <li>
                    <a href="#">Product 1</a>
                  </li>
                  <li>
                    <a href="#">Product 2</a>
                  </li>
                </ul>
              </div>
              <div className="dropdown">
                <button className="dropdown-btn">Template ▼</button>
                <ul className="dropdown-list">
                  <li>
                    <a href="#">Template 1</a>
                  </li>
                  <li>
                    <a href="#">Template 2</a>
                  </li>
                </ul>
              </div>
              <li className="sitenav__item">
                <a className="sitenav__link" href="#">
                  Blog
                </a>
              </li>
              <li className="sitenav__item">
                <a className="sitenav__link" href="#">
                  Pricing
                </a>
              </li>
            </ul>
          </nav>
          <div className="header-btns">
            <a className="sign-in" href="#">
              Sign in
            </a>
            <a className="start-free" href="#">
              Start Free
            </a>
          </div>
        </div>
      </header>
      <img className="bg" src={bg} alt="" />
      <section className="hero">
        <div className="hero__container container">
          <div className="hero__info">
            <h1 className="hero__title">
              Managing business payments has never been easier
            </h1>
            <p className="hero__desc">
              Yet bed any for travelling assistance indulgence unpleasing. Not
              thoughts all exercise blessing. Indulgence way everything.
            </p>
            <div className="hero__btns">
              <a href="#" className="hero__btn1">
                Our Process
              </a>
              <a href="#" className="hero__play-btn">
                <img src={playbtn} alt="" width="60" height="60" />
                <p>See How It Works</p>
              </a>
            </div>
          </div>
          <div className="form">
            <form>
              <h3 className="form-title">Get Started for Free</h3>
              <input type="text" placeholder="Email Address" />
              <input type="text" placeholder="Password" />
              <button>Get Started</button>
            </form>
          </div>
        </div>
      </section>
      <section className="company">
        <div className="container">
          <h3 className="company-title">
            Trusted By Over 100+ Startups and freelance business
          </h3>
          <div className="company-images">
            <img src={logos} alt="logo" />
          </div>
        </div>
      </section>
      <section className="services">
        <div className="container">
          <div className="services-info">
            <h2 className="services-title">
              Believing neglected so so allowance
            </h2>
            <p className="services-description">
              We so opinion friends me message as delight. Whole front do of{" "}
              <br />
              plate heard oh ought. His defective nor convinced residence own.
            </p>
            <a className="services-btn" href="#">
              We so opinion friends me message as delight.
            </a>
          </div>
          <div className="blocks">
            <div className="block">
              <img src={lampa} alt="" />
              <h3>Led Ask Possible Mistress</h3>
              <p>
                Connection has put impossible own apartments boisterous. At
                jointure ladyship an insisted so humanity he. Friendly bachelor
                entrance to on by.
              </p>
            </div>
            <div className="block">
              <img src={qalam} alt="" />
              <h3>Elegance Eat Likewise</h3>
              <p>
                From they fine john he give of rich he. They age and draw mrs
                like. Improving end distrusts may instantly was household
                applauded incommode.{" "}
              </p>
            </div>
            <div className="block">
              <img src={yuklash} alt="" />
              <h3>Message Oram Nothing</h3>
              <p>
                Why kept very ever home mrs. Considered sympathize ten
                uncommonly occasional assistance sufficient not. Letter of on
                become he tended active enable to.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="possible">
        <div className="container possible-container">
          <h2 className="possible-title">
            Track your crytpo portfolio on the best way possible
          </h2>
          <a className="possible-btn" href="#">
            Check It Out
          </a>
        </div>
      </section>
    </>
  );
}
export default App;
