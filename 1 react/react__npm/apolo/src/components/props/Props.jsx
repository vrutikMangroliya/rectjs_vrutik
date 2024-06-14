import React from "react";
import { ImFacebook } from "react-icons/im";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { ImSpoonKnife } from "react-icons/im";
import { FaVolleyballBall } from "react-icons/fa";

const Props = (props) => {
  return (
    <>
      <div className="reletive">
        <h1 className="absolute mt-10 ml-[100px] text-white font-bold text-3xl rounded-xl">
          Boostrap Images
        </h1>
        <img
          className="w-full h-[140px]"
          src="https://media.licdn.com/dms/image/C4E16AQGHZoP7dNLYuQ/profile-displaybackgroundimage-shrink_200_800/0/1640187510702?e=2147483647&v=beta&t=DyAJXNkJfUEnCk8YgLKEcib8RYsPfDwk1KzhjYN9c8A"
          alt=""
        />
      </div>

      <div className="flex justify-center items-center">
        <div className="w-[400px] h-[500px] border-2 border-white mt-[40px] ml-8 shadow-xl">
          <div className="flex justify-center">
            <img
              className="h-[250px] w-[380px] rounded-lg -translate-y-5 shadow-2xl"
              src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSZ6LEJ3BiS3r3slf9qjUrb_2ffHPwkA2FVmPosSiRpoXbdBaOw"
              alt=""
            />
          </div>
          <h1 className="font-bold text-center text-2xl leading-[50px] ">
            Alice Mayer
          </h1>
          <p className="font-bold text-center text-purple-500">PhotoGrapher</p>
          <p className="font-bold text-center text-gray-500 mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
            ex rem optio, eius ratione minus similique, odio officiis maxime
            excepturi.
          </p>
          <div className="flex space-x-9 justify-center mt-7 ">
            <FaLinkedinIn className="text-sky-500 text-xl" />
            <FaTwitter className="text-sky-600 text-xl" />
            <ImFacebook className="text-blue-800 text-xl" />
          </div>
        </div>
        <div className="w-[400px] h-[500px] border-2 border-white mt-[40px] ml-8 shadow-xl">
          <div className="flex justify-center">
            <img
              className="h-[250px] rounded-lg -translate-y-4 shadow-2xl"
              src="https://manmatters.com/blog/content/images/size/w1000/2021/01/superfoods-for-hair-growth.jpeg"
              alt=""
            />
          </div>
          <div className="font-bold ">
            <ImSpoonKnife className="ml-4 mt-4 text-red-500 " />
            <h1 className="text-red-400 ml-4 leading-10">Culinary</h1>
            <h3 className="text-black ml-4 capitalize text-xl">
              Cheat day inspirations
            </h3>
            <p className="ml-4 mt-2 text-gray-500 text-start">
              Ut enim ad minima veniam, quis nostrum exercitationem ullam
              corporis suscipit laboriosam, nisi ut aliquid ex ea commodi.
            </p>
            <button className="px-6 text-white mt-2 ml-4 py-2 bg-purple-500 rounded-lg">
              Click Me
            </button>
          </div>
        </div>
        <div className="w-[400px] h-[500px] border-2 border-white mt-[40px] ml-8 shadow-xl">
          <div className="flex justify-center">
            <img
              className="h-[250px] rounded-lg"
              src="https://chrisvweatherly.wordpress.com/wp-content/uploads/2017/06/joshua-peacock-240448.jpg?quality=80&w=676"
              alt=""
            />
          </div>
          <h1 className="font-bold text-center text-2xl leading-[50px]">
            Billy Cullen
          </h1>
          <p className="font-bold text-center">Web Devloper</p>
          <p className="font-bold text-center text-gray-500 mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
            ex rem optio, eius ratione minus similique, odio officiis maxime
            excepturi.
          </p>
          <div className="flex space-x-9 justify-center mt-7 ">
            <div className="size-8 rounded-full bg-[#395C96] flex justify-center items-center">
              <ImFacebook className="text-white " />
            </div>
            <div className="size-8 rounded-full bg-[#4FADF2] flex justify-center items-center">
              <FaTwitter className="text-white " />
            </div>
            <div className="size-8 rounded-full bg-[#FC458A] flex justify-center items-center">
              <FaVolleyballBall className="text-white " />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Props;
