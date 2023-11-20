import React from "react";

export default function Pilihan({
  bgImage,
  handleKlikIcon,
  rockIcon,
  paperIcon,
  scissorsIcon,
  spockIcon,
  LizardIcon,
}) {
  return (
    <div
      className="bg-images  h-[45vh]  lg:h-[50vh] w-[100%]  "
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="flex justify-center -mt-14 iphone6:-mt-0">
        <div
          className="atur p-4 lg:p-5 2xl:p-8 iphone6:p-4 iphone6:-mt-8 bg-gradient-to-r cursor-pointer from-orange-11 to-orange-12 rounded-full"
          onClick={() => handleKlikIcon("scissors")}
        >
          <div className="bg-white p-3 iphone6:p-3 lg:p-2 2xl:p-5 rounded-full">
            <div
              className=" bg-center bg-no-repeat h-[50px] w-[50px]  lg:h-[100px] lg:w-[100px] iphone6:w-[60px] iphone6:h-[60px] 2xl:w-[120px] 2xl:h-[120px]"
              style={{ backgroundImage: `url(${scissorsIcon})` }}
            ></div>
          </div>
        </div>
      </div>
      <div className="flex gap-[6rem] lg:gap-[13rem] xl:-mt-1 2xl:-mt-3 lg:-mt-6 -mt-2 iphone6:-mt-5 justify-center">
        <div
          className="p-4 lg:p-5 2xl:p-8 iphone6:p-4 bg-gradient-to-r cursor-pointer from-cyan-11 to-cyan-12 rounded-full"
          onClick={() => handleKlikIcon("spock")}
        >
          <div className="bg-white p-3 iphone6:p-3 lg:p-2 2xl:p-5 rounded-full">
            <div
              className=" bg-center bg-no-repeat h-[50px] w-[50px]  lg:h-[100px] lg:w-[100px] iphone6:w-[60px] iphone6:h-[60px] 2xl:w-[120px] 2xl:h-[120px]"
              style={{ backgroundImage: `url(${spockIcon})` }}
            ></div>
          </div>
        </div>
        <div
          className="p-4 lg:p-5 2xl:p-8 iphone6:p-4 bg-gradient-to-r cursor-pointer from-blue-11 to-blue-12 rounded-full"
          onClick={() => handleKlikIcon("paper")}
        >
          <div className="bg-white p-3 iphone6:p-3 lg:p-2 2xl:p-5 rounded-full">
            <div
              className=" bg-center bg-no-repeat h-[50px] w-[50px]  lg:h-[100px] lg:w-[100px] iphone6:w-[60px] iphone6:h-[60px] 2xl:w-[120px] 2xl:h-[120px]"
              style={{ backgroundImage: `url(${paperIcon})` }}
            ></div>
          </div>
        </div>
      </div>
      <div className="flex gap-[2rem] lg:gap-[4rem] 2xl:mt-20 lg:mt-9 iphone6:mt-4 mt-7 justify-center">
        <div
          className="p-4 lg:p-5 2xl:p-8 iphone6:p-4 bg-gradient-to-t cursor-pointer from-purple-11 to-purple-12 rounded-full shadow-purple-12"
          onClick={() => handleKlikIcon("lizard")}
        >
          <div className="bg-white p-3 iphone6:p-3 lg:p-2 2xl:p-5 rounded-full">
            <div
              className=" bg-center bg-no-repeat h-[50px] w-[50px]  lg:h-[100px] lg:w-[100px] iphone6:w-[60px] iphone6:h-[60px] 2xl:w-[120px] 2xl:h-[120px]"
              style={{ backgroundImage: `url(${LizardIcon})` }}
            ></div>
          </div>
        </div>
        <div
          className="p-4 lg:p-5 2xl:p-8 iphone6:p-4 bg-gradient-to-t cursor-pointer from-pink-11 to-pink-12 rounded-full shadow-pink-12"
          onClick={() => handleKlikIcon("rock")}
        >
          <div className="bg-white p-3 iphone6:p-3 lg:p-2 2xl:p-5 rounded-full">
            <div
              className=" bg-center bg-no-repeat h-[50px] w-[50px] lg:h-[100px] lg:w-[100px] iphone6:w-[60px] iphone6:h-[60px] 2xl:w-[120px] 2xl:h-[120px]"
              style={{ backgroundImage: `url(${rockIcon})` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
