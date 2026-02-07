import { TServiceType } from "@/types";
import { convertWithBr } from "@/lib/helper/converter";
import Link from "next/link";

const WebServiceCard = ({ data, slug }: TServiceType) => {
  const { title, description, features, id } = data;
  
  function formatSerialNumber(number: number) {
    return number < 10 ? `0${number}` : `${number}`;
  }

  // Gradient configurations matching WebHero's aesthetic
  const gradientConfigs = [
    {
      // Purple to Pink - Software Development
      gradient: 'from-purple-600 via-theme to-pink-600',
      glowColor: 'purple-500',
    },
    {
      // Blue to Cyan - Design
      gradient: 'from-blue-600 via-cyan-500 to-teal-600',
      glowColor: 'blue-500',
    },
    {
      // Orange to Pink - Cloud/DevOps
      gradient: 'from-orange-500 via-pink-500 to-rose-600',
      glowColor: 'orange-500',
    },
    {
      // Green to Emerald - Data
      gradient: 'from-green-500 via-emerald-500 to-teal-600',
      glowColor: 'green-500',
    },
    {
      // Indigo to Purple - General
      gradient: 'from-indigo-600 via-purple-600 to-pink-600',
      glowColor: 'indigo-500',
    },
  ];

  const config = gradientConfigs[(id - 1) % gradientConfigs.length];

  return (
    <div className="has_fade_anim first:border-t">
      <Link href={`/service/web/${slug}`}>
        <div className="border-b border-border py-[24px] xl:py-[44px] grid gap-y-5 gap-x-[60px] grid-cols-[auto] sm:grid-cols-[100px,1fr,100px] xl:grid-cols-[160px,1fr,100px] group">
          <span className="text-[22px] xl:text-[30px] font-semibold font-teko">
            {formatSerialNumber(id)}.
          </span>
          
          <div className="grid gap-y-5 gap-x-[60px] grid-cols-[auto] lg:grid-cols-[210px,1fr] xl:grid-cols-[300px,1fr] 2xl:grid-cols-[360px,1fr]">
            <h3
              className="text-[26px] xl:text-[36px] leading-[.88] uppercase"
              dangerouslySetInnerHTML={convertWithBr(title)}
            />
            <div>
              <p className="max-w-[340px]">{description}</p>
              <div className="mt-[18px]">
                <ul>
                  {features.slice(0, 3).map((feature, i) => (
                    <li className="text-[18px] leading-[1.41]" key={i}>
                      + {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Gradient Icon Container - Matching WebHero Style */}
          <div className="w-[88px] h-[115px] border border-border rounded-[44px] inline-flex justify-center items-center relative overflow-hidden group-hover:border-theme/50 transition-all duration-300">
            {/* Gradient Circle with Glow Effect */}
            <div className="relative">
              {/* Main gradient circle */}
              <div 
                className={`w-[45px] h-[45px] rounded-full bg-gradient-to-br ${config.gradient} p-[2px] group-hover:scale-110 transition-transform duration-300`}
              >
                <div className="w-full h-full bg-black/90 dark:bg-white/10 rounded-full backdrop-blur-sm flex items-center justify-center relative overflow-hidden">
                  {/* Animated shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  
                  {/* Optional: Add a subtle pattern */}
                  <div className="absolute inset-0 opacity-20" 
                    style={{
                      backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                      backgroundSize: '8px 8px'
                    }}
                  />
                </div>
              </div>
              
              {/* Glowing effect on hover */}
              <div 
                className={`absolute inset-0 bg-${config.glowColor} rounded-full filter blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300 -z-10`}
              />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default WebServiceCard;