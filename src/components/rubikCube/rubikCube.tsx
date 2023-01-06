import React from "react";

const RubikCube = () => {
  return (
    <div>
      <style jsx>
        {`
          .cube {
            width: 250px;
            height: 250px;

            animation: rotate 10s infinite alternate;
            transform-style: preserve-3d;
            margin: 7rem auto;
          }

          .face {
            display: flex;
            align-items: center;
            justify-content: center;

            font-size: 50px;
            font-weight: bold;
            color: #234e52;

            width: 250px;
            height: 250px;
            position: absolute;
          }

          .face--front {
            background: red;
            transform: translateZ(100px);
          }

          .face--right {
            background: yellow;
            transform: rotateY(90deg) translateZ(100px);
          }

          .face--back {
            background: green;
            transform: rotateY(180deg) translateZ(100px);
          }

          .face--left {
            background: blue;
            transform: rotateY(-90deg) translateZ(100px);
          }

          .face--top {
            background: white;
            transform: rotateX(90deg) translateZ(100px);
          }

          .face--bottom {
            background: orange;
            transform: rotateX(-90deg) translateZ(100px);
          }

          @keyframes rotate {
            from {
              transform: rotateX(-20deg) rotateY(-10deg);
            }

            50% {
              transform: rotateX(20deg) rotateY(320deg);
            }

            to {
              transform: rotateX(-20deg) rotateY(-20deg);
            }
          }
        `}
      </style>

      <div className="cube">
        <div className="face face--front"></div>
        <div className="face face--right"></div>
        <div className="face face--back"></div>
        <div className="face face--left"></div>
        <div className="face face--top"></div>
        <div className="face face--bottom"></div>
      </div>
    </div>
  );
};

export default RubikCube;
