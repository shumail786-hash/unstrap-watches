import React, { useEffect, useState } from "react";
import "./bestSellers.css";
import { AiFillStar } from "react-icons/ai";
import { sendRequest } from "../../util/api";
import Img from "../LazyImg/Img";
import { useNavigate } from "react-router-dom";
import { ContentWrapper } from "../index";

const BestSellers = () => {
  const navigate = useNavigate();
  const [productDetail, setProductDetail] = useState(null);

  const getProuducts = async () => {
    const response = await sendRequest("get", "product/getProducts?limit=6");
    setProductDetail(response.data);
  };
  useEffect(() => {
    getProuducts();
  }, []);
  const handleProductId = (id) => {
    navigate(`/product/${id}`);
  };
  return (
    <div id="BestSellers">
      <ContentWrapper>
        <h1>Best Sellers</h1>
        <div className="besSellers_container">
          <div className="googleAd">
            <img
              src="https://www.wordstream.com/wp-content/uploads/2021/07/google-display-ads-example-2-final.png"
              alt="Google Ad"
            />
          </div>
          <div className="bestSellers_cards">
            {productDetail &&
              productDetail.map((element, index) => (
                <div
                  className="bestSellers_card"
                  key={index}
                  onClick={() => handleProductId(element._id)}
                >
                  <div className="bestSellers_image_card">
                    <Img src={element.image} />
                  </div>
                  <div className="star-rating">
                    {[...Array(5)].map((_, i) => (
                      <AiFillStar
                        key={i}
                        style={{
                          color:
                            i < Math.floor(element.rating) ? "orange" : "grey",
                        }}
                      />
                    ))}{" "}
                    <span className="bestSellers_card_ratingNumber">{`(${element.rating} Stars)`}</span>
                  </div>
                  <div className="bestSellers_product_detail">
                    <h3>{element.productName}</h3>
                    <p>{element.productEdition}</p>
                    <p>Price: ${element.price}</p>
                  </div>
                </div>
              ))}
          </div>
          <div className="googleAd">
            <img
              src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQVEGCpSStGV5UVbcb5L_LwR5JV9EDkEQB3H4dlDdNUdShQWCfW"
              alt="Google Ad"
            />
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default BestSellers;
