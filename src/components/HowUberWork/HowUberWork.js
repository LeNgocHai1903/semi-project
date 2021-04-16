import React from "react";
import "./HowUberWork.css";

const HowUberWork = (props) => {
  return (
    <div className="main">
      <div className="mainContent">
        <div className="leftContent">
          <h1>How Uber works</h1>
          <p>
            On-demand transportation technology is our core service, and the app
            that connects driver-partners and riders is what makes it all
            possible. Here's how it works, step by step
          </p>
        </div>

        <div className="rightContent">
          <div className="Text">
            <h5>Step 1: A rider opens the app</h5>
            <p>
              The rider enters their destination into the Where to? box on the
              top of the screen; tap each ride option to see the wait time, car
              sizes and price; then confirms their pickup location and taps
              Request.
            </p>
          </div>
          <div className="Text">
            <h5>Step 2: The rider is matched with a driver</h5>
            <p>
              A nearby driver sees ang choose to accept the rider's trip
              request. The rider is automatically notified when the driver's
              vehicle is about a minute away.
            </p>
          </div>
          <div className="Text">
            <h5>Step 3: The driver picks up the rider</h5>
            <p>
              The driver and rider verify each other's names and the
              destination. Then the driver starts the ride.
            </p>
          </div>
          <div className="Text">
            <h5>Step 4: The driver picks up the rider</h5>
            <p>
              The app gives the driver the option to access turn-by-turn
              directuins, so the driver can focus on getting there and the rider
              can focus on enjoying a comfortable ride.
            </p>
          </div>
          <div className="Text">
            <h5>Step 5: The driver and rider leave ratings and reviews</h5>
            <p>
              At the end of each trip, drivers and riders can rate each other
              from 1 to 5 stars. Riders can also give the driver compliments. In
              cities where tipping is available, they can also add a little
              extra to show their gratitude.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowUberWork;
