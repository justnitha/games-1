import React, { useState, useEffect,Suspense,lazy } from "react";
import rockIcon from "../assets/icon-rock.svg";
import paperIcon from "../assets/icon-paper.svg";
import scissorsIcon from "../assets/icon-scissors.svg";

export default function Picked({ score, setScore }) {
  const [selectIcon, setSelectIcon] = useState(null);
  const [computerIcon, setComputerIcon] = useState(null);
  const [massege, setMassege] = useState("");
  const [win, setWin] = useState(false);
  const [again, setAgain] = useState(false);
  console.log(massege);

  const icons = {
    rock: rockIcon,
    paper: paperIcon,
    scissors: scissorsIcon,
  };

  const availableOptions = Object.keys(icons);

  function handleKlikIcon(iconName) {
    setSelectIcon(iconName);
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
      setMassege("You Win");
      setWin(true);
    } else if (
      (iconName === "rock" && randomComIcon === "paper") ||
      (iconName === "paper" && randomComIcon === "scissors") ||
      (iconName === "scissors" && randomComIcon === "rock")
    ) {
      setScore(score - 1);
      setMassege("You Lose");
      setWin(false);
    } else if (
      (iconName === "rock" && randomComIcon === "rock") ||
      (iconName === "paper" && randomComIcon === "paper") ||
      (iconName === "scissors" && randomComIcon === "scissors")
    ) {
      setScore(score);
      setMassege("No Enemies");
    }
  }

  const playAgain = () => {
    setSelectIcon(null);
    setComputerIcon(null);
    setMassege("");
    setAgain(true);
  };

  useEffect(()=>{
    playAgain();
  },[])

  return (
    <div className="mt-20">
      {selectIcon ? (
        // user icon
        <div className="w-[80%] mx-auto grid grid-cols-3 gap- relative">
          <div className="">
            <h1 className="text-white tracking-wider text-xl text-center mb-10 absolute z-30 left-[9rem]">
              {" "}
              You Picked
            </h1>
            {selectIcon === "paper" && (
              <div>
                {win ? (
                  // menang
                  <div>
                    <div className="bg-[#1f3756] p-[22rem] absolute -left-[10rem] -top-[7rem] opacity-30 rounded-full"></div>
                    <div className="bg-[#1f3756] p-[16rem] absolute -left-[4rem] -top-[2rem]  opacity-30 rounded-full"></div>
                    <div className="bg-[#1f3756] p-[12rem] absolute left-[0rem] top-[2.1rem]  opacity-50 rounded-full"></div>
                    <div className="p-8 bg-gradient-to-r z-20 absolute top-[4rem] left-[2.4rem]  from-purple-11  to-purple-12 rounded-full">
                      <div className="bg-white w-[250px] h-[250px] mx-auto rounded-full">
                        <img
                          src={icons[selectIcon]}
                          alt={selectIcon}
                          className="mx-auto py-12"
                          width="120"
                          height="200"
                        />
                      </div>
                    </div>
                  </div>
                ) : (
                  // seri
                  <div>
                    {massege === "No Enemies" ? (
                      <div className="p-8 bg-gradient-to-r z-20 absolute top-[4rem] left-[2.4rem]  from-purple-11  to-purple-12 rounded-full">
                        <div className="bg-white w-[250px] h-[250px] mx-auto rounded-full">
                          <img
                            src={icons[selectIcon]}
                            alt={selectIcon}
                            className="mx-auto py-12"
                            width="120"
                            height="200"
                          />
                        </div>
                      </div>
                    ) : (
                      // kalah
                      <div className="p-8 bg-gradient-to-r z-20 absolute top-[4rem] left-[2.4rem]  from-purple-11  to-purple-12 rounded-full">
                        <div className="bg-white w-[250px] h-[250px] mx-auto rounded-full">
                          <img
                            src={icons[selectIcon]}
                            alt={selectIcon}
                            className="mx-auto py-12"
                            width="120"
                            height="200"
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
                    <div className="bg-[#1f3756] p-[22rem] absolute -left-[10rem] -top-[7rem] opacity-30 rounded-full"></div>
                    <div className="bg-[#1f3756] p-[16rem] absolute -left-[4rem] -top-[2rem]  opacity-30 rounded-full"></div>
                    <div className="bg-[#1f3756] p-[12rem] absolute left-[0rem] top-[2.1rem]  opacity-50 rounded-full"></div>
                    <div className="p-8 bg-gradient-to-r z-20 absolute top-[4rem] left-[2.4rem]  from-orange-11  to-orange-12 rounded-full">
                      <div className="bg-white w-[250px] h-[250px] mx-auto rounded-full">
                        <img
                          src={icons[selectIcon]}
                          alt={selectIcon}
                          className="mx-auto py-12"
                          width="120"
                          height="200"
                        />
                      </div>
                    </div>
                  </div>
                ) : (
                  // seri
                  <div>
                    {massege === "No Enemies" ? (
                      <div className="p-8 bg-gradient-to-r z-20 absolute top-[4rem] left-[2.4rem]  from-orange-11  to-orange-12 rounded-full">
                        <div className="bg-white w-[250px] h-[250px] mx-auto rounded-full">
                          <img
                            src={icons[selectIcon]}
                            alt={selectIcon}
                            className="mx-auto py-12"
                            width="120"
                            height="200"
                          />
                        </div>
                      </div>
                    ) : (
                      // kalah
                      <div className="p-8 bg-gradient-to-r z-20 absolute top-[4rem] left-[2.4rem]  from-orange-11  to-orange-12 rounded-full">
                        <div className="bg-white w-[250px] h-[250px] mx-auto rounded-full">
                          <img
                            src={icons[selectIcon]}
                            alt={selectIcon}
                            className="mx-auto py-12"
                            width="120"
                            height="200"
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
                    <div className="bg-[#1f3756] p-[22rem] absolute -left-[10rem] -top-[7rem] opacity-30 rounded-full"></div>
                    <div className="bg-[#1f3756] p-[16rem] absolute -left-[4rem] -top-[2rem]  opacity-30 rounded-full"></div>
                    <div className="bg-[#1f3756] p-[12rem] absolute left-[0rem] top-[2.1rem]  opacity-50 rounded-full"></div>
                    <div className="p-8 bg-gradient-to-r z-20 absolute top-[4rem] left-[2.4rem]  from-pink-11  to-pink-12 rounded-full">
                      <div className="bg-white w-[250px] h-[250px] mx-auto rounded-full">
                        <img
                          src={icons[selectIcon]}
                          alt={selectIcon}
                          className="mx-auto py-12"
                          width="120"
                          height="200"
                        />
                      </div>
                    </div>
                  </div>
                ) : (
                  // seri
                  <div>
                    {massege === "No Enemies" ? (
                      <div className="p-8 bg-gradient-to-r z-20 absolute top-[4rem] left-[2.4rem]  from-pink-11  to-pink-12 rounded-full">
                        <div className="bg-white w-[250px] h-[250px] mx-auto rounded-full">
                          <img
                            src={icons[selectIcon]}
                            alt={selectIcon}
                            className="mx-auto py-12"
                            width="120"
                            height="200"
                          />
                        </div>
                      </div>
                    ) : (
                      // kalah
                      <div className="p-8 bg-gradient-to-r z-20 absolute top-[4rem] left-[2.4rem]  from-pink-11  to-pink-12 rounded-full">
                        <div className="bg-white w-[250px] h-[250px] mx-auto rounded-full">
                          <img
                            src={icons[selectIcon]}
                            alt={selectIcon}
                            className="mx-auto py-12"
                            width="120"
                            height="200"
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
          <div className="w-[70%] mx-auto  relative bg-red-400">
            <div className="absolute left-7 z-20 uppercase">
              <p className="mt-32 text-5xl font-bold tracking-widest text-white">
                {massege}
              </p>
              <p
                className="bg-white text-center text-pink-11 mt-3 tracking-wider cursor-pointer py-3 rounded-md text-xl"
                onClick={playAgain}
              >
                play again
              </p>
            </div>
          </div>

          {/* the house picked */}
          <div className="">
            <h1 className="text-white tracking-wider text-xl text-center mb-10 absolute z-30 right-[8rem]">
              {" "}
              The House Picked
            </h1>
            {computerIcon === "paper" && (
              <div>
                {win ? (
                  // kalah
                  <div className="p-8 bg-gradient-to-r z-20 absolute top-[4rem] right-[2.4rem]  from-purple-11  to-purple-12 rounded-full">
                        <div className="bg-white w-[250px] h-[250px] mx-auto rounded-full">
                          <img
                            src={paperIcon}
                            alt="paper"
                            className="mx-auto py-12"
                            width="120"
                            height="200"
                          />
                        </div>
                      </div>
                 
                ) : (
                  // seri
                  <div>
                    {massege === "No Enemies" ? (
                      <div className="p-8 bg-gradient-to-r z-20 absolute top-[4rem] right-[2.4rem]  from-purple-11  to-purple-12 rounded-full">
                        <div className="bg-white w-[250px] h-[250px] mx-auto rounded-full">
                          <img
                            src={paperIcon}
                            alt="paper"
                            className="mx-auto py-12"
                            width="120"
                            height="200"
                          />
                        </div>
                      </div>
                    ) : (
                      // menang
                      <div>
                      <div className="bg-[#1f3756] p-[22rem] absolute -right-[10rem] -top-[7rem] opacity-30 rounded-full"></div>
                      <div className="bg-[#1f3756] p-[16rem] absolute -right-[4rem] -top-[2rem]  opacity-30 rounded-full"></div>
                      <div className="bg-[#1f3756] p-[12rem] absolute right-[0rem] top-[2.1rem]  opacity-50 rounded-full"></div>
                      <div className="p-8 bg-gradient-to-r z-20 absolute top-[4rem] right-[2.4rem]  from-purple-11  to-purple-12 rounded-full">
                        <div className="bg-white w-[250px] h-[250px] mx-auto rounded-full">
                          <img
                            src={paperIcon}
                            alt="paper"
                            className="mx-auto py-12"
                            width="120"
                            height="200"
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
                  <div className="p-8 bg-gradient-to-r z-20 absolute top-[4rem] right-[2.4rem]  from-orange-11  to-orange-12 rounded-full">
                        <div className="bg-white w-[250px] h-[250px] mx-auto rounded-full">
                          <img
                            src={scissorsIcon}
                            alt="gunting"
                            className="mx-auto py-12"
                            width="120"
                            height="200"
                          />
                        </div>
                      </div>
                  
                ) : (
                  // seri
                  <div>
                    {massege === "No Enemies" ? (
                      <div className="p-8 bg-gradient-to-r z-20 absolute top-[4rem] right-[2.4rem]  from-orange-11  to-orange-12 rounded-full">
                        <div className="bg-white w-[250px] h-[250px] mx-auto rounded-full">
                          <img
                            src={scissorsIcon}
                            alt="gunting"
                            className="mx-auto py-12"
                            width="120"
                            height="200"
                          />
                        </div>
                      </div>
                    ) : (
                      // menang
                      <div>
                    <div className="bg-[#1f3756] p-[22rem] absolute -right-[10rem] -top-[7rem] opacity-30 rounded-full"></div>
                    <div className="bg-[#1f3756] p-[16rem] absolute -right-[4rem] -top-[2rem]  opacity-30 rounded-full"></div>
                    <div className="bg-[#1f3756] p-[12rem] absolute right-[0rem] top-[2.1rem]  opacity-50 rounded-full"></div>
                    <div className="p-8 bg-gradient-to-r z-20 absolute top-[4rem] right-[2.4rem]  from-orange-11  to-orange-12 rounded-full">
                      <div className="bg-white w-[250px] h-[250px] mx-auto rounded-full">
                        <img
                          src={scissorsIcon}
                          alt="gunting"
                          className="mx-auto py-12"
                          width="120"
                          height="200"
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
                  <div className="p-8 bg-gradient-to-r z-20 absolute top-[4rem] right-[2.4rem]  from-pink-11  to-pink-12 rounded-full">
                        <div className="bg-white w-[250px] h-[250px] mx-auto rounded-full">
                          <img
                            src={rockIcon}
                            alt="rock"
                            className="mx-auto py-12"
                            width="120"
                            height="200"
                          />
                        </div>
                      </div>
                ) : (
                  // seri
                  <div>
                    {massege === "No Enemies" ? (
                      <div className="p-8 bg-gradient-to-r z-20 absolute top-[4rem] right-[2.4rem]  from-pink-11  to-pink-12 rounded-full">
                        <div className="bg-white w-[250px] h-[250px] mx-auto rounded-full">
                          <img
                            src={rockIcon}
                            alt="rock"
                            className="mx-auto py-12"
                            width="120"
                            height="200"
                          />
                        </div>
                      </div>
                    ) : (
                      // menang
                      <div>
                    <div className="bg-[#1f3756] p-[22rem] absolute -right-[10rem] -top-[7rem] opacity-30 rounded-full"></div>
                    <div className="bg-[#1f3756] p-[16rem] absolute -right-[4rem] -top-[2rem]  opacity-30 rounded-full"></div>
                    <div className="bg-[#1f3756] p-[12rem] absolute right-[0rem] top-[2.1rem]  opacity-50 rounded-full"></div>
                    <div className="p-8 bg-gradient-to-r z-20 absolute top-[4rem] right-[2.4rem]  from-pink-11  to-pink-12 rounded-full">
                      <div className="bg-white w-[250px] h-[250px] mx-auto rounded-full">
                        <img
                          src={rockIcon}
                          alt="rock"
                          className="mx-auto py-12"
                          width="120"
                          height="200"
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
        </div>
      ) : (
        // memilih
        <div className="bg-images relative">
          <div className="flex gap-[12rem] mt-1 justify-center">
            <div
              className="p-4 bg-gradient-to-r cursor-pointer from-purple-11 to-purple-12 rounded-full"
              onClick={() => handleKlikIcon("paper")}
            >
              <img
                src={paperIcon}
                alt="paper"
                className="rounded-full bg-white py-5 px-6 w-[120%]"
              />
            </div>
            <div
              className="p-4 bg-gradient-to-r cursor-pointer from-orange-11 to-orange-12 rounded-full"
              onClick={() => handleKlikIcon("scissors")}
            >
              <img
                src={scissorsIcon}
                alt="gunting"
                className="rounded-full bg-white py-5 px-6 w-[120%]"
              />
            </div>
          </div>
          <div className="absolute bottom-0 left-[45%] bg-blue-40">
            <div
              className="p-4 bg-gradient-to-t cursor-pointer from-pink-11 to-pink-12 rounded-full shadow-pink-12"
              onClick={() => handleKlikIcon("rock")}
            >
              <img
                src={rockIcon}
                alt="paper"
                className="rounded-full bg-white py-6 px-6 w-[120%]"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
