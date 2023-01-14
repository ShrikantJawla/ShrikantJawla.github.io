import React from 'react'
import Footer from './Footer'

const ContactSection = () => {
  return (
    <div
      id="contact__part"
      className="w-full min-h-[1600px] md:min-h-[1000px] bg-[#0d1116] pt-[10px] lg:pt-[10px] relative"
    >
      {/* Image and title div */}
      <div className="w-full h-[400px] ">
        {/* Title */}
        <img
          className="h-[400px] z-[5] w-full object-cover opacity-[0.6] absolute left-0 right-0 top-0"
          src="https://github.com/ShrikantJawla/Images/blob/main/pexels-johnmark-smith-32307.jpg?raw=true"
          alt=""
        />
        <div className="w-[95%] lg:w-[60%] m-[auto] mt-[100px]">
          <p className="text-white text-[20px] md:text-[30px] font-bold font-mono">
            Let's keep in touch.
          </p>
        </div>
      </div>

      {/* Form div */}

      <div className="w-[97%] md:w-[85%] lg:w-[75%] xl:w-[65%] h-[450px] flex flex-col md:flex-row border-red-600 absolute top-[19%] left-[50%] translate-x-[-50%] shadow-lg z-[12]">
        <div className="w-full md:w-[35%] bg-[#0d1626] pt-5">
          <p className="text-white px-5 font-poppins text-[23px] underline uppercase">
            Contact me
          </p>
          <div className="w-[75%] h-[180px] md:h-[200px] lg:h-[250px] m-[auto] mt-5 flex flex-col items-center justify-center">
            <div className="w-full h-[40px] flex justify-start items-center gap-3">
              <img
                className="h-[25px]"
                src="https://cdn-icons-png.flaticon.com/128/5968/5968841.png"
                alt="wattsapp icon"
              />
              <a href="tel:+919045946661" className="text-white">
                +91-9045946661
              </a>
            </div>
            <div className="w-full h-[40px] flex justify-start items-center gap-3">
              <img
                className="h-[25px]"
                src="https://cdn-icons-png.flaticon.com/128/732/732200.png"
                alt="wattsapp icon"
              />
              <a
                href="mailto:shrikantjawla@gmail.com"
                className="text-white text-[14px] lg:text[17px]"
              >
                shrikantjawla@gmail.com
              </a>
            </div>
          </div>
        </div>
        <div className="w-full md:w-[65%] bg-gray-300 pt-5">
          <p className="text-blue-800 px-5 font-poppins text-[23px] uppercase">
            Send me a message
          </p>
          <form className="w-full p-4 md:p-9 flex flex-col gap-5 h-[380px] justify-center">
            <div className="w-full flex flex-col md:flex-row justify-between gap-5">
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full md:w-[50%] h-[35px] p-2 shadow-lg rounded-sm"
              />
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full md:w-[50%] h-[35px] p-2 shadow-lg rounded-sm"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full h-[35px] p-2 shadow-lg rounded-sm"
            />
            <input
              type="text"
              placeholder="Message"
              className="w-full h-[120px] p-2 rounded-md shadow-lg"
            />
            <button className="border border-gray-700 hover:border-white h-[35px] hover:text-white font-semibold transition duration-500 ease-in-out uppercase shadow-lg">
              Send
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ContactSection
