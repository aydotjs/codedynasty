import WebSectionTItle from "@/components/sectionTitle/WebSectionTItle";
import ImageComponent from "@/components/tools/ImageComponent";
import { ActionBtnType } from "@/types";
import CircleFillButton from "@/components/elements/button/CircleFillButton";

type Props = {
  title: string;
  subTitle: string;
  description: string;
  shape1: {
    dark: string;
    light: string;
  };
  action_btn: ActionBtnType;
};

const WebAboutTop = ({
  title,
  subTitle,
  shape1,
  description,
  action_btn,
}: Props) => {
  return (
    <>
      <div
        className="shape-1 has_fade_anim absolute hidden lg:block top-[94px] lg:top-[154px] xl:top-[254px] end-0"
        data-fade-offset="0"
      >
        <ImageComponent
          src={shape1.light}
          darkSrc={shape1.dark}
          width={142}
          height={87}
          className="inline-block"
          alt="shape_1"
        />
      </div>
      <div className="mb-[15px] sm:mb-[-26px] lg:mb-[-32px] 2xl:mb-[-40px]">
        <span className="has_fade_anim text-[16px] leading-none font-bold uppercase inline-block">
          {subTitle}
        </span>
      </div>
      <div className="has_fade_anim">
        <WebSectionTItle
          title={title}
          className="md:indent-[220px] max-w-[750px] xl:max-w-[760px] 2xl:max-w-[850px]"
        />
      </div>
      <div className="flex flex-col sm:flex-row mt-[40px] gap-[65px] md:mt-[60px] xl:mt-[80px]">
        <div className="sm:ps-[40px] md:ps-[80px] sm:border-s border-border flex-1">
          <p className="has_fade_anim max-w-[610px] text-lg leading-relaxed">{description}</p>
          <div
            className="has_fade_anim mt-[53px]"
            data-fade-from="top"
            data-fade-offset="100"
            data-ease="bounce"
          >
            <div className="btn-move">
              <CircleFillButton
                href={action_btn.link}
                text={action_btn.label}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WebAboutTop;