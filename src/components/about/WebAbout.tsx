"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ActionBtnType } from "@/types";
import ImageComponent from "@/components/tools/ImageComponent";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import WebAboutTop from "@/components/about/WebAboutTop";

type Props = {
  data: {
    title: string;
    subTitle: string;
    description: string;
    shape1: {
      dark: string;
      light: string;
    };
    action_btn: ActionBtnType;
    icon: {
      dark: string;
      light: string;
    };
    service_box_text: string;
  };
};

const WebAbout = ({ data }: Props) => {
  const { icon, service_box_text } = data;
  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef}>
      <div className="inner-container">
        <div className="web-section-spacing relative">
          <WebAboutTop {...data} />
          <div className="flex gap-x-[60px] gap-y-[30px] flex-col md:flex-row mt-[40px] lg:mt-[-80px] xl:mt-[-170px] justify-between xl:ps-[90px]">
            
            {/* First Gradient Card */}
            <div className="has_fade_anim md:mt-[230px] lg:mt-[330px]">
              <div className="w-[330px] h-[180px] rounded-2xl bg-gradient-to-br from-purple-600 via-theme to-pink-600 p-[2px] shadow-lg">
                <div className="w-full h-full bg-black/80 rounded-2xl flex items-center justify-center relative overflow-hidden">
                  {/* Decorative code pattern */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-4 left-4 w-20 h-1 bg-green-400"></div>
                    <div className="absolute top-8 left-4 w-16 h-1 bg-blue-400"></div>
                    <div className="absolute top-12 left-4 w-24 h-1 bg-purple-400"></div>
                    <div className="absolute bottom-12 right-4 w-20 h-1 bg-pink-400"></div>
                    <div className="absolute bottom-8 right-4 w-16 h-1 bg-yellow-400"></div>
                  </div>
                  
                  {/* Center icon */}
                  <div className="relative z-10 text-center">
                    <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-theme to-purple-600 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </div>
                    <p className="text-white font-semibold text-sm">Clean Code</p>
                  </div>

                  {/* Glowing orb */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-theme rounded-full filter blur-2xl opacity-30"></div>
                </div>
              </div>
            </div>

            {/* Second Gradient Card with Info Box */}
            <div className="sm:pt-[80px] sm:pe-[130px] relative">
              <div 
                className="has_fade_anim w-[360px] h-[455px] rounded-2xl bg-gradient-to-br from-blue-600 via-theme to-purple-600 p-[2px] shadow-xl"
                data-fade-offset="50"
                data-delay=".45"
                data-fade-from="right"
              >
                <div className="w-full h-full bg-black/80 rounded-2xl flex flex-col items-center justify-center relative overflow-hidden p-8">
                  {/* Animated background pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-full h-full">
                      {[...Array(6)].map((_, i) => (
                        <div 
                          key={i}
                          className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-white to-transparent"
                          style={{ 
                            top: `${(i + 1) * 15}%`,
                            animation: `slide ${3 + i}s ease-in-out infinite`,
                            animationDelay: `${i * 0.5}s`
                          }}
                        ></div>
                      ))}
                    </div>
                  </div>

                  {/* Tech stack icons */}
                  <div className="relative z-10 text-center">
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {['💻', '📱', '🎨', '⚡', '🚀', '✨'].map((emoji, i) => (
                        <div 
                          key={i}
                          className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center text-2xl border border-white/20 hover:bg-white/20 transition-all"
                        >
                          {emoji}
                        </div>
                      ))}
                    </div>
                    <p className="text-white text-lg font-semibold mt-4">Modern Solutions</p>
                    <p className="text-white/70 text-sm mt-2">Built with Latest Tech</p>
                  </div>

                  {/* Glowing orbs */}
                  <div className="absolute top-10 right-10 w-32 h-32 bg-purple-500 rounded-full filter blur-3xl opacity-30"></div>
                  <div className="absolute bottom-10 left-10 w-32 h-32 bg-blue-500 rounded-full filter blur-3xl opacity-30"></div>
                </div>
              </div>

              {/* Info Box */}
              <div
                className="has_fade_anim bg-[#f9f9f9] dark:bg-[#1b1b1b] mt-[30px] sm:mt-0 static sm:absolute px-[40px] pt-[40px] pb-[35px] lg:px-[60px] lg:pt-[60px] lg:pb-[55px] top-0 end-0 w-[260px] lg:w-[300px] rounded-xl border border-gray-200 dark:border-gray-800 shadow-xl"
                data-fade-from="top"
                data-fade-offset="0"
                data-delay="0.90"
              >
                <div className="">
                  <ImageComponent
                    src={icon.light}
                    darkSrc={icon.dark}
                    width={28}
                    height={25}
                    alt="service-icon"
                  />
                </div>
                <p className="mt-[23px]">{service_box_text}</p>
                <div className="mt-[39px]">
                  <div className="flex items-baseline gap-2">
                    <span className="text-[80px] lg:text-[100px] font-teko leading-[0.8] bg-gradient-to-r from-theme to-purple-600 bg-clip-text text-transparent">
                      2x
                    </span>
                    <span className="text-[21px] font-teko uppercase">
                      Faster
                    </span>
                  </div>
                  <p className="text-sm mt-2 opacity-70">
                    Rapid development & deployment
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add animation styles */}
      <style jsx>{`
        @keyframes slide {
          0%, 100% {
            transform: translateX(-100%);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
};

export default WebAbout;