import "./HomePage.css";
import ReactPlayer from "react-player";
// import image from "../data/images/download.jpeg";
import { useRef } from "react";

function HomePage() {
  const videoUrl = "https://www.youtube.com/watch?v=lZ3YqvsZCX4";
  const playerRef = useRef(null);
  return (
    <div className="container">
      <section className="main-content">
        <div className="image">
          <ReactPlayer
            ref={playerRef}
            url={videoUrl}
            controls={true}
            light={true}
            muted={true}
          />
        </div>
        <div className="form-section">
          <h2>Gourmet catering for all occasions.</h2>
          <p>
            Your next social event is in safe hands with our team of experienced
            catering chefs.
          </p>
          <form className="quote-form">
            <h3>Free No Obligation Quotes - Enquire Now</h3>
            <input type="text" name="name" placeholder="Your Name" required />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
            />
            <button type="submit" href="#">
              Send me a quote »
            </button>
            <p className="privacy-notice">
              *We do not share your personal info with anyone. Check out our{" "}
              <a href="#">Privacy Policy</a> for more information.
            </p>
          </form>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
