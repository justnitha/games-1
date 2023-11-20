import React, { useState, useEffect, useRef } from "react";
import {Lose,seri,rockIcon,paperIcon,scissorsIcon,spockIcon,LizardIcon,bgImage,Master,Pilihan,Computer,Lagu,} from "../components/Import"

export default function Picked({ score, setScore, selectIcon, setSelectIcon, }) {
  const [computerIcon, setComputerIcon] = useState(null);
  const [massege, setMassege] = useState("hidden");
  const [win, setWin] = useState(false);
  const [again, setAgain] = useState(false);

  const audioWinRef = useRef(null);
  const audioLoseRef = useRef(null);
  const audioSeriRef = useRef(null);

  const icons = {
    rock: rockIcon,
    paper: paperIcon,
    scissors: scissorsIcon,
    lizard: LizardIcon,
    spock: spockIcon
  };

  const availableOptions = Object.keys(icons);

  function handleKlikIcon(iconName) {
    setSelectIcon(iconName);
    // Efek acakan gambar sebelum munculnya gambar sebenarnya
    const intervalId = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * availableOptions.length);
      const randomComIcon = availableOptions[randomIndex];
      setComputerIcon(randomComIcon);
    }, 30);

    setTimeout(() => {
      clearInterval(intervalId); // Hentikan efek acakan
      const randomIndex = Math.floor(Math.random() * availableOptions.length);
      const randomComIcon = availableOptions[randomIndex];
      setComputerIcon(randomComIcon);

      // Rules of the game
      if (
        (iconName === "rock" && randomComIcon === "scissors") ||
        (iconName === "rock" && randomComIcon === "spock") ||
        (iconName === "rock" && randomComIcon === "lizard") ||
        (iconName === "paper" && randomComIcon === "rock") ||
        (iconName === "paper" && randomComIcon === "lizard") ||
        (iconName === "spock" && randomComIcon === "paper") ||
        (iconName === "spock" && randomComIcon === "scissors") ||
        (iconName === "lizard" && randomComIcon === "scissors") ||
        (iconName === "lizard" && randomComIcon === "spock") ||
        (iconName === "scissors" && randomComIcon === "paper")
      ) {
        setScore(score + 1);
        setMassege("You Win");
        setWin(true);
        audioWinRef.current.play();
        // winValue= true
      } else if (
        (iconName === "rock" && randomComIcon === "paper") ||
        (iconName === "paper" && randomComIcon === "scissors") ||
        (iconName === "paper" && randomComIcon === "spock") ||
        (iconName === "spock" && randomComIcon === "lizard") ||
        (iconName === "spock" && randomComIcon === "rock") ||
        (iconName === "scissors" && randomComIcon === "rock")||
        (iconName === "scissors" && randomComIcon === "lizard")||
        (iconName === "scissors" && randomComIcon === "lizard")||
        (iconName === "scissors" && randomComIcon === "spock")||
        (iconName === "lizard" && randomComIcon === "paper")||
        (iconName === "lizard" && randomComIcon === "rock")
      ) {
        setScore(score - 1);
        setMassege("You Lose");
        setWin(false);
        audioLoseRef.current.play();
        // winValue = false
      } else if (
        (iconName === "rock" && randomComIcon === "rock") ||
        (iconName === "paper" && randomComIcon === "paper") ||
        (iconName === "spock" && randomComIcon === "spock") ||
        (iconName === "lizard" && randomComIcon === "lizard") ||
        (iconName === "scissors" && randomComIcon === "scissors")
      ) {
        setScore(score);
        setMassege("No Enemies");
        setWin(null);
        audioSeriRef.current.play();
        // winValue = null
      }
      // setMassege(' ')
    }, 1000);
  }

  const playAgain = () => {
    setSelectIcon(null);
    setComputerIcon(null);
    setMassege("hidden");
    setAgain(true);
    setWin(null);
   // Stop audio jika sedang bermain
    audioWinRef.current.pause();
    audioWinRef.current.currentTime = 0;
    audioLoseRef.current.pause();
    audioLoseRef.current.currentTime = 0;
    audioSeriRef.current.pause();
    audioSeriRef.current.currentTime = 0;
  };

  useEffect(() => {
    playAgain();
  }, [again]);

  return (
    <div className="mt-20 ">
      <audio ref={audioWinRef} autoPlay>
        <source src={Lagu} type="audio/mpeg" />
      </audio>
      <audio ref={audioLoseRef} autoPlay>
        <source src={Lose} type="audio/mpeg" />
      </audio>
      <audio ref={audioSeriRef} autoPlay>
        <source src={seri} type="audio/mpeg" />
      </audio>
      {selectIcon ? (
        // user icon
        <div className="w-[80%] mx-auto h-screen grid grid-cols-2 lg:grid-cols-3 relative -mt-10 iphone6:-mt-0">
          <div className="relative">
            <h1 className="text-white tracking-wider lg:text-xl text-center mb-10 absolute z-30 iphone6:left-[1.5rem] left-[1rem] lg:left-[9rem] lg:top-0 top-[15rem] iphone6:top-[10rem]">
              You Picked
            </h1>
            {selectIcon === "paper" && (
              <Master
                win={win}
                icons={icons}
                selectIcon={selectIcon}
                massege={massege}
                bg="from-blue-11  to-blue-12"
                
              />
            )}
            {selectIcon === "scissors" && (
              <Master
                win={win}
                icons={icons}
                selectIcon={selectIcon}
                massege={massege}
                bg="from-orange-11  to-orange-12"
              />
            )}
            {selectIcon === "rock" && (
              <Master
                win={win}
                icons={icons}
                selectIcon={selectIcon}
                massege={massege}
                bg="from-pink-11  to-pink-12"
              />
            )}
            {selectIcon === "spock" && (
              <Master
                win={win}
                icons={icons}
                selectIcon={selectIcon}
                massege={massege}
                bg="from-cyan-11  to-cyan-12"
              />
            )}
            {selectIcon === "lizard" && (
              <Master
                win={win}
                icons={icons}
                selectIcon={selectIcon}
                massege={massege}
                bg="from-purple-11  to-purple-12"
              />
            )}
          </div>

          {/* keterangan */}
          <div className="hidden lg:block">
            {massege === "hidden" && (
              <div className="w-[70%] mx-auto  relative bg-red-400 hidden"></div>
            )}
            {massege !== "hidden" && (
              <div className="w-[70%] mx-auto  relative bg-red-400 ">
                <div className="absolute left-7 z-20 uppercase">
                  <p className="mt-32 text-5xl font-bold tracking-widest text-white">
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
              <Computer
                win={win} 
                massege={massege} 
                Icon={paperIcon} 
                bg="from-blue-11  to-blue-12" 
            />
            )}
            {computerIcon === "scissors" && (
             <Computer
              win={win} 
              massege={massege} 
              Icon={scissorsIcon} 
              bg="from-orange-11  to-orange-12" 
           />
            )}
            {computerIcon === "rock" && (
              <Computer
                win={win} 
                massege={massege} 
                Icon={rockIcon} 
                bg="from-pink-11  to-pink-12" 
            />
            )}
            {computerIcon === "spock" && (
              <Computer
                win={win} 
                massege={massege} 
                Icon={spockIcon} 
                bg="from-cyan-11  to-cyan-12" 
            />
            )}
            {computerIcon === "lizard" && (
              <Computer
                win={win} 
                massege={massege} 
                Icon={LizardIcon} 
                bg="from-purple-11  to-purple-12" 
              />
            )}
          </div>

          {/* keterangan Mobile*/}
          <div className="lg:hidden">
            {massege === "hidden" && (
              <div className="w-[70%] mx-auto  relative  hidden"></div>
            )}
            {massege !== "hidden" && (
              <div className="mx-auto relative mt-[120px] iphone6:mt-0 sm:mt-0 md:mt-0">
                <div className="absolute bottom-0 left-[50%] z-20 uppercase w-full">
                  <p className="mt-32 text-3xl  lg:text-5xl font-bold tracking-widest text-white text-center">
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
        <Pilihan
          bgImage={bgImage}
          handleKlikIcon={handleKlikIcon}
          paperIcon={paperIcon}
          rockIcon={rockIcon}
          scissorsIcon={scissorsIcon}
          spockIcon={spockIcon}
          LizardIcon={LizardIcon}
        />
      )}
    </div>
  );
}
