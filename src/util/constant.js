export const HERO_IMG = `https://i.pinimg.com/originals/3b/54/81/3b54813e60d3600622ccf14bdd2d0f81.jpg`;

export const NEWS_LETTER_IMG = `https://hips.hearstapps.com/elleit.h-cdn.co/assets/17/48/1512062067-allef-vinicius-on-unsplash.jpg`;

export const checkCart = () => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  return cart;
};

export const faq = [
  {
    question: "Do you support online payment?",
    answer: "No! Currently we are working on it.",
  },
  {
    question: "When will online payment option available?",
    answer: "Our developer working hardly. Hopefully It will come soon.",
  },
  {
    question: "Do you provide discounts on bunch purchase?",
    answer:
      "Yes! We appreciate it very much and we offer reasonable discounts to our customers.",
  },
  {
    question: "Do you have a return policy?",
    answer:
      "No! It's not available yet but we tried to do it as soon as possible",
  },
  {
    question: "Color and Items that we order are different from actual ones?",
    answer:
      "No! It will not. All products are exactly same as you see in the picture",
  },
  {
    question: "When will checkout feature work?",
    answer: "Our developer working hardly. Hopefully It will add soon.",
  },
];
