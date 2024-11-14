import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "./testimonial.css";
import testimonialData from "../../util/data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiFillStar } from "react-icons/ai";
import { sendRequest } from "../../util/api";

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [data, setData] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await sendRequest(
        "GET",
        "testimonial/getAllTestimonials"
      );

      if (response.success) {
        setData(response.data);
      }
    })();

    return () => {
      null;
    };
  }, []);

  return (
    <div className="testimonial-container" id="Testimonial">
      <h1>Testimonials</h1>
      <Slider {...settings}>
        {data?.map((testimonial) => (
          <div key={testimonial._id} className="testimonial-item">
            <img
              src={testimonial.avtar}
              alt={testimonial.fullName}
              className="client-image"
            />
            <h3 className="client-name">{testimonial.fullName}</h3>
            <p className="client-role">{testimonial.designation}</p>
            <p className="client-review">{testimonial.review}</p>
            <div className="client-rating">
              <div className="star-rating">
                {[...Array(5)].map((_, i) => (
                  <AiFillStar
                    key={i}
                    style={{
                      color:
                        i < Math.floor(testimonial.rating) ? "orange" : "grey",
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonial;
