import React, { useState, useEffect } from "react";
import "./Shop.css";
import { sendRequest } from "../../util/api";
import { AiFillStar } from "react-icons/ai";

import { useNavigate } from "react-router-dom";
import Img from "../../components/LazyImg/Img";

const Shop = () => {
  const navigate = useNavigate();
  const [productDetail, setProductDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const getProuducts = async () => {
    const response = await sendRequest("get", "product/getProducts?limit=18");
    if (!response) {
      setLoading(true);
    } else {
      setLoading(false);
      setProductDetail(response.data);
    }
  };
  useEffect(() => {
    getProuducts();
  }, []);
  const handleProductId = (id) => {
    navigate(`/product/${id}`);
  };
  return (
    <div className="shop__container">
      <h1>Shop Now!</h1>
      {/* Section Copied From Best Sellers Classes are also applying as declare in Best Sellers 
      If you want to change anything, please rewrite it. Thank You*/}
      <div className="bestSellers_cards">
        {loading ? (
          <h1>Loading....</h1>
        ) : (
          <>
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
          </>
        )}
      </div>
    </div>
  );
};

export default Shop;
