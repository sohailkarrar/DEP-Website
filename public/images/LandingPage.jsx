import React, { useState } from "react";
import Navbar from "./Navbar/Navbar";
import Review from "./Review";
import Footer from "./Footer/Footer";
import "./LandingPage.css";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const LandingPage = () => {
  const [counterOn, setCounterOn] = useState(false);

  return (
    <div>
      <Navbar />
      <div className="gap"></div>


      <div className="lp-hero-section">
        <div className="lp-hero-section-text">
          <h1>Empowering Students of Pakistan</h1>
          <p>
            Digital Empowerment Network is committed to work by designing
            indigenous interventions and working in collaboration with different
            public and private institutions for students’ greater development.
          </p>
          <div className="lp-hero-buttons">
            <a href="/" className="lp-hero-button2">
              Apply Now
            </a>
            <a href="/" className="lp-hero-button1">
              Learn More
            </a>
          </div>
          <div className="lp-hero-enrollment">
            <img src={require("../Assets/hero-pic.png")} alt="" />
            <p>5k+ Enrollments</p>
          </div>
        </div>
        <div className="lp-hero-section-image">
          <img
            className="lp-hero-section-image"
            src={require("../Assets/hero section images.png")}
            alt=""
          />
        </div>
      </div>

      <div className="lp-gray-strip">
        <img src={require("../Assets/gray-strip-logo1.png")} alt="" />
        <img src={require("../Assets/gray-strip-logo2.png")} alt="" />
        <img src={require("../Assets/gray-strip-logo3.png")} alt="" />
        <img src={require("../Assets/gray-strip-logo4.png")} alt="" />
        <img src={require("../Assets/gray-strip-logo5.png")} alt="" />
        <img src={require("../Assets/gray-strip-logo6.png")} alt="" />
      </div>

      <div className="lp-why-den-section">
        <div className="lp-why-den-section-text">
          <h3>Why Choose DEN</h3>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking
          </p>
        </div>
        <div className="lp-why-den-section-main-container">
          <div className="lp-why-den-section-container">
            <img src={require("../Assets/profile-icon.png")} alt="" />
            <h4>One on One Monitor</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
              nihil laudantium voluptas.
            </p>
          </div>

          <div className="lp-why-den-section-container">
            <img src={require("../Assets/watch-icon.png")} alt="" />
            <h4>24/7 Mentor</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
              nihil laudantium voluptas.
            </p>
          </div>

          <div className="lp-why-den-section-container">
            <img src={require("../Assets/grad-hat-icon.png")} alt="" />
            <h4>Alumni</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
              nihil laudantium voluptas.
            </p>
          </div>

          <div className="lp-why-den-section-container">
            <img src={require("../Assets/heart-icon.png")} alt="" />
            <h4>Annual Experts</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
              nihil laudantium voluptas.
            </p>
          </div>
        </div>
        <div className="lp-challenges-section">
          <img src={require("../Assets/challenges-pic.png")} alt="" />
          <div className="lp-challenges-section-text">
            <h3>Challenges in Achieving Digital Empowerment</h3>
            <p>
              Digital empowerment, the process of enabling individuals and
              communities to access and effectively use digital technologies,
              presents several challenges that can vary based on factors like
              geographical location, socioeconomic status, and access to
              resources.
            </p>
            <a href="/" className="lp-challenges-section-button">
              Learn More
            </a>
          </div>
        </div>
      </div>


      {/* <ScrollTrigger
        onEnter={() => setCounterOn(true)}
        onExit={() => setCounterOn(false)}
      >
        <div className="lp-blue-countup-section">
          <div className="lp-blue-countup-section-element">
            {counterOn && (
              <p className="countup">
                <CountUp start={0} end={8200} duration={2} />+
              </p>
            )}
            <p>Success Stories</p>
          </div>
          <div className="lp-blue-countup-section-seperator" />
          <div className="lp-blue-countup-section-element">
            {counterOn && (
              <p className="countup">
                <CountUp start={0} end={12200} duration={2} />+
              </p>
            )}
            <p>Expert Mentors</p>
          </div>
          <div className="lp-blue-countup-section-seperator" />
          <div className="lp-blue-countup-section-element">
            {counterOn && (
              <p className="countup">
                <CountUp start={0} end={2500} duration={2} />+
              </p>
            )}
            <p>Hours Course</p>
          </div>
          <div className="lp-blue-countup-section-seperator" />
          <div className="lp-blue-countup-section-element">
            {counterOn && (
              <p className="countup">
                <CountUp start={0} end={3000} duration={2} />+
              </p>
            )}
            <p>Active Students</p>
          </div>
        </div>
      </ScrollTrigger> */}


      <div className="lp-den-with-buraaq-section">
        <div className="lp-den-with-buraaq-section-text">
          <h3>Den with The Buraaq Academy</h3>
          <p>
            Digital Empowerment Pakistan & The Buraaq Academy presents before
            you a webinar on Unlocking Global Opportunities: International
            Scholarships Guideline Session *Date: 16th-Sept-2023 Time: 7:00 PM -
            9:00 PM Platform: Google Meet Apply now and invest in your future!
          </p>
          <a href="/" className="lp-den-with-buraaq-section-button">
            Learn More
          </a>
        </div>
        <img src={require("../Assets/den-with-buraaq-img.png")} alt="" />
      </div>


      <div className="lp-den-offer-section">
        <div className="lp-den-offer-section-text">
          <h3>What we Offer</h3>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking
          </p>
        </div>
        <div className="lp-den-offer-section-main-container1">
          <div className="lp-den-offer-section-container">
            <h4>1. Seminar</h4>
            <p>
              Our seminars serve as knowledge-sharing platforms, fostering
              personal and professional growth. These events bring experts and
              learners together to explore and discuss key topics, facilitating
              learning and networking opportunities.
            </p>
            <a href="/">Learn More</a>
          </div>
          <div className="lp-den-offer-section-container">
            <h4>2. Workshops</h4>
            <p>
              Our workshops are dynamic learning experiences designed to impart
              practical skills and knowledge. They offer hands-on training and
              interactive sessions, equipping participants with valuable tools
              for personal and professional development.
            </p>
            <a href="/">Learn More</a>
          </div>
        </div>
        <div className="lp-den-offer-section-main-container2">
          <div className="lp-den-offer-section-container">
            <h4>3. Tech-based Short Courses</h4>
            <p>
              Our tech-based short courses provide focused and practical
              learning experiences. Tailored to industry demands, they equip
              participants with essential skills and knowledge for today's
              tech-driven world.
            </p>
            <a href="/">Learn More</a>
          </div>
          <div className="lp-den-offer-section-container">
            <h4>4. Internship Opportunities</h4>
            <p>
              Through our extensive network and partnerships, we actively
              facilitate internship opportunities with various companies,
              leveraging our connections to provide valuable industry experience
              for students.
            </p>
            <a href="/">Learn More</a>
          </div>
        </div>
      </div>



      {/* <div className="lp-den-team-section">
        <div className="lp-den-team-section-text">
          <h3>Our Amazing Team</h3>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking
          </p>
        </div>
        <div className="lp-den-team-section-main-container">
          <div className="lp-den-team-section-container">
            <img
              className="lp-den-team-profile-pic"
              src={require("../Assets/den-founder.png")}
              alt=""
            />
            <h4>Syed Suhail Karar</h4>
            <p>Founder DEN</p>
            <div className="lp-den-team-section-container-logos">
              <a href="/">
                <img
                  className="logo"
                  src={require("../Assets/linkedin.png")}
                  alt=""
                />
              </a>
              <a href="/">
                <img
                  className="logo"
                  src={require("../Assets/instagram.png")}
                  alt=""
                />
              </a>
              <a href="/">
                <img
                  className="logo"
                  src={require("../Assets/facebook.png")}
                  alt=""
                />
              </a>
              <a href="/">
                <img
                  className="logo"
                  src={require("../Assets/behance.png")}
                  alt=""
                />
              </a>
            </div>
          </div>
          <div className="lp-den-team-section-container">
            <img
              className="lp-den-team-profile-pic"
              src={require("../Assets/den-co-founder.png")}
              alt=""
            />
            <h4>Semab Tabassum</h4>
            <p>Co-Founder DEN</p>
            <div className="lp-den-team-section-container-logos">
              <a href="/">
                <img
                  className="logo"
                  src={require("../Assets/linkedin.png")}
                  alt=""
                />
              </a>
              <a href="/">
                <img
                  className="logo"
                  src={require("../Assets/instagram.png")}
                  alt=""
                />
              </a>
              <a href="/">
                <img
                  className="logo"
                  src={require("../Assets/facebook.png")}
                  alt=""
                />
              </a>
              <a href="/">
                <img
                  className="logo"
                  src={require("../Assets/behance.png")}
                  alt=""
                />
              </a>
            </div>
          </div>
          <div className="lp-den-team-section-container">
            <img
              className="lp-den-team-profile-pic"
              src={require("../Assets/den-president.png")}
              alt=""
            />
            <h4>Muhammad Faizan</h4>
            <p>President DEN</p>
            <div className="lp-den-team-section-container-logos">
              <a href="/">
                <img
                  className="logo"
                  src={require("../Assets/linkedin.png")}
                  alt=""
                />
              </a>
              <a href="/">
                <img
                  className="logo"
                  src={require("../Assets/instagram.png")}
                  alt=""
                />
              </a>
              <a href="/">
                <img
                  className="logo"
                  src={require("../Assets/facebook.png")}
                  alt=""
                />
              </a>
              <a href="/">
                <img
                  className="logo"
                  src={require("../Assets/behance.png")}
                  alt=""
                />
              </a>
            </div>
          </div>
          <div className="lp-den-team-section-container">
            <img
              className="lp-den-team-profile-pic"
              src={require("../Assets/den-co-head.png")}
              alt=""
            />
            <h4>Ifra Zubair Malik</h4>
            <p>Co-head of DEN marketing and communication team </p>
            <div className="lp-den-team-section-container-logos">
              <a href="/">
                <img
                  className="logo"
                  src={require("../Assets/linkedin.png")}
                  alt=""
                />
              </a>
              <a href="/">
                <img
                  className="logo"
                  src={require("../Assets/instagram.png")}
                  alt=""
                />
              </a>
              <a href="/">
                <img
                  className="logo"
                  src={require("../Assets/facebook.png")}
                  alt=""
                />
              </a>
              <a href="/">
                <img
                  className="logo"
                  src={require("../Assets/behance.png")}
                  alt=""
                />
              </a>
            </div>
          </div>
          <div className="lp-den-team-section-container">
            <img
              className="lp-den-team-profile-pic"
              src={require("../Assets/den-head-of-gd.png")}
              alt=""
            />
            <h4>Muddasir Haroon</h4>
            <p>Head of Graphics Designing</p>
            <div className="lp-den-team-section-container-logos">
              <a href="/">
                <img
                  className="logo"
                  src={require("../Assets/linkedin.png")}
                  alt=""
                />
              </a>
              <a href="/">
                <img
                  className="logo"
                  src={require("../Assets/instagram.png")}
                  alt=""
                />
              </a>
              <a href="/">
                <img
                  className="logo"
                  src={require("../Assets/facebook.png")}
                  alt=""
                />
              </a>
              <a href="/">
                <img
                  className="logo"
                  src={require("../Assets/behance.png")}
                  alt=""
                />
              </a>
            </div>
          </div>
          <div className="lp-den-team-section-container">
            <img
              className="lp-den-team-profile-pic"
              src={require("../Assets/den-cto.png")}
              alt=""
            />
            <h4>Syed Afzal</h4>
            <p>Cheif Technology (CTO)</p>
            <div className="lp-den-team-section-container-logos">
              <a href="/">
                <img
                  className="logo"
                  src={require("../Assets/linkedin.png")}
                  alt=""
                />
              </a>
              <a href="/">
                <img
                  className="logo"
                  src={require("../Assets/instagram.png")}
                  alt=""
                />
              </a>
              <a href="/">
                <img
                  className="logo"
                  src={require("../Assets/facebook.png")}
                  alt=""
                />
              </a>
              <a href="/">
                <img
                  className="logo"
                  src={require("../Assets/behance.png")}
                  alt=""
                />
              </a>
            </div>
          </div>
          <div className="lp-den-team-section-container">
            <img
              className="lp-den-team-profile-pic"
              src={require("../Assets/den-full-stack-dev.png")}
              alt=""
            />
            <h4>Faraz</h4>
            <p>Senior full-stack Developer</p>
            <div className="lp-den-team-section-container-logos">
              <a href="/">
                <img
                  className="logo"
                  src={require("../Assets/linkedin.png")}
                  alt=""
                />
              </a>
              <a href="/">
                <img
                  className="logo"
                  src={require("../Assets/instagram.png")}
                  alt=""
                />
              </a>
              <a href="/">
                <img
                  className="logo"
                  src={require("../Assets/facebook.png")}
                  alt=""
                />
              </a>
              <a href="/">
                <img
                  className="logo"
                  src={require("../Assets/behance.png")}
                  alt=""
                />
              </a>
            </div>
          </div>
          <div className="lp-den-team-section-container">
            <img
              className="lp-den-team-profile-pic"
              src={require("../Assets/den-head-ui.png")}
              alt=""
            />
            <h4>Maha Riaz</h4>
            <p>Head of UI/UX Designing</p>
            <div className="lp-den-team-section-container-logos">
              <a href="/">
                <img
                  className="logo"
                  src={require("../Assets/linkedin.png")}
                  alt=""
                />
              </a>
              <a href="/">
                <img
                  className="logo"
                  src={require("../Assets/instagram.png")}
                  alt=""
                />
              </a>
              <a href="/">
                <img
                  className="logo"
                  src={require("../Assets/facebook.png")}
                  alt=""
                />
              </a>
              <a href="/">
                <img
                  className="logo"
                  src={require("../Assets/behance.png")}
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </div> */}


      <div className="lp-gallery-section">
        <div className="lp-gallery-section-text">
          <h3>Our Gallery</h3>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking
          </p>
        </div>
        <div className="lp-gallery-section-pictures-container">
          <div className="lp-gallery-section-picture">
            <img src={require("../Assets/slide1.jpg")} alt="" />
          </div>
          <div className="lp-gallery-section-picture">
            <img src={require("../Assets/slide2.jpg")} alt="" />
          </div>
          <div className="lp-gallery-section-picture">
            <img src={require("../Assets/slide3.jpg")} alt="" />
          </div>
        </div>
      </div>


      {/* <div className="lp-reviews-section">
        <div className="lp-reviews-section-text">
          <h3>What Our Students Say About Us</h3>
        </div>
        <div className="lp-reviews">
          <Review />
        </div>
      </div> */}

      {/* <div className="lp-apply-campus-dir-section">
        <h4>Want to get involved? We are looking for Campus Directors</h4>
        <a href="/" className="lp-apply-campus-dir-section-button">
          Apply Now
        </a>
      </div> */}
      <Footer />
    </div>
  );
};

export default LandingPage;
