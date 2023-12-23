import Image from 'next/image'
import Navbar from './components/navbar'
import Footer from './components/footer'

export default function Home() {
  return (
    <main className="bg-[#FBF6ED] min-h-screen">
      <Navbar />
      <div className="mx-auto flex flex-col items-center justify-center">
        {/* Hero */}
        <div className="flex flex-col w-[90%] max-w-[990px] mt-36">
          <p className="text-5xl font-normal text-black tracking-wide">
          hey, this is Diego! <br />
          a <span className="font-semibold italic text-[#2292BF]"> software engineer </span> making <br />
          sites more accessible and <br />
          reliable. 
          </p>
        </div>
        <hr className="w-[90%] max-w-[990px] border-black border-opacity-50 mt-12" />
        {/* Status */}
        <div className="flex flex-col w-[90%] max-w-[990px] mt-6">
          <p className="text-md font-normal text-black tracking-wide">
          Currently. <span className="italic font-semibold">Computer Science student @ UAA</span>
          </p>
          <p className="text-md font-normal text-black tracking-wide">
          Previously. <span className="italic font-semibold">Site Reliability Engineer Fellow @ MLH </span>
          </p>
          <p className="text-md font-normal text-black tracking-wide">
          Status. <span className="italic font-semibold">Open to work </span>
          </p>
        </div>
        {/* Experience */}
        <div className="flex flex-col w-[90%] max-w-[990px] mt-24">
          <p className="text-2xl font-normal text-black tracking-wide italic">
          Experience
          </p>
          <hr className="w-full border-black border-opacity-50 mt-2" />
          <div className="flex flex-row items-center justify-between mt-6">
            <div className="flex flex-row items-center justify-center">
              <Image
                src="/mlh.png"
                alt="mlh-logo"
                width={100}
                height={100}
              />
              <div className="flex flex-col ml-4">
                <p className="text-md font-semibold text-black tracking-wide">
                  Major League Hacking
                </p>
                <p className="text-md font-normal text-black tracking-wide italic">
                  Site Reliability Engineer Fellow
                </p>
              </div>
            </div>
            <div className="flex flex-row items-center justify-center">
              <a 
                className="text-md font-semibold text-[#2292BF] tracking-wide hover:underline decoration-2 decoration-[#2292BF] flex flex-row items-center justify-center"
                href="/mlh-fellowship"
              >
                Learn more
                <Image
                  src="/arrow.png"
                  alt="arrow-right"
                  width={20}
                  height={20}
                />
              </a>
            </div>
          </div>
        </div>
        {/* Projects */}
        <div className="flex flex-col w-[90%] max-w-[990px] mt-24 mb-24">
          <p className="text-2xl font-normal text-black tracking-wide italic">
            Side projects
          </p>
          <hr className="w-full border-black border-opacity-50 mt-2" />
          <div className="flex flex-row items-center justify-between mt-10">
            <div className="flex flex-row items-center justify-center">
              <Image
                src="/lofi-terminal.png"
                alt="lofi-terminal"
                width={160}
                height={160}
              />
              <div className="flex flex-col ml-4">
                <p className="text-md font-semibold text-black tracking-wide">
                  Lo-Fi Terminal
                </p>
                <p className="text-md font-normal text-black tracking-wide italic">
                  A terminal-based music player
                </p>
                <p className="text-xs font-normal tracking-wide text-[#1256bd]">
                  Next, React, react-terminal, Firebase
                </p>
              </div>
            </div>
            <div className="flex flex-row items-center justify-center">
              <a 
                className="text-md font-semibold text-[#2292BF] tracking-wide hover:underline decoration-2 decoration-[#2292BF] flex flex-row items-center justify-center"
                href="/lofi-terminal"
              >
                Learn more
                <Image
                  src="/arrow.png"
                  alt="arrow-right"
                  width={20}
                  height={20}
                />
              </a>
            </div>
          </div>
          <div className="flex flex-row items-center justify-between mt-10">
            <div className="flex flex-row items-center justify-center">
              <Image
                src="/wellness.png"
                alt="wellness"
                width={160}
                height={160}
              />
              <div className="flex flex-col ml-4">
                <p className="text-md font-semibold text-black tracking-wide">
                  Wellness
                </p>
                <p className="text-md font-normal text-black tracking-wide italic">
                  Your perfect gym partner
                </p>
                <p className="text-xs font-normal tracking-wide text-[#1256bd]">
                  React Native, Expo, Firebase
                </p>
              </div>
            </div>
            <div className="flex flex-row items-center justify-center">
              <a 
                className="text-md font-semibold text-[#2292BF] tracking-wide hover:underline decoration-2 decoration-[#2292BF] flex flex-row items-center justify-center"
                href="/wellness"
              >
                Learn more
                <Image
                  src="/arrow.png"
                  alt="arrow-right"
                  width={20}
                  height={20}
                />
              </a>
            </div>
          </div>
          <div className="flex flex-row items-center justify-between mt-10">
            <div className="flex flex-row items-center justify-center">
              <Image
                src="/maze-solver.png"
                alt="maze-solver"
                width={160}
                height={160}
              />
              <div className="flex flex-col ml-4">
                <p className="text-md font-semibold text-black tracking-wide">
                  Maze Solver
                </p>
                <p className="text-md font-normal text-black tracking-wide italic">
                  A python maze solver using DFS, BFS, and A*
                </p>
                <p className="text-xs font-normal tracking-wide text-[#1256bd]">
                  Python
                </p>
              </div>
            </div>
            <div className="flex flex-row items-center justify-center">
              <a 
                className="text-md font-semibold text-[#2292BF] tracking-wide hover:underline decoration-2 decoration-[#2292BF] flex flex-row items-center justify-center"
                href="https://github.com/YeyoM/mazeSolver"
                target="_blank"
              >
                Learn more
                <Image
                  src="/arrow.png"
                  alt="arrow-right"
                  width={20}
                  height={20}
                />
              </a>
            </div>
          </div>
          <div className="flex flex-row items-center justify-between mt-10">
            <div className="flex flex-row items-center justify-center">
              <Image
                src="/cocktail-please.png"
                alt="cocktail-please"
                width={160}
                height={160}
              />
              <div className="flex flex-col ml-4">
                <p className="text-md font-semibold text-black tracking-wide">
                  Cocktail Please!
                </p>
                <p className="text-md font-normal text-black tracking-wide italic">
                  A cocktail recipe generator
                </p>
                <p className="text-xs font-normal tracking-wide text-[#1256bd]">
                  React, Next, Tailwind, CocktailDB, Firebase Auth
                </p>
              </div>
            </div>
            <div className="flex flex-row items-center justify-center">
              <a 
                className="text-md font-semibold text-[#2292BF] tracking-wide hover:underline decoration-2 decoration-[#2292BF] flex flex-row items-center justify-center"
                href="/cocktail-please"
              >
                Learn more
                <Image
                  src="/arrow.png"
                  alt="arrow-right"
                  width={20}
                  height={20}
                />
              </a>
            </div>
          </div>
        </div>

       <Footer />

      </div>

      {/* Orbs */}
      <div className="absolute w-[300px] h-[300px] blur-[80px] top-[80rem] left-[10rem] rounded-[50%] bg-[#00b7ff93] opacity-30"></div>
      <div className="absolute w-[300px] h-[300px] blur-[80px] top-[10rem] right-[20rem] rounded-[50%] bg-[#00b7ff93] opacity-30"></div>
      <div className="absolute w-[300px] h-[300px] blur-[80px] top-[45rem] right-[10rem] rounded-[50%] bg-[#00b7ff93] opacity-30"></div>
      
    </main>
  )
}
