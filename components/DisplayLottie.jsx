import React, { useEffect, useState } from "react";

const GreetingLottie = ({ animationPath }) => {
  const [Lottie, setLottie] = useState(null);

  useEffect(() => {
    // Dynamically import react-lottie only on the client
    import("react-lottie").then((module) => setLottie(module.default));
  }, []);

  if (!Lottie) {
    return <div>Loading animation...</div>; // Optional: Fallback while Lottie is loading
  }

  const defaultOptions = {
    loop: true,
    autoplay: true,
    path: animationPath,
  };

  return (
    <div>
      <Lottie options={defaultOptions} />
    </div>
  );
};

export default GreetingLottie;
