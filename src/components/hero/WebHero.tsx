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
          {/* Left Column - Content */}
          <div className="relative z-10">
            <div className="has_fade_anim mb-6">
              <span className="inline-block px-4 py-2 bg-theme/10 text-theme rounded-full text-sm font-semibold uppercase tracking-wider mb-4 backdrop-blur-sm border border-theme/20">
                Build • Learn • Grow
              </span>
            </div>

            <h1 className="has_word_anim text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
              We Build{" "}
              <span className="text-theme relative inline-block">
                Digital Products
                <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8" fill="none">
                  <path d="M0 4C50 4 50 0 100 0C150 0 150 4 200 4" stroke="currentColor" strokeWidth="2" className="opacity-30"/>
                </svg>
              </span>{" "}
              & Empower Developers
            </h1>

            <p 
              className="text-lg lg:text-xl leading-relaxed mb-8 max-w-xl has_fade_anim opacity-80" 
              data-delay="0.3"
            >
              From cutting-edge websites and mobile apps to comprehensive training in software development, UI/UX design, and data analysis — we turn ideas into reality and beginners into professionals.
            </p>

            <div className="flex flex-wrap gap-4 has_fade_anim" data-delay="0.5">
              <Link
                href="/contact"
                className="group px-8 py-4 bg-theme text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-theme/50 transition-all inline-flex items-center gap-2 relative overflow-hidden"
              >
                <span className="relative z-10">Start Your Project</span>
                <span className="relative z-10 group-hover:translate-x-1 transition-transform">→</span>
                <div className="absolute inset-0 bg-gradient-to-r from-theme to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </Link>

              <Link
               href="/about"
                className="px-8 py-4 border-2 border-theme/30 rounded-lg font-semibold hover:bg-theme hover:text-white hover:border-theme transition-all backdrop-blur-sm"
              >
                Explore Services
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-6 has_fade_anim" data-delay="0.7">
              <div className="relative">
                <div className="absolute inset-0 bg-theme/5 rounded-lg -z-10"></div>
                <div className="p-4">
                  <h3 className="text-3xl lg:text-4xl font-bold text-theme">50+</h3>
                  <p className="text-sm mt-1 opacity-70">Projects Delivered</p>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-theme/5 rounded-lg -z-10"></div>
                <div className="p-4">
                  <h3 className="text-3xl lg:text-4xl font-bold text-theme">100+</h3>
                  <p className="text-sm mt-1 opacity-70">Students Trained</p>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-theme/5 rounded-lg -z-10"></div>
                <div className="p-4">
                  <h3 className="text-3xl lg:text-4xl font-bold text-theme">5+</h3>
                  <p className="text-sm mt-1 opacity-70">Years Experience</p>
                </div>
              </div>
            </div>
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
                  <h3 className="text-white font-bold text-2xl mb-4">Our Tech Stack</h3>
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
                    <span className="text-sm font-mono">Building something great...</span>
                  </div>
                </div>

                {/* Glowing Orbs */}
                <div className="absolute top-10 right-10 w-32 h-32 bg-purple-500 rounded-full filter blur-3xl opacity-30"></div>
                <div className="absolute bottom-10 left-10 w-32 h-32 bg-pink-500 rounded-full filter blur-3xl opacity-30"></div>
              </div>
            </div>

            {/* Floating Quality Card */}
            <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-900 p-5 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-800 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-theme to-purple-600 rounded-full flex items-center justify-center text-white text-xl font-bold shadow-lg">
                  ✓
                </div>
                <div>
                  <p className="font-semibold text-lg">Quality Assured</p>
                </div>
              </div>
            </div>

            {/* Floating Tech Badge */}
            <div className="absolute -top-4 -right-4 bg-white dark:bg-gray-900 px-4 py-2 rounded-full shadow-lg border border-gray-200 dark:border-gray-800 backdrop-blur-sm">
              <p className="text-sm font-semibold">
                <span className="text-theme">100%</span> Client Satisfaction
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