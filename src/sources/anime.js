import React, { useEffect } from 'react';
import lottie from 'lottie-web';
import animationData from './1.json'; // Replace with the actual JSON data

const BackgroundAnimation = () => {
  useEffect(() => {
    // Options for the Lottie animation
    const options = {
      container: document.getElementById('background-animation'), // HTML element to render the animation
      renderer: 'svg', // You can use 'svg', 'canvas', or 'html' based on your preference
      loop: false, // Whether the animation should loop
      autoplay: true, // Whether the animation should play automatically
      animationData, // The JSON animation data

    };

    const animation = lottie.loadAnimation(options);

    return () => {
      // Clean up when the component is unmounted
      animation.destroy();
    };
  }, []);

  return <div id="background-animation" style={{ width: '100%', height: '50%', alignItems: "center" }} />;
};

export default BackgroundAnimation;
