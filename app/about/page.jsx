import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <>
      <section className="relative bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] bg-cover bg-center bg-no-repeat h-[255px]">
        <div className="absolute inset-0 lg:bg-gray-900/75 sm:bg-gray-900/75"></div>
        <div>
          <h2 className="text-white z-10 relative text-center pt-16 text-3xl tracking-wider	">
            About Us
          </h2>
        </div>
      </section>
      <section>
        <div className="flex items-center justify-center gap-36">
          <div className="">
            <h2 className=" z-10 relative text-center pt-16 mb-4 text-3xl tracking-wider	">
              About Us
            </h2>
            <hr className="w-11/12 m-auto bg-primary text-primary h-[3px] rounded-full" />
            <div className="bg-gray-100 p-10 rounded-lg mt-10 animate-upDown">
              <Image
                src="/logo.svg"
                alt="logo"
                width={100}
                height={80}
                className="mx-auto mt-4"
              />
            </div>
          </div>
          <div className="w-1/2 mt-16 bg-gray-100 p-4 leading-loose ">
            <p>
              At Furniture Home, we are passionate about creating beautiful,
              high-quality furniture that transforms homes into warm, inviting
              spaces. With a commitment to craftsmanship, innovation, and
              customer satisfaction, we offer a diverse range of stylish and
              functional furniture pieces that cater to every taste and
              lifestyle. Our collection features carefully curated designs that
              blend timeless elegance with modern trends, ensuring that every
              piece is both aesthetically pleasing and durable. Whether you're
              looking to refresh your living room, dining area, bedroom, or
              office, our furniture is crafted with the finest materials to meet
              the highest standards of quality and comfort. Customer
              satisfaction is at the heart of what we do. We strive to provide
              exceptional service, offering personalized guidance to help you
              find the perfect furniture to match your unique style and needs.
              From design consultation to delivery, our dedicated team is here
              to ensure a seamless shopping experience.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
