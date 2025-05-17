import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import "./AnimationHotAirBalloon.css";

export default function AnimationHotAirBalloon() {
  return (
    <div className="balloon">
      <DotLottieReact
        src="https://lottie.host/fe443b9f-5e2a-4ef5-aaa2-04e0a31e22e3/GI1izLbEKX.lottie"
        loop
        autoplay
        height={100}
        width={100}
      />
    </div>
  );
}
