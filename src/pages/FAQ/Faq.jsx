import React, { useState } from "react";
import "./faq.css";
import { ContentWrapper } from "../../components";
import { faq } from "../../util/constant";
const Faq = () => {
  const [toggler, setToggler] = useState(Array(faq.length).fill(false));

  const handleFaqToggle = (index) => {
    const newToggler = [...toggler];
    newToggler[index] = !newToggler[index];
    setToggler(newToggler);
  };
  return (
    <div className="faq_container">
      <h1>FAQ's</h1>
      <ContentWrapper>
        {faq.map((element, index) => (
          <section className="faq_section" key={index}>
            <div className="faq">
              <div className="faq_icon" onClick={() => handleFaqToggle(index)}>
                {toggler[index] ? <p>-</p> : <p>+</p>}
              </div>
              <div
                className="faq_question"
                onClick={() => handleFaqToggle(index)}
              >
                <p>{element.question}</p>
              </div>
            </div>
            <div className={toggler[index] ? "faq_answer" : "faq_anwer_hide"}>
              <p>{element.answer}</p>
            </div>
          </section>
        ))}
      </ContentWrapper>
    </div>
  );
};

export default Faq;
