"use client";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen w-full flex-col px-24 pb-32">
        <div className="bg-h-grid w-full h-[42rem] absolute top-16 left-0 -z-50">
          <div className="bg-[url('/grid.svg')] bg-repeat bg-v-grid w-full h-full"></div>
        </div>
        <div className=" py-48 flex flex-col items-center min-h-screen">
          <div className="flex flex-col xs:flex-row xs:gap-4 justify-center select-none mb-8 xs:mb-4">
            <div className="font-bold flex">
              <p className="text-[3rem] leading-tight sm:text-[4rem] lg:text-[6rem]">Mission</p>
              <span className="text-[3rem] leading-tight sm:text-[4rem] lg:text-[6rem] hidden xs:inline-block">: </span>
            </div>
            <p className="text-[3rem] leading-tight sm:text-[4rem] lg:text-[6rem] font-bold bg-gradient-to-tr from-[#ff4d4d] to-[#f9cb28] bg-clip-text text-[#0000]">Monkey</p>
          </div>
          <p className="text-base md:text-xl text-center">A game for a school project created by at least 2 grade 10 students</p>
          <div className="flex flex-col xs:flex-row gap-6 xs:gap-8 mt-16">
            <button
              className="animated-glow flex justify-center items-center gap-2 px-5 py-3 shadow-lg bg-gradient-to-tr from-[#050505] to-[#050505] hover:from-[#ff4d4d] hover:to-[#f9cb28] transition-all rounded-lg text-base sm:text-lg relative 
						after:bg-[#222] after:content-[''] after:w-[calc(100%+2px)] after:h-[calc(100%+2px)] after:absolute after:top-[-1px] after:left-[-1px] after:-z-10 after:rounded-lg after:bg-gradient-to-tr after:from-[#ff4d4d] after:to-[#f9cb28]
						before:content-[''] before:w-[calc(100%+2px)] before:h-[calc(100%+2px)] before:absolute before:top-[-1px] before:left-[-1px] before:-z-10 before:rounded-lg before:bg-gradient-to-tr before:from-[#ff4d4d] before:to-[#f9cb28] before:blur-xl before:opacity-40"
              onClick={() => {
                document.querySelector("button a.downloads-page").click();
              }}
            >
              <i className="bi bi-download"></i>
              <p>Download</p>
              <Link href={"/downloads"} legacyBehavior={true}>
                <a className="downloads-page"></a>
              </Link>
            </button>
            <button
              className="flex justify-center items-center gap-2 px-5 py-3 shadow-lg bg-[#050505] hover:bg-[#151515] transition-all rounded-lg text-base sm:text-lg relative
						after:bg-[#222] after:content-[''] after:w-[calc(100%+2px)] after:h-[calc(100%+2px)] after:absolute after:top-[-1px] after:left-[-1px] after:-z-10 after:rounded-lg"
              onClick={() => {
                document.querySelector("button a.github-link").click();
              }}
            >
              <i className="bi bi-github"></i>
              <p>
                <span className="hidden sm:inline-block mr-1">View on </span>Github
              </p>
              <Link href={"https://github.com/lemons-studios/Mission-Monkey"} legacyBehavior={true}>
                <a target="_blank" className="github-link"></a>
              </Link>
            </button>
          </div>
        </div>

        <div className="flex flex-col items-center gap-1">
          <p className="text-4xl mb-8">Roadmap</p>

          {/* Alpha 0.1.0 */}
          <div className="flex min-h-[8rem] gap-6">
            <div className="flex flex-col items-end justify-center w-32 xs:w-[12rem] sm:w-[16rem] md:w-[20rem] lg:w-[28rem] text-right"></div>
            <div className="flex flex-col items-center justify-center gap-1">
              <div className="fade-top w-0 h-[calc(50%-4px)] border-l-2 border-[#fff8] border-dashed"></div>
              <div className="w-3 h-3 border-2 border-[#fff0] bg-[#fff8] rounded-full"></div>
              <div className="w-0 h-[calc(50%-4px)] border-l-2 border-[#fff8] border-dashed"></div>
            </div>
            <div className="flex flex-col items-start justify-center w-32 xs:w-[12rem] sm:w-[16rem] md:w-[20rem] lg:w-[28rem]">
              <p className="text-xs text-[#bbb] font-light">April 1, 2023</p>
              <p>Alpha 0.1.0</p>
              <p className="text-sm text-[#ddd] font-light">Initial release of the game. Prototype scene and basic player controls.</p>
            </div>
          </div>

          {/* Alpha 0.1.1 */}
          <div className="flex min-h-[8rem] gap-6">
            <div className="flex flex-col items-end justify-center w-32 xs:w-[12rem] sm:w-[16rem] md:w-[20rem] lg:w-[28rem] text-right">
              <p className="text-xs text-[#bbb] font-light">April 2, 2023</p>
              <p>Alpha 0.1.1</p>
              <p className="text-sm text-[#ddd] font-light">Fix model bug with a slope in the prototype scene.</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-1">
              <div className="w-0 h-[calc(50%-4px)] border-l-2 border-[#fff8] border-dashed"></div>
              <div className="w-3 h-3 border-2 border-[#fff0] bg-[#fff8] rounded-full"></div>
              <div className="w-0 h-[calc(50%-4px)] border-l-2 border-[#fff8] border-dashed"></div>
            </div>
            <div className="flex flex-col items-start justify-center w-32 xs:w-[12rem] sm:w-[16rem] md:w-[20rem] lg:w-[28rem]"></div>
          </div>

          {/* Alpha 0.2.0 */}
          <div className="flex min-h-[8rem] gap-6">
            <div className="flex flex-col items-end justify-center w-32 xs:w-[12rem] sm:w-[16rem] md:w-[20rem] lg:w-[28rem] text-right"></div>
            <div className="flex flex-col items-center justify-center gap-1">
              <div className="w-0 h-[calc(50%-4px)] border-l-2 border-[#fff8] border-dashed"></div>
              <div className="w-3 h-3 border-2 border-[#fff0] bg-[#fff8] rounded-full"></div>
              <div className="w-0 h-[calc(50%-4px)] border-l-2 border-[#fff8] border-dashed"></div>
            </div>
            <div className="flex flex-col items-start justify-center w-32 xs:w-[12rem] sm:w-[16rem] md:w-[20rem] lg:w-[28rem]">
              <p className="text-xs text-[#bbb] font-light">June 21, 2023</p>
              <p>Alpha 0.2.0</p>
              <p className="text-sm text-[#ddd] font-light">Finalize level design for chapter 1-1 through chapter 1-3. Also adds lighting and decorations around the levels. Gameplay for chapter 1-1 to chapter 1-3 is complete. <a href="https://github.com/lemons-studios/Mission-Monkey/releases/tag/alpha-0.2.0">See full patch notes.</a></p>
            </div>
          </div>

          {/* Alpha 0.2.1 */}
          <div className="flex min-h-[8rem] gap-6">
            <div className="flex flex-col items-end justify-center w-32 xs:w-[12rem] sm:w-[16rem] md:w-[20rem] lg:w-[28rem] text-right">
              <p className="text-xs text-[#bbb] font-light">TBD</p>
              <p>Alpha 0.2.1</p>
              <p className="text-sm text-[#ddd] font-light">Add the end cutscene to chapter 1, fix anything that is broken in chapter 1, enhance some things, and add some new QoL features.</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-1">
              <div className="w-0 h-[calc(50%-4px)] border-l-2 border-[#fff8] border-dashed"></div>
              <div className="w-3 h-3 border-2 border-[#fff8] rounded-full"></div>
              <div className="w-0 h-[calc(50%-4px)] border-l-2 border-[#fff8] border-dashed"></div>
            </div>
            <div className="flex flex-col items-start justify-center w-32 xs:w-[12rem] sm:w-[16rem] md:w-[20rem] lg:w-[28rem]"></div>
          </div>

          {/* Alpha 0.2.2 */}
          <div className="flex min-h-[8rem] gap-6">
            <div className="flex flex-col items-end justify-center w-32 xs:w-[12rem] sm:w-[16rem] md:w-[20rem] lg:w-[28rem] text-right"></div>
            <div className="flex flex-col items-center justify-center gap-1">
              <div className="w-0 h-[calc(50%-4px)] border-l-2 border-[#fff8] border-dashed"></div>
              <div className="w-3 h-3 border-2 border-[#fff8] rounded-full"></div>
              <div className="w-0 h-[calc(50%-4px)] border-l-2 border-[#fff8] border-dashed"></div>
            </div>
            <div className="flex flex-col items-start justify-center w-32 xs:w-[12rem] sm:w-[16rem] md:w-[20rem] lg:w-[28rem]">
              <p className="text-xs text-[#bbb] font-light">TBD</p>
              <p>Alpha 0.2.2</p>
              <p className="text-sm text-[#ddd] font-light">Add cutscenes to anything that needs one, enhance the gameplay, and fix any issues that were not fixed in 0.2.1</p>
            </div>
          </div>

		  {/* Alpha 0.3.0 */}
          <div className="flex min-h-[8rem] gap-6">
            <div className="flex flex-col items-end justify-center w-32 xs:w-[12rem] sm:w-[16rem] md:w-[20rem] lg:w-[28rem] text-right">
              <p className="text-xs text-[#bbb] font-light">TBD</p>
              <p>Alpha 0.3.0</p>
              <p className="text-sm text-[#ddd] font-light">Major update that will overhaul Chapter 1 and add many gameplay aspects to said chapter. updates after this one will take much longer as I try to meet the standards of this update.</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-1">
              <div className="w-0 h-[calc(50%-4px)] border-l-2 border-[#fff8] border-dashed"></div>
              <div className="w-3 h-3 border-2 border-[#fff8] rounded-full"></div>
              <div className="w-0 h-[calc(50%-4px)] border-l-2 border-[#fff8] border-dashed"></div>
            </div>
            <div className="flex flex-col items-start justify-center w-32 xs:w-[12rem] sm:w-[16rem] md:w-[20rem] lg:w-[28rem]"></div>
          </div>

          {/* Future */}
          <div className="flex min-h-[8rem] gap-6">
            <div className="flex flex-col items-end justify-center w-32 xs:w-[12rem] sm:w-[16rem] md:w-[20rem] lg:w-[28rem]"></div>
            <div className="flex flex-col items-center justify-center gap-1">
              <div className="w-0 h-[calc(50%-4px)] border-l-2 border-[#fff8] border-dashed"></div>
              <div className="select-none my-[-0.25rem] font-medium text-[#fffa]">?</div>
              <div className="fade-bottom w-0 h-[calc(50%-4px)] border-l-2 border-[#fff8] border-dashed"></div>
            </div>
            <div className="flex flex-col items-start justify-center w-32 xs:w-[12rem] sm:w-[16rem] md:w-[20rem] lg:w-[28rem]">
              <p>Future</p>
              <p className="text-sm text-[#ddd] font-light">Add OST and saves system.</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
