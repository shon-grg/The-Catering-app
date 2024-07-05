// import "./SignUp.css";
// function SignUp() {
//   return (
//     <div>
//       <h1>Drop that spoon and work the room.</h1>
//       <p>
//         Dinner parties best enjoyed together, with friends.Book now and leave
//         the domestic to us
//       </p>

//       <form className="quote-form">
//         <h3>Free No Obligation Quotes - Enquire Now</h3>
//         <input type="text" name="name" placeholder="Your Name" required />
//         <input type="email" name="email" placeholder="Email Address" required />
//         <button type="submit" href="#">
//           Send me a quote »
//         </button>
//         <p className="privacy-notice">
//           *We do not share your personal info with anyone. Check out our{" "}
//           <a href="#">Privacy Policy</a> for more information.
//         </p>
//       </form>
//     </div>
//   );
// }

// export default SignUp;

import "./SignUp.css"; // Ensure this path matches your file structure

function SignUp() {
  return (
    <div className="App">
      <h1>Drop that spoon and work the room.</h1>
      <div className="signup-container">
        <p>
          Dinner parties are best enjoyed together, with friends.
          <br /> Book now and leave the domestic to us.
        </p>

        <form className="quote-form2">
          <h3>Free No Obligation Quotes - Enquire Now</h3>
          <input type="text" name="name" placeholder="Your Name" required />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
          />
          <button type="submit">Send me a quote »</button>
          <div className="privacy-notice">
            <p>
              We do not share your personal info with anyone. Check out our{" "}
              <a href="#">Privacy Policy</a> for more information.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
