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
    <section ref={containerRef} className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div>
            <div className="has_fade_anim mb-6">
              <span className="inline-block px-4 py-2 bg-theme/10 text-theme rounded-full text-sm font-semibold uppercase tracking-wider mb-4">
                Build • Learn • Grow
              </span>
            </div>

            <h1 className="has_word_anim text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
              We Build{" "}
              <span className="text-theme">Digital Products</span>{" "}
              & Empower Developers
            </h1>

            <p 
              className="text-lg lg:text-xl leading-relaxed mb-8 max-w-xl has_fade_anim" 
              data-delay="0.3"
            >
              From cutting-edge websites and mobile apps to comprehensive training in software development, UI/UX design, and data analysis — we turn ideas into reality and beginners into professionals.
            </p>

            <div className="flex flex-wrap gap-4 has_fade_anim" data-delay="0.5">
              <Link
                href="#contact"
                className="px-8 py-4 bg-theme text-white rounded-lg font-semibold hover:opacity-90 transition-all inline-flex items-center gap-2"
              >
                Start Your Project
                <span>→</span>
              </Link>

              <Link
                href="#services"
                className="px-8 py-4 border-2 border-theme rounded-lg font-semibold hover:bg-theme hover:text-white transition-all"
              >
                Explore Services
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-6 has_fade_anim" data-delay="0.7">
              <div>
                <h3 className="text-3xl lg:text-4xl font-bold text-theme">50+</h3>
                <p className="text-sm mt-1">Projects Delivered</p>
              </div>
              <div>
                <h3 className="text-3xl lg:text-4xl font-bold text-theme">100+</h3>
                <p className="text-sm mt-1">Students Trained</p>
              </div>
              <div>
                <h3 className="text-3xl lg:text-4xl font-bold text-theme">5+</h3>
                <p className="text-sm mt-1">Years Experience</p>
              </div>
            </div>
          </div>

          {/* Right Column - Image/Visual */}
          <div className="has_fade_anim relative" data-fade-from="right">
            <div className="relative rounded-2xl overflow-hidden aspect-square">
              <Image
                src="/assets/imgs/gallery/img-s-68.jpg"
                fill
                alt="Code Dynasty - Building Digital Excellence"
                className="object-cover rounded-2xl shadow-2xl"
              />
              
              {/* Floating Card */}
              <div className="absolute bottom-8 left-8 bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg max-w-xs">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-theme rounded-full flex items-center justify-center text-white text-xl font-bold">
                    ✓
                  </div>
                  <div>
                    <p className="font-semibold text-lg">Quality Assured</p>
                    <p className="text-sm opacity-60">Professional Excellence</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebHero;