import React, { useState, useEffect,Suspense,lazy } from "react";
import rockIcon from "../assets/icon-rock.svg";
import paperIcon from "../assets/icon-paper.svg";
import scissorsIcon from "../assets/icon-scissors.svg";
import bgImage from "../assets/bg-triangle.svg"

export default function Picked({ score, setScore,selectIcon, setSelectIcon }) {
  
  const [computerIcon, setComputerIcon] = useState(null);
  const [massege, setMassege] = useState("hidden");
  const [win, setWin] = useState(false);
  const [again, setAgain] = useState(false);
  // const [efek, setEfek] = useState(false);
  console.log(massege);
  console.log(computerIcon);

  const icons = {
    rock: rockIcon,
    paper: paperIcon,
    scissors: scissorsIcon,
  };

  const availableOptions = Object.keys(icons);

  function handleKlikIcon(iconName) {
    setSelectIcon(iconName);
    // Efek acakan gambar sebelum munculnya gambar sebenarnya
    const intervalId = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * availableOptions.length);
      const randomComIcon = availableOptions[randomIndex];
      setComputerIcon(randomComIcon);
    }, 50);

    setTimeout(()=> {
      clearInterval(intervalId); // Hentikan efek acakan
      const randomIndex = Math.floor(Math.random() * availableOptions.length);
      const randomComIcon = availableOptions[randomIndex];
      setComputerIcon(randomComIcon);
  
      // Rules of the game
      if (
        (iconName === "rock" && randomComIcon === "scissors") ||
        (iconName === "paper" && randomComIcon === "rock") ||
        (iconName === "scissors" && randomComIcon === "paper")
      ) {
        setScore(score + 1);
        setMassege("You Win" );
        setWin(true);
        // winValue= true
      } else if (
        (iconName === "rock" && randomComIcon === "paper") ||
        (iconName === "paper" && randomComIcon === "scissors") ||
        (iconName === "scissors" && randomComIcon === "rock")
      ) {
        setScore(score - 1);
        setMassege("You Lose" );
        setWin(false);
        // winValue = false
      } else if (
        (iconName === "rock" && randomComIcon === "rock") ||
        (iconName === "paper" && randomComIcon === "paper") ||
        (iconName === "scissors" && randomComIcon === "scissors")
      ) {
        setScore(score);
        setMassege("No Enemies" );
        setWin(null)
        // winValue = null
      }
      // setMassege(' ')
    },1000)
   
  }

  const playAgain = () => {
    setSelectIcon(null);
    setComputerIcon(null);
    setMassege("hidden");
    setAgain(true);
    setWin(null)
  };

  useEffect(()=>{
    playAgain();
  },[again])

  return (
    <div className="mt-20">
      {selectIcon ? (
        // user icon
        <div className="w-[80%] mx-auto h-screen grid grid-cols-2 lg:grid-cols-3 relative">
          <div className="relative">
            <h1 className="text-white tracking-wider lg:text-xl text-center mb-10 absolute z-30 iphone6:left-[1.5rem] left-[1rem] lg:left-[9rem] lg:top-0  top-[15rem] iphone6:top-[10rem]">
              You Picked
            </h1>
            {selectIcon === "paper" && (
              <div>
                {win ? (
                  // menang
                  <div>
                    <div className="bg-[#1f3756] p-[7rem] lg:p-[22rem] absolute -left-[3rem] lg:-left-[10rem] iphone6:-top-[43px] lg:-top-[7rem] top-[1rem] opacity-30 rounded-full"></div>
                    <div className="bg-[#1f3756] p-[6rem] lg:p-[16rem] absolute -left-[2rem] lg:-left-[4rem] iphone6:-top-7 lg:-top-[2rem] top-[2rem]  opacity-30 rounded-full"></div>
                    <div className="bg-[#1f3756] p-[5rem] lg:p-[12rem] absolute -left-[1rem] lg:left-[0rem] iphone6:-top-[0.7rem] top-[3rem]  lg:top-[2.1rem]  opacity-50 rounded-full"></div>
                    <div className="p-5 lg:p-8 bg-gradient-to-r z-20 absolute top-[4rem] iphone6:top-0 lg:top-[4rem] lg:left-[2.4rem]  from-purple-11  to-purple-12 rounded-full">
                      <div className="bg-white w-[90px] h-[90px] lg:w-[250px] lg:h-[250px] mx-auto rounded-full">
                        <img
                          src={icons[selectIcon]}
                          alt={selectIcon}
                          className="mx-auto py-3 lg:pt-12 lg:w-[120px] lg:h-[200px]"
                          // width="120"
                          // height="200"
                        />
                      </div>
                    </div>
                  </div>
                ) : (
                  // seri
                  <div>
                    {massege === "No Enemies"  || massege === "hidden" ? (
                      <div className="p-5 lg:p-8 bg-gradient-to-r z-20 absolute top-[4rem] iphone6:top-0 lg:top-[4rem] lg:left-[2.4rem]  from-purple-11  to-purple-12 rounded-full">
                        <div className="bg-white w-[90px] h-[90px] lg:w-[250px] lg:h-[250px] mx-auto rounded-full">
                          <img
                            src={icons[selectIcon]}
                            alt={selectIcon}
                            className="mx-auto py-3 lg:pt-12 lg:w-[120px] lg:h-[200px]"
                            // width="120"
                            // height="200"
                          />
                        </div>
                      </div>
                    ) : (
                      // kalah
                      <div className="p-5 lg:p-8 bg-gradient-to-r z-20 absolute top-[4rem] iphone6:top-0 lg:top-[4rem] lg:left-[2.4rem]  from-purple-11  to-purple-12 rounded-full">
                        <div className="bg-white w-[90px] h-[90px] lg:w-[250px] lg:h-[250px] mx-auto rounded-full">
                          <img
                            src={icons[selectIcon]}
                            alt={selectIcon}
                            className="mx-auto py-3 lg:pt-12 lg:w-[120px] lg:h-[200px]"
                            // width="120"
                            // height="200"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
            {selectIcon === "scissors" && (
              <div>
                {win ? (
                  // menang
                  <div>
                    <div className="bg-[#1f3756] p-[7rem] lg:p-[22rem] absolute -left-[3rem] lg:-left-[10rem] iphone6:-top-[43px] lg:-top-[7rem] top-[1rem] opacity-30 rounded-full"></div>
                    <div className="bg-[#1f3756] p-[6rem] lg:p-[16rem] absolute -left-[2rem] lg:-left-[4rem] iphone6:-top-7 lg:-top-[2rem] top-[2rem]  opacity-30 rounded-full"></div>
                    <div className="bg-[#1f3756] p-[5rem] lg:p-[12rem] absolute -left-[1rem] lg:left-[0rem] iphone6:-top-[0.7rem] top-[3rem]  lg:top-[2.1rem]  opacity-50 rounded-full"></div>
                    <div className="p-5 lg:p-8 bg-gradient-to-r z-20 absolute top-[4rem] iphone6:top-0 lg:top-[4rem] lg:left-[2.4rem]  from-orange-11  to-orange-12 rounded-full">
                      <div className="bg-white w-[90px] h-[90px] lg:w-[250px] lg:h-[250px] mx-auto rounded-full">
                        <img
                          src={icons[selectIcon]}
                          alt={selectIcon}
                          className="mx-auto py-3 lg:pt-12 lg:w-[120px] lg:h-[200px]"
                          // width="120"
                          // height="200"
                        />
                      </div>
                    </div>
                  </div>
                ) : (
                  // seri
                  <div>
                    {massege === "No Enemies"  || massege === "hidden" ? (
                      <div className="p-5 lg:p-8 bg-gradient-to-r z-20 absolute top-[4rem] iphone6:top-0 lg:top-[4rem] lg:left-[2.4rem]  from-orange-11  to-orange-12 rounded-full">
                        <div className="bg-white w-[90px] h-[90px] lg:w-[250px] lg:h-[250px] mx-auto rounded-full">
                          <img
                            src={icons[selectIcon]}
                            alt={selectIcon}
                            className="mx-auto py-3 lg:pt-12 lg:w-[120px] lg:h-[200px]"
                            // width="120"
                            // height="200"
                          />
                        </div>
                      </div>
                    ) : (
                      // kalah
                      <div className="p-5 lg:p-8 bg-gradient-to-r z-20 absolute top-[4rem] iphone6:top-0 lg:top-[4rem] lg:left-[2.4rem]  from-orange-11  to-orange-12 rounded-full">
                        <div className="bg-white w-[90px] h-[90px] lg:w-[250px] lg:h-[250px] mx-auto rounded-full">
                          <img
                            src={icons[selectIcon]}
                            alt={selectIcon}
                            className="mx-auto py-3 lg:pt-12 lg:w-[120px] lg:h-[200px]"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
            {selectIcon === "rock" && (
              <div>
                {win ? (
                  // menang
                  <div>
                    <div className="bg-[#1f3756] p-[7rem] lg:p-[22rem] absolute -left-[3rem] lg:-left-[10rem] iphone6:-top-[43px] lg:-top-[7rem] top-[1rem] opacity-30 rounded-full"></div>
                    <div className="bg-[#1f3756] p-[6rem] lg:p-[16rem] absolute -left-[2rem] lg:-left-[4rem] iphone6:-top-7 lg:-top-[2rem] top-[2rem]  opacity-30 rounded-full"></div>
                    <div className="bg-[#1f3756] p-[5rem] lg:p-[12rem] absolute -left-[1rem] lg:left-[0rem] iphone6:-top-[0.7rem] top-[3rem]  lg:top-[2.1rem]  opacity-50 rounded-full"></div>
                    <div className="p-5 lg:p-8 bg-gradient-to-r z-20 absolute top-[4rem] iphone6:top-0 lg:top-[4rem] lg:left-[2.4rem]  from-pink-11  to-pink-12 rounded-full">
                      <div className="bg-white w-[90px] h-[90px] lg:w-[250px] lg:h-[250px] mx-auto rounded-full">
                        <img
                          src={icons[selectIcon]}
                          alt={selectIcon}
                          className="mx-auto py-6 lg:pt-12 lg:w-[120px] lg:h-[200px]"
                          // width="120"
                          // height="200"
                        />
                      </div>
                    </div>
                  </div>
                ) : (
                  // seri
                  <div>
                    {massege === "No Enemies"  || massege === "hidden" ? (
                      <div className="p-5 lg:p-8 bg-gradient-to-r z-20 absolute top-[4rem] iphone6:top-0 lg:top-[4rem] lg:left-[2.4rem]  from-pink-11  to-pink-12 rounded-full">
                        <div className="bg-white w-[90px] h-[90px] lg:w-[250px] lg:h-[250px] mx-auto rounded-full">
                          <img
                            src={icons[selectIcon]}
                            alt={selectIcon}
                            className="mx-auto py-6 lg:pt-12 lg:w-[120px] lg:h-[200px]"
                            // width="120"
                            // height="200"
                          />
                        </div>
                      </div>
                    ) : (
                      // kalah
                      <div className="p-5 lg:p-8 bg-gradient-to-r z-20 absolute top-[4rem] iphone6:top-0 lg:top-[4rem] lg:left-[2.4rem]  from-pink-11  to-pink-12 rounded-full">
                        <div className="bg-white w-[90px] h-[90px] lg:w-[250px] lg:h-[250px] mx-auto rounded-full">
                          <img
                            src={icons[selectIcon]}
                            alt={selectIcon}
                            className="mx-auto py-6 lg:pt-12 lg:w-[120px] lg:h-[200px]"
                            // width="120"
                            // height="200"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* keterangan */}
          <div className="hidden lg:block">
          {massege === "hidden" && (
             <div className="w-[70%] mx-auto  relative bg-red-400 hidden"></div>
          )}
          {massege !== "hidden" && (
            <div className="w-[70%] mx-auto  relative bg-red-400 ">
              <div className='absolute left-7 z-20 uppercase'>
                <p className='mt-32 text-5xl font-bold tracking-widest text-white'>
                  {massege}
                </p>
                <p
                  className="bg-white text-center text-pink-11 mt-3 tracking-wider cursor-pointer py-3 rounded-md text-xl block"
                  onClick={playAgain}
                >
                  play again
                </p>
            </div>
          </div>
          )}
          </div>
          

          {/* the house picked */}
          <div className="">
            <h1 className="text-white tracking-wider lg:text-xl text-center mb-10 absolute z-30 iphone6:-right-[1rem] -right-[1rem] lg:right-[8rem] lg:top-0 top-[15rem] iphone6:top-[10rem]">
              The House Picked
            </h1>
            {computerIcon === "paper" && (
              <div>
                {win ? (
                  // kalah
                  <div className="p-5 lg:p-8 bg-gradient-to-r z-20 absolute top-[4rem] iphone6:top-0 lg:top-[4rem] lg:right-[2.4rem] -right-4  from-purple-11  to-purple-12 rounded-full">
                        <div className="bg-white w-[90px] h-[90px] lg:w-[250px] lg:h-[250px] mx-auto rounded-full">
                          <img
                            src={paperIcon}
                            alt="paper"
                            className="mx-auto py-3 lg:pt-12 lg:w-[120px] lg:h-[200px]"
                            // width="120"
                            // height="200"
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
                            src={paperIcon}
                            alt="paper"
                            className="mx-auto py-3 lg:pt-12 lg:w-[120px] lg:h-[200px]"
                            // width="120"
                            // height="200"
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
                            src={paperIcon}
                            alt="paper"
                            className="mx-auto py-3 lg:pt-12 lg:w-[120px] lg:h-[200px]"
                            // width="120"
                            // height="200"
                          />
                        </div>
                      </div>
                    </div>
                    )}
                  </div>
                )}
              </div>
            )}
            {computerIcon === "scissors" && (
              <div>
                {win ? (
                  // kalah
                  <div className="p-5 lg:p-8 bg-gradient-to-r z-20 absolute top-[4rem] iphone6:top-0 lg:top-[4rem] lg:right-[2.4rem] -right-4  from-orange-11  to-orange-12 rounded-full">
                        <div className="bg-white w-[90px] h-[90px] lg:w-[250px] lg:h-[250px] mx-auto rounded-full">
                          <img
                            src={scissorsIcon}
                            alt="gunting"
                            className="mx-auto py-3 lg:pt-12 lg:w-[120px] lg:h-[200px]"
                            // width="120"
                            // height="200"
                          />
                        </div>
                      </div>
                  
                ) : (
                  // seri
                  <div>
                    {massege === "No Enemies"  || massege === "hidden" ? (
                      <div className="p-5 lg:p-8 bg-gradient-to-r z-20 absolute top-[4rem] iphone6:top-0 lg:top-[4rem] lg:right-[2.4rem] -right-4  from-orange-11  to-orange-12 rounded-full">
                        <div className="bg-white w-[90px] h-[90px] lg:w-[250px] lg:h-[250px] mx-auto rounded-full">
                          <img
                            src={scissorsIcon}
                            alt="gunting"
                            className="mx-auto py-3 lg:pt-12 lg:w-[120px] lg:h-[200px]"
                            // width="120"
                            // height="200"
                          />
                        </div>
                      </div>
                    ) : (
                      // menang
                      <div>
                    <div className="bg-[#1f3756] p-[7rem] lg:p-[22rem] absolute -right-[3.8rem] lg:-right-[10rem] iphone6:-top-[43px] lg:-top-[7rem] top-[1rem] opacity-30 rounded-full"></div>
                    <div className="bg-[#1f3756] p-[6rem] lg:p-[16rem] absolute -right-[2.8rem] lg:-right-[4rem] iphone6:-top-7 lg:-top-[2rem] top-[2rem]  opacity-30 rounded-full"></div>
                    <div className="bg-[#1f3756] p-[5rem] lg:p-[12rem] absolute -right-[1.8rem] lg:right-[0rem] iphone6:-top-[0.7rem] top-[3rem]  lg:top-[2.1rem]  opacity-50 rounded-full"></div>
                    <div className="p-5 lg:p-8 bg-gradient-to-r z-20 absolute top-[4rem] iphone6:top-0 lg:top-[4rem] lg:right-[2.4rem] -right-4  from-orange-11  to-orange-12 rounded-full">
                      <div className="bg-white w-[90px] h-[90px] lg:w-[250px] lg:h-[250px] mx-auto rounded-full">
                        <img
                          src={scissorsIcon}
                          alt="gunting"
                          className="mx-auto py-3 lg:pt-12 lg:w-[120px] lg:h-[200px]"
                          // width="120"
                          // height="200"
                        />
                      </div>
                    </div>
                  </div>
                    )}
                  </div>
                )}
              </div>
            )}
            {computerIcon === "rock" && (
              <div>
                {win ? (
                  // Kalah
                  <div className="p-5 lg:p-8 bg-gradient-to-r z-20 absolute top-[4rem] iphone6:top-0 lg:top-[4rem] lg:right-[2.4rem] -right-4  from-pink-11  to-pink-12 rounded-full">
                        <div className="bg-white w-[90px] h-[90px] lg:w-[250px] lg:h-[250px] mx-auto rounded-full">
                          <img
                            src={rockIcon}
                            alt="rock"
                            className="mx-auto py-6 lg:pt-12 lg:w-[120px] lg:h-[200px]"
                            // width="120"
                            // height="200"
                          />
                        </div>
                      </div>
                ) : (
                  // seri
                  <div>
                    {massege === "No Enemies"  || massege === "hidden" ? (
                      <div className="p-5 lg:p-8 bg-gradient-to-r z-20 absolute top-[4rem] iphone6:top-0 lg:top-[4rem] lg:right-[2.4rem] -right-4  from-pink-11  to-pink-12 rounded-full">
                        <div className="bg-white w-[90px] h-[90px] lg:w-[250px] lg:h-[250px] mx-auto rounded-full">
                          <img
                            src={rockIcon}
                            alt="rock"
                            className="mx-auto py-6 lg:pt-12 lg:w-[120px] lg:h-[200px]"
                            // width="120"
                            // height="200"
                          />
                        </div>
                      </div>
                    ) : (
                      // menang
                      <div>
                    <div className="bg-[#1f3756] p-[7rem] lg:p-[22rem] absolute -right-[3.8rem] lg:-right-[10rem] iphone6:-top-[43px] lg:-top-[7rem] top-[1rem] opacity-30 rounded-full"></div>
                      <div className="bg-[#1f3756] p-[6rem] lg:p-[16rem] absolute -right-[2.8rem] lg:-right-[4rem] iphone6:-top-7 lg:-top-[2rem] top-[2rem]  opacity-30 rounded-full"></div>
                      <div className="bg-[#1f3756] p-[5rem] lg:p-[12rem] absolute -right-[1.8rem] lg:right-[0rem] iphone6:-top-[0.7rem] top-[3rem]  lg:top-[2.1rem]  opacity-50 rounded-full"></div>
                    <div className="p-5 lg:p-8 bg-gradient-to-r z-20 absolute top-[4rem] iphone6:top-0 lg:top-[4rem] lg:right-[2.4rem] -right-4  from-pink-11  to-pink-12 rounded-full">
                      <div className="bg-white w-[90px] h-[90px] lg:w-[250px] lg:h-[250px] mx-auto rounded-full">
                        <img
                          src={rockIcon}
                          alt="rock"
                          className="mx-auto py-6 lg:pt-12 lg:w-[120px] lg:h-[200px]"
                          // width="120"
                          // height="200"
                        />
                      </div>
                    </div>
                  </div>
                      
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
          {/* keterangan */}
          <div className="lg:hidden">
          {massege === "hidden" && (
             <div className="w-[70%] mx-auto  relative  hidden"></div>
          )}
          {massege !== "hidden" && (
            <div className="mx-auto relative ">
              <div className='absolute bottom-0 left-[50%] z-20 uppercase w-full'>
                <p className='mt-32 text-3xl  lg:text-5xl font-bold tracking-widest text-white text-center'>
                  {massege}
                </p>
                <p
                  className="bg-white text-center text-pink-11 mt-3 tracking-wider cursor-pointer py-3 rounded-md w-full lg:text-xl block"
                  onClick={playAgain}
                >
                  play again
                </p>
            </div>
          </div>
          )}
          </div>
        </div>
        
      ) : (
        // memilih
        <div className="bg-images  h-[45vh] lg:h-[50vh] w-[100%] relative" style={{ backgroundImage: `url(${bgImage})` }}>
          <div className="flex gap-[4rem] lg:gap-[8rem] mt-1 justify-center">
            <div
              className="p-5 bg-gradient-to-r cursor-pointer from-purple-11 to-purple-12 rounded-full"
              onClick={() => handleKlikIcon("paper")}
            >
              <img
                src={paperIcon}
                alt="paper"
                className="rounded-full bg-white py-5 px-6 lg:py-5 p lg:px-7 w-[95px] lg:w-[140px]"
              />
            </div>
            <div
              className="p-5 bg-gradient-to-r cursor-pointer from-orange-11 to-orange-12 rounded-full"
              onClick={() => handleKlikIcon("scissors")}
            >
              <img
                src={scissorsIcon}
                alt="gunting"
                className="rounded-full bg-white py-5 px-6 lg:py-5 p lg:px-7 w-[95px] lg:w-[140px]"
              />
            </div>
          </div>
          <div className="lg:w-[180px] w-[140px] mx-auto bg-blue-40 mt-3 lg:mt-0">
            <div
              className="p-5 bg-gradient-to-t cursor-pointer from-pink-11 to-pink-12 rounded-full shadow-pink-12"
              onClick={() => handleKlikIcon("rock")}
            >
              <img
                src={rockIcon}
                alt="paper"
                className="rounded-full bg-white p-5 lg:py-7 lg:px-7 w-full"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
