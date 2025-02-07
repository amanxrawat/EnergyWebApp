import React, { useRef, useEffect, useState } from "react";
import { gsap, Power4 } from "gsap";

const PageLoad1 = () => {
  const [num, setNum] = useState(0); // State to track the counter
  const mainRef = useRef(); // Ref for the main container

  useEffect(() => {
    // Start the loader animation when the component mounts
    startLoader();
  }, []);

  useEffect(() => {
    // Trigger box animation when the counter reaches 100
    if (num === 100) {
      boxAnimation();
    }
  }, [num]);

  function startLoader() {
    let temp = 0;

    function numIncrement() {
      if (temp >= 100) {
        temp = 100;
        setNum(temp);
        return;
      }

      temp += Math.random() * 10 + 1; // Increment counter by a random value
      if (temp > 100) temp = 100; // Clamp to 100
      setNum(Math.floor(temp)); // Update state

      const delay = Math.floor(Math.random() * 250) + 50; // Random delay (50-300ms)
      setTimeout(numIncrement, delay); // Schedule the next increment
    }

    numIncrement();
  }

  function boxAnimation() {
    // Fade out the counter
    gsap.to(".counter", 0.25, {
      opacity: 0,
    });

    // Animate box height collapse
    gsap.to(".box", 1.25, {
      height: 0,
      stagger: {
        amount: 0.8, // Delay between each box animation
      },
      ease: Power4,
    });

    gsap.to(mainRef.current,0.1,{
        height:0,
        delay:1.5
    })

  }

  return (
    <div>
      <div
        ref={mainRef}
        className="main-div w-[100vw] h-screen absolute top-0 left-0  flex z-[10]"
      >
        {/* Counter */}
        <div className="counter font-Fascinate w-full h-full text-white absolute flex items-end justify-end text-8xl p-[4vw]">
          {num}%
        </div>

        {/* Boxes */}
        {Array(10) 
          .fill("")
          .map((_, index) => (
            <div
              key={index}
              className="box bg-black w-[10vw] h-full"
            ></div>
          ))}
      </div>
    </div>
  );
};

export default PageLoad1;


// note : the main div is using position absolute so make the chaneg in the pages after the animation accordingly