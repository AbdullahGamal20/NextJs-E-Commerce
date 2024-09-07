import React from "react";

const page = () => {
  return (
    <div className="page contact">
      <div className="container">
        <div className="row map">
          <h2 className="text-center text-3xl mt-10 mb-5">Get in Touch</h2>
          <hr className="w-72 m-auto mb-10 bg-primary text-primary h-[3px] rounded-full" />
          <div className="w-2/3 mx-auto mt-5">
            <iframe
              width="100%"
              height="300"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=Egypt%20,%20Mall%20of%20Arabia+(Sports%20Car%20Store)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            >
              <a href="https://www.maps.ie/population/">
                Calculate population in area
              </a>
            </iframe>
          </div>
        </div>

        <div className="row form">
          <div className="">
            <h3 className="ask my-4 text-center text-primary">
              Ask for Something
            </h3>
            <form>
              <div class="mb-3">
                <div className="w-2/3 mx-auto">
                  <div className="my-5">
                    <label
                      htmlFor="First Name"
                      className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                    >
                      <input
                        type="text"
                        id="First Name"
                        className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                      />

                      <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                        First Name
                      </span>
                    </label>
                  </div>

                  <div className="my-5">
                    <label
                      htmlFor="Last Name"
                      className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                    >
                      <input
                        type="text"
                        id="Last Name"
                        className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                      />

                      <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                        Last Name
                      </span>
                    </label>
                  </div>

                  <div>
                    <label
                      htmlFor="Email"
                      className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                    >
                      <input
                        type="email"
                        id="Email"
                        className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                      />

                      <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                        Email
                      </span>
                    </label>
                  </div>
                  <div>
                    <textarea
                      id="OrderNotes"
                      className="mt-2 w-full rounded-lg p-2 border-gray-200 align-top shadow-sm sm:text-sm"
                      rows="4"
                      placeholder="Your Message"
                    ></textarea>
                  </div>
                  <div className="flex justify-center">
                    <button
                      type="submit"
                      class="bg-primary transition-all duration-300 hover:bg-primary/80 text-white px-4 py-2 rounded-lg mt-5 text-center "
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
