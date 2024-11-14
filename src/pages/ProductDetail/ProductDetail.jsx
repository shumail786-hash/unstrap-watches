import React, { useEffect, useState } from "react";
import "./ProductDetail.css";
import ImgHolder from "./components/ImgHolder/ImgHolder";
import { ContentWrapper } from "../../components/";
import Details from "./components/Details";
import { useLocation, useNavigate } from "react-router-dom";
import { sendRequest } from "../../util/api";

const ProductDetail = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const [productDetails, setProductDetails] = useState(null);

  const getProduct = async () => {
    const id = pathname.split("/")[2];

    const response = await sendRequest(
      "GET",
      `product/getSingleProduct?id=${id}`
    );

    if (!response?.success) navigate("/");

    setProductDetails(response.data);
  };

  useEffect(() => {
    getProduct();
  }, [pathname]);

  return (
    <div className="productDetail">
      <ContentWrapper>
        <ImgHolder data={productDetails} />
        <Details data={productDetails} />
      </ContentWrapper>
    </div>
  );
};

export default ProductDetail;
