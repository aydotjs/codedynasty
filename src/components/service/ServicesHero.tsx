"use client";

import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import hasTextMovAnim from "@/lib/animation/hasTextMovAnim";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import InnerSectionTitle from "../sectionTitle/InnerSectionTitle";

type Props = {
  title: string;
  description: string;
  image?: string;
};

const ServicesHero = ({ title, description }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasTextMovAnim();
      hasFadeAnim();
    },
    { scope: containerRef }
  );

  return (
    <section className="container2" ref={containerRef}>
      <div className="pt-[137px] 2xl:pt-[187px] grid justify-between gap-y-10 gap-x-[60px] md:grid-cols-[1fr_330px] lg:grid-cols-[1fr_430px] xl:grid-cols-[1fr_630px]">
        <div>
          <InnerSectionTitle
            title={title}
            className="md:mt-10 large"
            heading1
            animation="has_text_mov_anim"
          />
          <div className="mt-6 lg:mt-[14px] lg:ms-[140px]">
            <p className="has_fade_anim max-w-full lg:indent-[60px] lg:max-w-[300px]">
              {description}
            </p>
          </div>
        </div>
        
        {/* Animated Gradient Visual */}
        <div className="relative w-full h-[400px] md:h-[600px] lg:h-[820px]">
          {/* Animated Blobs Background */}
          <div className="absolute inset-0 overflow-hidden rounded-2xl">
            <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
            <div className="absolute top-0 -right-4 w-72 h-72 bg-theme rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
          </div>

          {/* Main Gradient Card */}
          <div className="relative rounded-2xl overflow-hidden h-full bg-gradient-to-br from-purple-600 via-theme to-pink-600 p-1">
            <div className="w-full h-full bg-black/90 dark:bg-black/90 rounded-2xl p-8 flex flex-col justify-between relative overflow-hidden">
              
              {/* Decorative Grid Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="grid grid-cols-8 grid-rows-8 h-full w-full gap-4">
                  {Array.from({ length: 64 }).map((_, i) => (
                    <div key={i} className="border border-white/20 rounded"></div>
                  ))}
                </div>
              </div>

              {/* Glowing Orbs */}
              <div className="absolute top-20 right-20 w-40 h-40 bg-purple-500 rounded-full filter blur-3xl opacity-40 animate-pulse"></div>
              <div className="absolute bottom-20 left-20 w-40 h-40 bg-pink-500 rounded-full filter blur-3xl opacity-40 animate-pulse animation-delay-2000"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-theme rounded-full filter blur-3xl opacity-30 animate-pulse animation-delay-4000"></div>

              {/* Center Content */}
              <div className="relative z-10 flex items-center justify-center h-full">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-purple-500 via-theme to-pink-500 rounded-full flex items-center justify-center shadow-2xl">
                    <span className="text-4xl">⚡</span>
                  </div>
                  <h3 className="text-white font-bold text-2xl lg:text-3xl mb-3">Premium Services</h3>
                  <p className="text-white/70 text-sm lg:text-base max-w-xs mx-auto">
                    Delivering excellence through innovation and expertise
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default ServicesHero;