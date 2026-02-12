"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import hasWordAnim from "@/lib/animation/hasWordAnim";

const WebHero = () => {
  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
      hasWordAnim();
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef} className="relative py-20 lg:py-32 overflow-hidden">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-theme rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Cohort Announcement */}
          <div className="relative z-10">
            {/* Enrollment Badge */}
            <div className="has_fade_anim mb-6">
              <div className="inline-flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-green-500/20 to-emerald-600/20 backdrop-blur-sm border border-green-400/30 rounded-full">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 font-semibold text-sm">
                  🔥 Enrollment Now Open
                </span>
              </div>
            </div>

            <h1 className="has_word_anim text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
              Next Cohort{" "}
              <span className="text-theme relative inline-block">
                Starts Soon
                <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8" fill="none">
                  <path d="M0 4C50 4 50 0 100 0C150 0 150 4 200 4" stroke="currentColor" strokeWidth="2" className="opacity-30"/>
                </svg>
              </span>
            </h1>

            <div className="space-y-4 mb-8 has_fade_anim" data-delay="0.3">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-theme/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-theme text-sm">📅</span>
                </div>
                <div>
                  <p className="text-lg font-semibold">Starting March 9, 2026</p>
                  <p className="text-sm opacity-70">6 months intensive program</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-theme/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-theme text-sm">💰</span>
                </div>
                <div>
                  <p className="text-lg font-semibold">Special Early Bird Discount</p>
                  <p className="text-sm opacity-70">Limited time offer</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-theme/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-theme text-sm">👥</span>
                </div>
                <div>
                  <p className="text-lg font-semibold">Only 20 Spots Available</p>
                  <p className="text-sm opacity-70">Small class size for personalized attention</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-theme/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-theme text-sm">⚡</span>
                </div>
                <div>
                  <p className="text-lg font-semibold">Fast Track Your Career</p>
                  <p className="text-sm opacity-70">Learn React, Next.js, TypeScript & more</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 has_fade_anim" data-delay="0.5">
              <Link
                href="/contact"
                className="group px-10 py-5 bg-gradient-to-r from-theme to-purple-600 text-white rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-theme/50 transition-all inline-flex items-center gap-3 relative overflow-hidden"
              >
                <span className="relative z-10">Secure Your Spot Now</span>
                <svg 
                  className="relative z-10 w-6 h-6 group-hover:translate-x-1 transition-transform" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </Link>

              <Link
                href="/about"
                className="px-10 py-5 border-2 border-theme/30 rounded-xl font-bold text-lg hover:bg-theme hover:text-white hover:border-theme transition-all backdrop-blur-sm"
              >
                Learn More
              </Link>
            </div>

            {/* Urgency Badge */}
            
          </div>

          {/* Right Column - Visual Element */}
          <div className="has_fade_anim relative" data-fade-from="right">
            {/* Main Gradient Card */}
            <div className="relative rounded-2xl overflow-hidden aspect-square bg-gradient-to-br from-purple-600 via-theme to-pink-600 p-1">
              <div className="w-full h-full bg-black/90 rounded-2xl p-8 flex flex-col justify-between relative overflow-hidden">
                {/* Code Pattern Background */}
                <div className="absolute inset-0 opacity-10">
                  <pre className="text-xs text-green-400 font-mono">
{`function buildAmazing() {
  const skills = [
    'React', 'Next.js',
    'TypeScript', 'Node.js'
  ];
  
  return skills.map(skill => 
    learn(skill)
      .practice()
      .master()
  );
}

class Developer {
  constructor() {
    this.passion = true;
    this.growth = Infinity;
  }
  
  async create() {
    while(this.passion) {
      await this.learn();
      await this.build();
      await this.ship();
    }
  }
}`}
                  </pre>
                </div>

                {/* Tech Stack Icons */}
                <div className="relative z-10">
                  <h3 className="text-white font-bold text-2xl mb-4">What You'll Learn</h3>
                  <div className="flex flex-wrap gap-3">
                    {['React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'Tailwind'].map((tech, i) => (
                      <span 
                        key={tech}
                        className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-lg text-white text-sm font-medium border border-white/20 hover:bg-white/20 transition-all cursor-default"
                        style={{ animationDelay: `${i * 100}ms` }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Decorative Element */}
                <div className="relative z-10">
                  <div className="flex items-center gap-2 text-green-400">
                    <div className="flex gap-1">
                      <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                      <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                    <span className="text-sm font-mono">Your journey starts here...</span>
                  </div>
                </div>

                {/* Glowing Orbs */}
                <div className="absolute top-10 right-10 w-32 h-32 bg-purple-500 rounded-full filter blur-3xl opacity-30"></div>
                <div className="absolute bottom-10 left-10 w-32 h-32 bg-pink-500 rounded-full filter blur-3xl opacity-30"></div>
              </div>
            </div>

            {/* Floating Cohort Info Card */}
            <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-900 p-5 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-800 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-theme to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                  20
                </div>
                <div>
                  <p className="font-semibold text-sm text-gray-500 dark:text-gray-400">Max Class Size</p>
                  <p className="font-bold text-base">Small & Focused</p>
                </div>
              </div>
            </div>

            {/* Floating Discount Badge */}
            <div className="absolute -top-4 -right-4 bg-gradient-to-r from-theme to-purple-600 px-5 py-3 rounded-full shadow-lg backdrop-blur-sm animate-pulse">
              <p className="text-sm font-bold text-white">
                30% OFF Early Bird! 🎉
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Add required CSS for animations */}
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

export default WebHero;