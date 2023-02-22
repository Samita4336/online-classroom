import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import IMG from "../src/assets/IMG.JPG";
import Navbar from "./components/Navbar";
import Footer from "./Footer/Footer";

const Home = () => {
  const [RoomCode, setRoomCode] = useState("");
  const navigate = useNavigate();

  const submitCode = (e) => {
    e.preventDefault();
    navigate(`/room/${RoomCode}`);
  };

  return (
    <div className=" ">
      {/* Navbar */}
      <Navbar />

      {/* Hero */}

      <div className="min-h-full">
        {/* Image */}
        <div className="absolute h-full w-full flex overflow-hidden">
          <img src={IMG} alt="class" className="object-cover  w-full h-full" />
        </div>
        {/* Overlay */}
        <div className="absolute h-full w-full flex overflow-hidden bg-black/60"></div>
        {/* Hero Info */}
        <div className="lg:flex lg:pt-20 flex-col items-center justify-center relative z-10 px-6 md:max-w-[90vw] mx-auto">
          {/* Main */}
          <div className=" flex flex-col items-center justify-center pb-8">
            <h1 className="text-[30px] md:text-[70px] text-white font-bold pt-12">
              Welcome To Wachemo university
            </h1>
            <p className="text-[26px] text-white  -mt-2">
              Online Video Class Room
            </p>
          </div>

          {/*enter room*/}
          <form
            onSubmit={submitCode}
            className="text-white md:pt-12 flex flex-col items-center justify-center"
          >
            <div className=" flex flex-col justify-center items-center">
              <label className="text-[30px] md:text-[40px] font-bold pt-6">
                Please Enter ID Number
              </label>
              <input
                type="text"
                required
                placeholder="ID number"
                value={RoomCode}
                onChange={(e) => setRoomCode(e.target.value)}
                className="py-1.5 md:py-2 px-4 rounded-full max-w-[14rem] mt-2 text-black md:mt-6 outline-0"
              />
            </div>

            {/* <div className=" flex flex-col justify-center items-center">
              <label className="text-[30px] md:text-[40px] font-bold pt-6">
               Please Enter ID Number
              </label>
              <input
                type="text"
                required
                placeholder="Enter ID Number"
                value={RoomCode}
                onChange={(e) => setRoomCode(e.target.value)}
                className="py-1.5 md:py-2 px-4 rounded-full max-w-[14rem] mt-2 text-black md:mt-6 outline-0"
              />
            </div> */}

            <button
              type="submit"
              className=" bg-blue-500 hover:bg-blue-400 duration-100 ease-out font-bold w-[5rem] md:w-[7rem] rounded-full py-[5px] md:py-[7px] mt-2 md:mt-4 "
            >
              Go
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
