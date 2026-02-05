"use client";

import WebSectionTItle from "@/components/sectionTitle/WebSectionTItle";
import { useRef, useEffect, useState } from "react";
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";

type Props = {
  title: string;
  sub_title: string;
  description: string;
  bg_image: string;
  award_list: string[];
};

const AboutBoldAward = ({
  title,
  sub_title,
  description,
  bg_image,
  award_list,
}: Props) => {
  const containerRef = useRef<HTMLDivElement>(null!);
  const [code1, setCode1] = useState("");
  const [code2, setCode2] = useState("");
  
  const codeSnippet1 = "const innovation = 'our DNA';";
  const codeSnippet2 = "// Building excellence";

  useEffect(() => {
    let index1 = 0;
    let index2 = 0;
    
    const timer1 = setInterval(() => {
      if (index1 <= codeSnippet1.length) {
        setCode1(codeSnippet1.slice(0, index1));
        index1++;
      }
    }, 80);

    setTimeout(() => {
      const timer2 = setInterval(() => {
        if (index2 <= codeSnippet2.length) {
          setCode2(codeSnippet2.slice(0, index2));
          index2++;
        }
      }, 80);
      return () => clearInterval(timer2);
    }, 1500);

    return () => clearInterval(timer1);
  }, []);

  useGSAP(
    () => {
      hasFadeAnim();
    },
    { scope: containerRef }
  );

  return (
    <section className="awards-area" ref={containerRef}>
      <div className="inner-container large">
        <div className="relative z-[1] pt-[44px] px-[25px] pb-[49px] sm:pt-[54px] sm:px-[45px] sm:pb-[59px] lg:pt-[74px] lg:px-[65px] lg:pb-[79px] xl:pt-[94px] xl:px-[95px] xl:pb-[99px] 2xl:pt-[124px] 2xl:px-[115px] 2xl:pb-[129px]">
          
          {/* Animated Gradient Background - NO IMAGES */}
          <div className="absolute w-full h-full top-0 start-0 z-[-1] overflow-hidden">
            {/* Main gradient layers */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/50 via-purple-800/30 to-pink-900/50 animate-gradient-shift"></div>
            
            {/* Animated glowing orbs */}
            <div className="absolute top-20 left-20 w-64 h-64 bg-purple-500/30 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-float-delayed"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse"></div>
            
            {/* Grid pattern overlay */}
            <div className="absolute inset-0 opacity-[0.03]" style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)',
              backgroundSize: '50px 50px'
            }}></div>
            
            {/* Code rain effect in background */}
            <div className="absolute inset-0 overflow-hidden opacity-5">
              <div className="font-mono text-xs text-cyan-400 leading-relaxed p-8 animate-scroll-slow">
                {Array.from({ length: 20 }).map((_, i) => (
                  <div key={i} className="whitespace-nowrap">
                    {'{ innovation: true, quality: "premium", experience: "exceptional" }'}
                  </div>
                ))}
              </div>
            </div>
            
            {/* Dark overlay for readability */}
            <div className="absolute inset-0 bg-black/60"></div>
          </div>

          <div>
            <div className="flex items-start flex-col lg:flex-row lg:items-end gap-[20px] lg:gap-[160px] 2xl:gap-[340px]">
              <div className="mb-[10px]">
                <span className="has_fade_anim font-teko text-[24px] font-medium text-text-fixed-2 uppercase leading-none inline-block">
                  {sub_title}
                </span>
              </div>
              <WebSectionTItle
                title={title}
                className="has_fade_anim text-text-fixed-2"
              />
            </div>
          </div>

          <div className="ms-0 lg:ms-[228px] mt-[22px] xl:ms-[378px] xl:mt-[52px] 2xl:mt-[72px] 2xl:ms-[678px]">
            <p className="text has_fade_anim max-w-[480px] text-text-fixed-3">
              {description}
            </p>
            
            {/* Animated Code Badges - Replace Award Images */}
            <div className="has_fade_anim mt-[33px] lg:mt-[63px]">
              <div className="flex flex-wrap gap-5 max-w-[480px]">
                
                {/* Badge 1 - Innovation */}
                <div className="group relative bg-gradient-to-br from-purple-600 to-blue-600 p-[2px] rounded-lg hover:scale-105 transition-transform duration-300">
                  <div className="bg-slate-900/90 backdrop-blur-sm px-6 py-4 rounded-lg">
                    <div className="font-mono text-sm text-lime-400 mb-1">
                      {code1}<span className="animate-pulse">|</span>
                    </div>
                    <div className="text-white/60 text-xs">Driven by excellence</div>
                  </div>
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-purple-500/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity -z-10"></div>
                </div>

                {/* Badge 2 - Quality */}
                <div className="group relative bg-gradient-to-br from-pink-600 to-orange-600 p-[2px] rounded-lg hover:scale-105 transition-transform duration-300">
                  <div className="bg-slate-900/90 backdrop-blur-sm px-6 py-4 rounded-lg">
                    <div className="font-mono text-sm text-cyan-400 mb-1">
                      {code2}<span className="animate-pulse">|</span>
                    </div>
                    <div className="text-white/60 text-xs">Premium solutions</div>
                  </div>
                  <div className="absolute inset-0 bg-pink-500/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity -z-10"></div>
                </div>

                {/* Badge 3 - Static Badge */}
                <div className="group relative bg-gradient-to-br from-cyan-600 to-teal-600 p-[2px] rounded-lg hover:scale-105 transition-transform duration-300">
                  <div className="bg-slate-900/90 backdrop-blur-sm px-6 py-4 rounded-lg">
                    <div className="font-mono text-sm text-yellow-400 mb-1">
                      {'<CodeDynasty />'}
                    </div>
                    <div className="text-white/60 text-xs">Built with passion</div>
                  </div>
                  <div className="absolute inset-0 bg-cyan-500/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity -z-10"></div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient-shift {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        @keyframes float {
          0%, 100% { transform: translate(0, 0); }
          33% { transform: translate(30px, -30px); }
          66% { transform: translate(-20px, 20px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translate(0, 0); }
          33% { transform: translate(-30px, 30px); }
          66% { transform: translate(20px, -20px); }
        }
        @keyframes scroll-slow {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        .animate-gradient-shift {
          animation: gradient-shift 5s ease-in-out infinite;
        }
        .animate-float {
          animation: float 20s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 25s ease-in-out infinite;
        }
        .animate-scroll-slow {
          animation: scroll-slow 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default AboutBoldAward;