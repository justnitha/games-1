import React from 'react'

export default function LizardCom({win,LizardIcon,massege}) {
  return (
    <div>
    {win ? (
      // Kalah
      <div className="p-5 lg:p-8 bg-gradient-to-r z-20 absolute top-[4rem] iphone6:top-0 lg:top-[4rem] lg:right-[2.4rem] -right-4  from-purple-11  to-purple-12 rounded-full">
            <div className="bg-white w-[90px] h-[90px] lg:w-[250px] lg:h-[250px] mx-auto rounded-full">
              <img
                src={LizardIcon}
                alt="rock"
                className="mx-auto py-6 lg:pt-12 lg:w-[120px] lg:h-[200px]"
              />
            </div>
          </div>
    ) : (
      // seri
      <div>
        {massege === "No Enemies"  || massege === "hidden" ? (
          <div className="p-5 lg:p-8 bg-gradient-to-r z-20 absolute top-[4rem] iphone6:top-0 lg:top-[4rem] lg:right-[2.4rem] -right-4  from-purple-11  to-purple-12 rounded-full">
            <div className="bg-white w-[90px] h-[90px] lg:w-[250px] lg:h-[250px] mx-auto rounded-full">
              <img
                src={LizardIcon}
                alt="rock"
                className="mx-auto py-6 lg:pt-12 lg:w-[120px] lg:h-[200px]"
              />
            </div>
          </div>
        ) : (
          // menang
          <div>
        <div className="bg-[#1f3756] p-[7rem] lg:p-[22rem] absolute -right-[3.8rem] lg:-right-[10rem] iphone6:-top-[43px] lg:-top-[7rem] top-[1rem] opacity-30 rounded-full"></div>
          <div className="bg-[#1f3756] p-[6rem] lg:p-[16rem] absolute -right-[2.8rem] lg:-right-[4rem] iphone6:-top-7 lg:-top-[2rem] top-[2rem]  opacity-30 rounded-full"></div>
          <div className="bg-[#1f3756] p-[5rem] lg:p-[12rem] absolute -right-[1.8rem] lg:right-[0rem] iphone6:-top-[0.7rem] top-[3rem]  lg:top-[2.1rem]  opacity-50 rounded-full"></div>
        <div className="p-5 lg:p-8 bg-gradient-to-r z-20 absolute top-[4rem] iphone6:top-0 lg:top-[4rem] lg:right-[2.4rem] -right-4  from-purple-11  to-purple-12 rounded-full">
          <div className="bg-white w-[90px] h-[90px] lg:w-[250px] lg:h-[250px] mx-auto rounded-full">
            <img
              src={LizardIcon}
              alt="rock"
              className="mx-auto py-6 lg:pt-12 lg:w-[120px] lg:h-[200px]"
            />
          </div>
        </div>
      </div>
          
        )}
      </div>
    )}
  </div>
  )
}
