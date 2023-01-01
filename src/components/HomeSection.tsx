const HomeSection = () => {
  return (
    <div
      id="about__part"
      className="w-full h-[150vh] md:h-[100vh] bg-[#040506] pt-[100px] lg:pt-[90px] "
    >
      <div className="w-[85%] h-[70vh] m-[auto] flex flex-col md:flex-row space-y-16 md:space-y-0">
        <div className="md:w-[60%] flex flex-col p-[5px] justify-center items-center">
          <div className="md:w-[70%] flex flex-col">
            <p className="text-white font-[FiraCode] text-left ">Hello! I am</p>
            <p className="font-serif text-white lg:text-[50px] font-bold ml-1">
              Shrikant Jawla
            </p>
            <p className="text-[#4D5BCE] font-[FiraCode] text-[19px] ml-1">
              {'> '}Full Stack Web Developer
            </p>
            <p className="text-gray-400 font-[FiraCode] text-[17px] mt-[8px] ml-1">
              Aspiring Software Developer equipped with problem-solving and
              user-centric attitude. Has a deep interest in IT and is capable of
              writing code in NextJS, React, Redux, HTML, and CSS, on the front
              end, Node JS and Express Js on the backend. A team player and
              intensely interested in obtaining a software developer position to
              work on enhancing the product experience.
            </p>
            <button className="mt-[17px] self-start border-gray-500 border text-gray-100 hover:text-gray-500 p-[10px] px-[35px] hover:border-gray-600">
              <a
                href="https://github.com/ShrikantJawla/ShrikantJawla.github.io/raw/main/Resume/Shrikant_Jawla_resume.pdf"
                download="Shrikant_Jawla_resume"
              >
                RESUME
              </a>
            </button>
          </div>
        </div>
        <div className="md:w-[40%] flex justify-center items-center p-[5px]">
          <div className="w-[60%] flex justify-center items-center">
            <img
              className="rounded-full w-[250px]"
              src="https://github.com/ShrikantJawla/Portfolio-Images/blob/main/photo_2022-07-08_16-49-45.jpg?raw=true"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeSection
