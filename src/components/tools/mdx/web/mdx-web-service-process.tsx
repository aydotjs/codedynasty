"use client";

import { convertWithBr } from "@/lib/helper/converter";
import { cn } from "@/lib/utils";

type Props = {
  title: string;
  icon?: {
    dark: string;
    light: string;
  };
  serial_no: string;
  feature_list: string[];
  className?: string;
};

const WebServiceProcess = ({
  title,
  icon,
  serial_no,
  feature_list,
  className,
}: Props) => {
  // Gradient configurations matching WebHero style
  const gradientConfigs = [
    {
      gradient: 'from-purple-600 via-theme to-pink-600',
    },
    {
      gradient: 'from-blue-600 via-cyan-500 to-teal-600',
    },
    {
      gradient: 'from-orange-500 via-pink-500 to-rose-600',
    },
    {
      gradient: 'from-green-500 via-emerald-500 to-teal-600',
    },
  ];

  // Get gradient based on serial number
  const index = parseInt(serial_no) - 1;
  const config = gradientConfigs[index % gradientConfigs.length];

  return (
    <div className="has_fade_anim group" data-fade-from="left" data-delay="0.15">
      <h4
        dangerouslySetInnerHTML={convertWithBr(title)}
        className="text-[24px] leading-[1.08] uppercase !font-semibold group-hover:text-theme transition-colors duration-300"
      />
      <div className="mt-[13px] xl:mt-[33px] z-[1] relative before:content-[''] before:absolute before:w-full before:h-px before:bg-border before:start-0 before:top-1/2 before:-translate-y-1/2 before:z-[-1] after:content-[''] after:absolute after:w-2 after:h-2 after:bg-border after:rounded-full after:start-0 after:top-1/2 after:-translate-y-1/2 after:z-[1]">
        <span className="text-[16px] font-teko font-semibold w-[30px] h-[30px] border border-border flex justify-center items-center rounded-full ms-auto bg-background relative z-[1] group-hover:border-theme/50 transition-colors duration-300">
          {serial_no}
        </span>
      </div>
      
      {/* Gradient Icon replacing ImageComponent */}
      <div className="mt-[20px] xl:mt-[40px]">
        <div className="w-[52px] h-[60px] relative">
          {/* Main gradient container */}
          <div 
            className={`w-full h-full rounded-full bg-gradient-to-br ${config.gradient} p-[2px] group-hover:scale-110 transition-all duration-500 shadow-lg`}
          >
            {/* Inner circle with glass effect */}
            <div className="w-full h-full bg-black/90 dark:bg-black/70 rounded-full backdrop-blur-md flex items-center justify-center relative overflow-hidden border border-white/5">
              {/* Animated shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              
              {/* Subtle dot pattern */}
              <div className="absolute inset-0 opacity-10" 
                style={{
                  backgroundImage: 'radial-gradient(circle, white 0.5px, transparent 0.5px)',
                  backgroundSize: '6px 6px'
                }}
              />
              
              {/* Center pulsing dot */}
              <div className="relative">
                <div className={`w-3 h-3 bg-gradient-to-br ${config.gradient} rounded-full animate-pulse`}></div>
              </div>
            </div>
          </div>
          
          {/* Outer glow effect on hover */}
          <div 
            className={`absolute inset-0 bg-gradient-to-br ${config.gradient} rounded-full filter blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 -z-10`}
          />
        </div>
      </div>

      <div className="mt-[30px]">
        <ul>
          {feature_list.map((item, i) => (
            <li
              key={i}
              className="flex gap-[10px] text-[18px] first:mt-0 mt-[10px] opacity-70 group-hover:opacity-100 transition-all duration-300"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <span>+</span> {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WebServiceProcess;