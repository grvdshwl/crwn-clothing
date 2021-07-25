import Hats from "../../assets/hats.jpg";
import Jackets from "../../assets/jackets.jpg";
import Mens from "../../assets/mens.jpg";
import Sneakers from "../../assets/sneakers.jpg";
import Womens from "../../assets/womens.jpg";

const INITIAL_STATE = {
  sections: [
    {
      title: "hats",
      imageUrl: Hats,
      id: 1,
      linkUrl: "shop/hats",
    },
    {
      title: "jackets",
      imageUrl: Jackets,
      id: 2,
      linkUrl: "shop/jackets",
    },
    {
      title: "sneakers",
      imageUrl: Sneakers,
      id: 3,
      linkUrl: "shop/sneakers",
    },
    {
      title: "womens",
      imageUrl: Womens,
      id: 4,
      linkUrl: "shop/womens",
      size: "large",
    },
    {
      title: "mens",
      imageUrl: Mens,
      size: "large",
      id: 5,
      linkUrl: "shop/mens",
    },
  ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
