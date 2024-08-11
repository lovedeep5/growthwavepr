import Image from "next/image";
import React from "react";

const Services = () => {
  return (
    <div className="max-w-4xl">
      <h1 className="text-3xl mb-5 font-bold">Our Services</h1>
      <p className="leading-7 text-xl font-light mb-5">
        At Salon24, we bring the latest in beauty and grooming right to your
        doorstep across Punjab. Our expert team is dedicated to providing you
        with top-notch services that cater to all your beauty needs. Here’s what
        we offer:
      </p>

      <h2 className="mb-5 text-2xl font-bold">Hair Care</h2>
      <p className="leading-7 text-xl font-light mb-5">
        From stylish haircuts to vibrant hair coloring, our experienced stylists
        use high-quality products to give your hair the perfect look. We also
        offer specialized treatments like keratin, hair spa, and hair smoothing
        to rejuvenate your locks.
      </p>

      <h2 className="mb-5 text-2xl font-bold">Skin Care</h2>
      <p className="leading-7 text-xl font-light mb-5">
        Pamper your skin with our wide range of facials, clean-ups, and advanced
        skincare treatments. Whether it&rsquo;s a soothing facial or a
        rejuvenating peel, our services are designed to leave your skin glowing
        and refreshed.
      </p>

      <h2 className="mb-5 text-2xl font-bold">Bridal &amp; Party Makeup</h2>
      <p className="leading-7 text-xl font-light mb-5">
        Look your best on your special day with our professional makeup
        services. Our makeup artists specialize in bridal, party, and occasion
        makeup, ensuring a flawless look that lasts all day.
      </p>

      <h2 className="mb-5 text-2xl font-bold">Manicure &amp; Pedicure</h2>
      <p className="leading-7 text-xl font-light mb-5">
        Indulge in a luxurious manicure or pedicure session at Salon24. Our
        experts use the best products to cleanse, exfoliate, and beautify your
        hands and feet, leaving them soft, smooth, and polished.
      </p>

      <h2 className="mb-5 text-2xl font-bold">Waxing &amp; Threading</h2>
      <p className="leading-7 text-xl font-light mb-5">
        We offer a range of waxing and threading services to keep your skin
        smooth and hair-free. Choose from our various options, including
        full-body waxing, eyebrow threading, and more, all performed with care
        for your comfort.
      </p>

      <h2 className="mb-5 text-2xl font-bold">Body Spa &amp; Massage</h2>
      <p className="leading-7 text-xl font-light mb-5">
        Relax and unwind with our soothing body spa and massage services. Our
        trained therapists use techniques that relieve stress, improve
        circulation, and rejuvenate your body and mind.
      </p>

      <h2 className="mb-5 text-2xl font-bold">Nail Art</h2>
      <p className="leading-7 text-xl font-light mb-5">
        Express your creativity with our custom nail art services. Whether you
        prefer a simple design or an intricate pattern, our nail technicians can
        create the perfect look for your nails.
      </p>

      <div className="flex gap-5 flex-col md:flex-row">
        <div>
          <Image
            src="/pages/services/ratelist-1.jpg"
            alt="makeup-image"
            width={800}
            height={500}
            className="mb-5 w-full object-contain max-w-md"
          />
        </div>

        <div>
          <Image
            src="/pages/services/ratelist-2.jpg"
            alt="makeup-image"
            width={800}
            height={500}
            className="mb-5 w-full object-contain max-w-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
