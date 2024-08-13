import React from "react";

interface Testimonial {
  review: string;
  reviewer: string;
}

const testimonials: Testimonial[] = [
  {
    review:
      "Salon24 exceeded my expectations! The staff was friendly, and my haircut and color were perfect. Highly recommend!",
    reviewer: "Riya",
  },
  {
    review:
      "Salon24 in Patiala is the best! Great ambiance, skilled stylists, and quality service. I wont go anywhere else!",
    reviewer: "Simran",
  },
  {
    review:
      "Exceptional service at Salon24. The staff is attentive, and I left feeling rejuvenated. Definitely coming back!",
    reviewer: "Prabjot Kaur",
  },
];

const Testimonials: React.FC = () => {
  const showReview = Math.floor(Math.random() * testimonials.length);
  return (
    <div className="bg-blue-500 w-full bg-[url('/banner/salon1.jpg')] bg-bottom bg-cover pt-52 mb-5 ">
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
