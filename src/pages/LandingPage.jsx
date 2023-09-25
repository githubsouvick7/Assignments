import React from "react";
import "./css/LandingPage.css";
import { useNavigate } from "react-router-dom";

export const LandingPage = () => {
  const navigate=useNavigate()
  const [innerCircle, setInnerCircle] = React.useState(1);
  const [middleCircle, setMiddleCircle] = React.useState(1);
  const [outerCircle, setOuterCircle] = React.useState(1);

  const [innerCircleVisiblity, setInnerCircleVisiblity] =
    React.useState("hidden");
  const [middleCircleVisiblity, setMiddleCircleVisiblity] =
    React.useState("hidden");
  const [outerCircleVisiblity, setOuterCircleVisiblity] =
    React.useState("hidden");

  const [hText, setHText] = React.useState("INHALE");
  const [pText, setPText] = React.useState("3 SECONDS");

  const [textVisible, setTextVisible] = React.useState("hidden");

  React.useEffect(() => {
    //----------------inhale timeout functions----------------
    setTimeout(() => {
      setInnerCircle(1.1);
      setInnerCircleVisiblity("visible");
      setTextVisible('visible')
    }, 1000);

    setTimeout(() => {
      setMiddleCircle(1.1);
      setMiddleCircleVisiblity("visible");
    }, 2000);

    setTimeout(() => {
      setOuterCircle(1.1);
      setOuterCircleVisiblity("visible");
    }, 3000);

    //---------------exhale timeout functions----------------
    setTimeout(() => {
      setInnerCircle(1);
    }, 8000);

    setTimeout(() => {
      setInnerCircleVisiblity("hidden");
      setTextVisible('hidden')
    }, 8200);

    setTimeout(() => {
      setMiddleCircle(1);
    }, 7000);

    setTimeout(() => {
      setMiddleCircleVisiblity("hidden");
    }, 7200);

    setTimeout(() => {
      setOuterCircle(1);
      setOuterCircleVisiblity("hidden");
    }, 6000);
  }, []);

  React.useEffect(() => {
    let timer = setTimeout(() => {
      setHText("HOLD");
      setPText("2 SECONDS");

      setTimeout(() => {
        setHText("EXHALE");
        setPText("3 SECONDS");
      }, 3000);
    }, 3000);

    setTimeout(()=>{
      navigate('/next')
    },9000)

    return () => clearTimeout(timer);
  }, []);

  return (
    <div id="container">
      <div id="backgroundVideo">
        <video autoPlay loop muted src="./uiAssets/loadingsteam.mp4"></video>
      </div>
      <div className="centeredCircles">
        <div
          id="circle1"
          className="circles"
          style={{
            transform: `scale(${innerCircle})`,
            visibility: innerCircleVisiblity,
          }}
        ></div>
      </div>

      <div className="centeredCircles">
        <div
          id="circle2"
          className="circles"
          style={{
            transform: `scale(${middleCircle})`,
            visibility: middleCircleVisiblity,
          }}
        ></div>
      </div>

      <div className="centeredCircles">
        <div
          id="circle3"
          className="circles"
          style={{
            transform: `scale(${outerCircle})`,
            visibility: outerCircleVisiblity,
          }}
        ></div>
      </div>

      <div className="centeredCircles">
        <div id="middleText">
          <h2 style={{ visibility: textVisible }}>{hText}</h2>
          <p style={{ visibility: textVisible }}>{pText}</p>
        </div>
      </div>
    </div>
  );
};
