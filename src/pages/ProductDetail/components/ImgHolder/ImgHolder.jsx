import React from "react";
import { LazyImg } from "../../../../components";

const ImgHolder = ({ data }) => {
  return (
    <div className="imgHolder">
      <div className="imgHolder-img-container">
        <LazyImg src={data?.image} />
        <div className="imgsPlaceholder">
          {/* {[1, 2, 3].map((item, i) => (
            <div
              kay={item + i}
              className={`${item === 1 && "placeholder-active"}`}
            >
              <LazyImg src={data?.image} />
            </div>
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default ImgHolder;
