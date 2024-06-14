import React from "react";
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { FaGooglePlusG } from "react-icons/fa";

const Props2 = () => {
  return (
    <>
      <div className="reletive">
        <h1 className="absolute mt-10 ml-[100px] text-white font-bold text-5xl rounded-xl">
          Cards
        </h1>
        <img
          className="w-full h-[140px]"
          src="https://media.licdn.com/dms/image/C4E16AQGHZoP7dNLYuQ/profile-displaybackgroundimage-shrink_200_800/0/1640187510702?e=2147483647&v=beta&t=DyAJXNkJfUEnCk8YgLKEcib8RYsPfDwk1KzhjYN9c8A"
          alt=""
        />
      </div>

      <div className="flex justify-center items-center">
        <div className="w-[500px] h-[500px] border-2 border-white mt-[100px] ml-8 shadow-2xl">
          <div className="flex justify-center">
            <div className="h-[250px] w-[450px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 -translate-y-10 rounded-lg">
              <h1 className="text-white text-4xl capitalize text-center mt-10">
                Anna Smith
              </h1>
              <p className="text-white  capitalize text-center mt-6">
                Graphic Designer
              </p>
              <div className="flex justify-center text-2xl mt-8 space-x-8">
                <TiSocialFacebook className="size-10 bg-gray-300 rounded-full text-white" />
                <TiSocialTwitter className="size-10 bg-gray-300 rounded-full text-white" />
                <FaGooglePlusG className="size-10 bg-gray-300 rounded-full text-white " />
              </div>
            </div>
          </div>
          <p className="text-gray-500 text-center p-2 text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
            debitis, similique voluptate neque veniam nostrum aut, adipisci odit
            nemo quibusdam omnis sint quidem harum consequatur. Et ipsam debitis
            voluptates sapiente esse dignissimos itaque aspernatur inventore
            quia sed consequuntur odit exercitationem omnis, nobis, nesciunt
            ullam dolores quis iure.
          </p>
        </div>
        <div className="w-[500px] h-[500px] border-2 border-white mt-[100px] ml-8 shadow-xl">
          <div className="flex justify-center">
            <img
              className="h-[250px] w-[500px] rounded-lg"
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
          <div className="flex justify-center text-2xl mt-8 space-x-8">
            <TiSocialFacebook className="size-10 bg-blue-500 rounded-full text-white" />
            <TiSocialTwitter className="size-10 bg-sky-500 rounded-full text-white" />
            <FaGooglePlusG className="size-10 bg-rose-500 rounded-full text-white " />
          </div>
        </div>
        <div className="w-[500px] h-[500px] border-2 border-white mt-[100px] ml-8 shadow-xl">
          <div className="flex justify-center">
            <img
              className="h-[250px] w-[500px] rounded-lg"
              src="https://img.freepik.com/free-photo/smartphone-laptop-with-blank-black-screen-office-desk_23-2147875638.jpg?t=st=1715792297~exp=1715795897~hmac=912f50bf977cf98cc4149edaceed42c9c861ab3217c2d088da7f231b2e156853&w=826"
              alt=""
            />
          </div>
          <h1 className="font-bold text-2xl leading-[50px] mt-4 ml-4">
            Card Title
          </h1>
          <p className="font-bold  text-gray-500 mt-4 ml-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
            ex rem optio, eius ratione minus similique, odio officiis maxime
            excepturi.
          </p>
          <div>
            <button className="px-6 text-white mt-5 ml-4 py-2 bg-sky-500 rounded-lg">
              Click Me
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Props2;
