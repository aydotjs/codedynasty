"use client";

import { convertWithBr } from "@/lib/helper/converter";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import Link from "next/link";

type Props = {
  title: string;
  direct_contact: {
    title: string;
    link: string;
  };
  images: string[];
};

const ContactHero = ({ title, direct_contact, images }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null!);
  const [typedText, setTypedText] = useState("");
  const fullText = "console.log('Hello! Contact us today...');";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  useGSAP(
    () => {
      hasFadeAnim();
    },
    { scope: containerRef }
  );

  return (
    <section className="inner-container" ref={containerRef}>
      <div className="pt-[127px] xl:pt-[147px] 2xl:pt-[217px] pb-[30px] md:me-[calc((100vw-var(--container-max-widths))/-2-3px)]">
        <div className="grid gap-y-10 gap-x-[60px] lg:grid-cols-[1fr_580px] xl:grid-cols-[1fr_840px] 2xl:grid-cols-[1fr_960px]">
          <h1
            className="inner-section-title large has_fade_anim 2xl:!text-[120px] !leading-[0.94]"
            dangerouslySetInnerHTML={convertWithBr(title)}
          />
          <div className="grid gap-[15px] md:gap-[30px] items-end sm:grid-cols-[260px_1fr] xl:grid-cols-[300px_1fr]">
            <div className="grid gap-[15px] md:gap-[30px]">
              {/* Gradient Box 1 - Animated Purple to Blue with Typing Code */}
              <div className="image_box overflow-hidden relative h-[380px] w-full rounded-lg bg-gradient-to-br from-purple-600 via-violet-600 to-blue-500 animate-gradient-shift">
                {/* Animated gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/50 via-pink-500/30 to-blue-500/50 animate-pulse"></div>
                
                {/* Glowing orbs */}
                <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-300/30 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-10 right-10 w-40 h-40 bg-cyan-300/40 rounded-full blur-3xl animate-bounce-slow"></div>
                
                {/* Typing code animation */}
                <div className="absolute inset-0 flex items-center justify-center p-6">
                  <div className="font-mono text-sm md:text-base text-lime-300 bg-black/30 p-4 rounded-lg backdrop-blur-sm border border-lime-400/20">
                    <div className="text-gray-400 mb-2">// Contact.tsx</div>
                    <div className="text-pink-400">const <span className="text-yellow-300">message</span> = () =&gt; {'{'}</div>
                    <div className="ml-4 text-lime-300">{typedText}<span className="animate-pulse">|</span></div>
                    <div className="text-pink-400">{'};'}</div>
                  </div>
                </div>
              </div>
              
              {/* WhatsApp Contact Box - SUPER OBVIOUS */}
              <div className="z-10 relative bg-gradient-to-br from-green-500 to-green-600 px-[30px] pt-[40px] pb-[40px] rounded-lg shadow-2xl hover:shadow-green-500/50 transition-all duration-300 hover:scale-105">
                {/* WhatsApp Icon */}
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-xl animate-bounce-slow">
                  <svg className="w-10 h-10 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </div>
                
                <div className="text-center pt-6">
                  <p className="text-white text-lg font-semibold mb-2">💬 Chat with us on WhatsApp!</p>
                  <p className="text-white/90 text-sm mb-4">Quick response guaranteed</p>
                  
                  <Link 
                    href={direct_contact?.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <div className="bg-white text-green-600 font-bold text-xl px-6 py-4 rounded-full hover:bg-green-50 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-3 justify-center">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                      </svg>
                      <span>{direct_contact?.title}</span>
                    </div>
                  </Link>
                  
                  <p className="text-white/70 text-xs mt-3">Available 24/7</p>
                </div>
              </div>
            </div>
            
            <div className="grid gap-[15px] md:gap-[30px]">
              {/* Gradient Box 2 - Vibrant Orange to Pink */}
              <div className="image_box relative h-[330px] w-full rounded-lg bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-bl from-yellow-400/30 via-pink-500/40 to-purple-600/30 animate-gradient-shift"></div>
                
                {/* Floating particles effect */}
                <div className="absolute inset-0">
                  <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full animate-float"></div>
                  <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-yellow-300 rounded-full animate-float-delayed"></div>
                  <div className="absolute top-3/4 left-3/4 w-2 h-2 bg-pink-300 rounded-full animate-float"></div>
                </div>
                
                {/* Code snippet overlay */}
                <div className="absolute bottom-6 left-6 right-6 font-mono text-xs md:text-sm text-white/90 bg-black/40 p-4 rounded backdrop-blur-sm border border-white/10">
                  <span className="text-purple-300">{'<Contact'}</span>
                  <span className="text-yellow-300"> ready</span>
                  <span className="text-white">=</span>
                  <span className="text-green-300">{'{true}'}</span>
                  <span className="text-purple-300">{' />'}</span>
                </div>
              </div>
              
              {/* Gradient Box 3 - Electric Teal to Blue */}
              <div className="!overflow-hidden relative h-[400px] w-full rounded-lg bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600">
                <div className="absolute inset-0 bg-gradient-to-tr from-teal-400/40 via-blue-500/30 to-purple-600/40 animate-gradient-shift"></div>
                
                {/* Multiple glowing orbs */}
                <div className="absolute top-20 right-20 w-48 h-48 bg-cyan-300/40 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 left-20 w-56 h-56 bg-blue-400/30 rounded-full blur-3xl animate-bounce-slow"></div>
                
                {/* Matrix-style code rain effect */}
                <div className="absolute inset-0 overflow-hidden opacity-20">
                  <div className="font-mono text-xs text-lime-400 leading-tight p-4 animate-scroll-up">
                    {Array.from({ length: 15 }).map((_, i) => (
                      <div key={i} className="whitespace-nowrap">
                        {'{ id: ' + (i + 1) + ', status: "ready", message: "Let\'s build!" }'}
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Main code display */}
                <div className="absolute inset-0 flex items-center justify-center p-6">
                  <div className="font-mono text-sm md:text-base text-cyan-200 bg-black/40 p-6 rounded-lg backdrop-blur-sm border border-cyan-400/30">
                    <div className="text-gray-400 mb-3">// Let's Connect</div>
                    <div className="text-pink-400">await <span className="text-yellow-300">contact</span>.<span className="text-cyan-300">send</span>()</div>
                    <div className="text-green-400 mt-2">// ✓ Ready to build</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient-shift {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        @keyframes scroll-up {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        .animate-gradient-shift {
          animation: gradient-shift 3s ease-in-out infinite;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 4s ease-in-out infinite;
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
        .animate-scroll-up {
          animation: scroll-up 10s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default ContactHero;