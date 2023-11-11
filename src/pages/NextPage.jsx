import React, { useState } from "react";
import "./css/NextPage.css";

export const NextPage = () => {
  const [pic1, setPic1] = useState("visible");
  const [pic2, setPic2] = useState("hidden");
  const [pic3, setPic3] = useState("hidden");
  const [pic4, setPic4] = useState("hidden");
  const [pic5, setPic5] = useState("hidden");
  const [pic6, setPic6] = useState("hidden");
  const [count, setCount] = useState(1);

  const handleRight = () => {
    if (count < 6) setCount(count + 1);
  };
  const handleLeft = () => {
    if (count > 1) setCount(count - 1);
  };

  React.useEffect(() => {
    switch (count) {
      case 1:
        setPic1("visible");
        setPic2("hidden");
        break;
      case 2:
        setPic2("visible");
        setPic1("hidden");
        setPic3("hidden");
        break;
      case 3:
        setPic3("visible");
        setPic2("hidden");
        setPic4("hidden");
        break;
      case 4:
        setPic4("visible");
        setPic3("hidden");
        setPic5("hidden");
        break;
      case 5:
        setPic5("visible");
        setPic4("hidden");
        setPic6("hidden");
        break;
      case 6:
        setPic6("visible");
        setPic5("hidden");
        break;
      default: console.log(count)
    }
  }, [count]);
  return (
    <div>
      <div id="backgroundImage">
        <img src="./uiAssets/background.png" alt="backgroundImage" />
      </div>

      <div id="absolutePosition">
        <div id="lowerHalf">
          <div>
            <img src="./uiAssets/rightarrow.png" alt="rightarrow" />
            <img src="./uiAssets/leftarrow.png" alt="leftarrow" />
          </div>
          <div>
            <h2>Digital Interface</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              voluptate quidem aut similique quam enim harum, nostrum vitae
              veritatis voluptas delectus possimus earum, voluptatum, sapiente
              sunt. A nihil enim necessitatibus.
            </p>
          </div>
          <div id="endCarousel">
            <img
              src="./uiAssets/leftarrow.png"
              alt="leftarrow"
              onClick={handleLeft}
            />
            <img src="./uiAssets/corousel.png" alt="" />
            <img
              src="./uiAssets/rightarrow.png"
              alt="rightarrow"
              onClick={handleRight}
            />
          </div>
          <div id="carouselImages">
            <img
              src="./uiAssets/profiles.png"
              alt="profiles"
              style={{ visibility: pic1 }}
            />
            <img
              src="./uiAssets/aromaprofile.png"
              alt="aromaProfile"
              style={{ visibility: pic2 }}
            />
            <img
              src="./uiAssets/lightprofile.png"
              alt="lightProfile"
              style={{ visibility: pic3 }}
            />
            <img
              src="./uiAssets/speakerprofile.png"
              alt="speakerProfile"
              style={{ visibility: pic4 }}
            />
            <img
              src="./uiAssets/steamprofile.png"
              alt="steamProfile"
              style={{ visibility: pic5 }}
            />
            <img
              src="./uiAssets/wallpapers.png"
              alt="wallpapers"
              style={{ visibility: pic6 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
