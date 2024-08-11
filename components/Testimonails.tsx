import React from "react";

interface Testimonial {
  review: string;
  reviewer: string;
}

const testimonials: Testimonial[] = [
  {
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo dolorem, consectetur sint distinctio quis officiis. Doloremque in molestias nesciunt eligendi.",
    reviewer: "Carl",
  },
  {
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo dolorem, consectetur sint distinctio quis officiis. Doloremque in molestias nesciunt eligendi.",
    reviewer: "Alice",
  },
  {
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo dolorem, consectetur sint distinctio quis officiis. Doloremque in molestias nesciunt eligendi.",
    reviewer: "Jhon",
  },
];

const Testimonials: React.FC = () => {
  const showReview = Math.floor(Math.random() * testimonials.length);
  return (
    <div className="bg-blue-500 w-full bg-[url('/salon1.jpg')] bg-bottom bg-cover pt-52 mb-5 ">
      <div className="bg-primary/90 relative max-w-screen-sm ml-auto">
        <div className="testimonails-content text-center p-14 text-white  ">
          <p className="font-bold text-2xl mb-5">Reviews</p>
          <p className="text-xl font-light mb-5">
            {testimonials[showReview].review}
          </p>
          <span className="font-bold  border-spacing-5 border-b-4 uppercase ">
            - {testimonials[showReview].reviewer}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
