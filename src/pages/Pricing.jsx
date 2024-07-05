// import "./Pricing.css";

// function Pricing() {
//   return (
//     <>
//       <h1>Take out the hassle.</h1>
//       <div className="pricing-container">
//         <div className="pricing-plans">
//           <div className="pricing-plan">
//             <h4>TWO COURSE</h4>
//             <h1>$59</h1>
//             <h3>Great for lunches</h3>
//             <p>Complimentary glass of wine Choice of entree or dessert</p>
//             <button>Order Now</button>
//           </div>
//           <div className="pricing-plan">
//             <h4>THREE COURSE/WEDDING</h4>
//             <h1>$89</h1>
//             <h3>Ideal for dinner guests</h3>
//             <p>Complimentary Champagne Bar service on-site</p>
//             <button>Order Now</button>
//           </div>
//           <div className="pricing-plan">
//             <h4>DESTINATION</h4>
//             <h1>$129</h1>
//             <h3>Suites large groups</h3>
//             <p>Complimentary cocktail wine Mixologist on-site</p>
//             <button>Order Now</button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Pricing;

import "./Pricing.css";

function Pricing() {
  return (
    <>
      <h1>Take out the hassle.</h1>
      <div className="pricing-container">
        <div className="pricing-plan">
          <h4>TWO COURSE</h4>
          <h1>$59</h1>
          <h3>Great for lunches</h3>
          <p>Complimentary glass of wine Choice of entree or dessert</p>
          <button>Order Now</button>
        </div>
        <div className="pricing-plan">
          <h4>THREE COURSE/WEDDING</h4>
          <h1>$89</h1>
          <h3>Ideal for dinner guests</h3>
          <p>Complimentary Champagne Bar service on-site</p>
          <button>Order Now</button>
        </div>
        <div className="pricing-plan">
          <h4>DESTINATION</h4>
          <h1>$129</h1>
          <h3>Suites large groups</h3>
          <p>Complimentary cocktail wine Mixologist on-site</p>
          <button>Order Now</button>
        </div>
      </div>
    </>
  );
}

export default Pricing;
