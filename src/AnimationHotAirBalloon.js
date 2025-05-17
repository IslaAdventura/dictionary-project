import React from "react";
import "./AnimationHotAirBalloon.css";

export default function AnimationHotAirBalloon() {
  return (
    <div className="hot-air-balloon-container">
      <div className="steam-puffs">
        <div className="steam-puff-1" />
        <div className="steam-puff-2" />
      </div>

      <div className="balloon">
        <div className="panel panel-1" />
        <div className="panel panel-2" />
        <div className="panel panel-3" />

        <div className="valve" />

        <div className="rope rope-1" />
        <div className="rope rope-2" />
        <div className="rope rope-3" />
        <div className="rope rope-4" />
      </div>

      <div className="basket">
        <div className="basket-detail" />
        <div className="engine-pipe pipe-1" />
        <div className="engine-pipe pipe-2" />
      </div>
    </div>
  );
}
