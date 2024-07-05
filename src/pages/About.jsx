import image1 from "../data/images/images 1.jpg";
import image2 from "../data/images/images 2.jpg";
import image3 from "../data/images/images 3.jpeg";
import image4 from "../data/images/images 4.webp";
import "./About.css";

function About() {
  return (
    <>
      <h1>You bring the guests - We will do the rest</h1>
      <div className="about-container">
        <div className="flex">
          <div className="one">
            <img src={image4} alt="" className="img1" />
            <h2>Gourmet, Seasonal Fare</h2>
            <p>
              Our team of distinguished gourmands craft a tailor-made menu to
              meet your party needs. Our flexible menus cater for all dietary
              requirements.
            </p>
          </div>
          <div className="two">
            <img src={image2} alt="" className="img2" />
            <h2>Decor & Presentation</h2>
            <p>
              With contemporary, hand-crafted decor and embellishments, we
              transform your party space to create an atmosphere of
              sophistication.
            </p>
          </div>
        </div>
        <div className="three">
          <img src={image3} alt="" className="img3" />
          <div className="text-container">
            <h2>Only the finest, locally sourced produce.</h2>
            <p>
              All fresh ingredients in our dishes are sourced from local farms
              and farmer markets. Making use of only fresh, seasonally available
              produce infuses the dishes we prepare with a unique authenticity.
            </p>
          </div>
        </div>
        <div className="four">
          <div className="text-container">
            <h2>Professional wedding catering for your big day</h2>
            <p>
              We know how important the fine details are when it comes to your
              special day. Food and catering can make or break the wedding
              experience for you and your guests. Entrust our experienced team
              with your wedding day catering.
            </p>
          </div>
          <img src={image1} alt="" className="img4" />
        </div>
        <div className="flex2">
          <div>
            <h2>Melbourne finest chefs</h2>
            <p>
              Our team of highly-trained chefs are dedicated tocrafting
              innovative dinning experiences. The feedback from our customers
              speaks for itself
            </p>
          </div>
          <div>
            <h2>prepared fresh, on site</h2>
            <p>
              Rest assured that your food will arrive fresh and on time. All our
              dishes are prepared fresh
            </p>
          </div>
          <div>
            <h2>Cocktail flair for your affair</h2>
            <p>
              Our creative and creative cocktail services are unmatched.Anyone
              for Gin Mickeys
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
