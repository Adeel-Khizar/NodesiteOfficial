import React from "react";
import { ManropeFont } from "@/fonts";

interface AwardBadgeProps {
  href: string;
  imageSrc: string;
  altText: string;
  className?: string;
  [key: string]: any;
}

const AwardBadge: React.FC<AwardBadgeProps> = ({
  href,
  imageSrc,
  altText,
  className = "",
  ...props
}) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="block">
    <img
      src={imageSrc}
      alt={altText}
      className={`transition-all hover:opacity-65 duration-300 ease-in-out hover:-translate-y-2 ${className}`}
      {...props}
    />
  </a>
);

const AwardsSection = () => {
  const awardsData = {
    title: "Awards and Recognition",
    mainAward: {
      src: "/updatedPlatinum.png",
      alt: "Platinum Badge",
      className: "w-32 md:w-72 mb-10",
      href: "#",
    },
    secondaryAwards: [
      {
        src: "/clutch-shield.png",
        alt: "Clutch Shield Badge",
        className: "w-48 md:w-52",
        href: "#",
      },
      {
        src: "/Trustpilot.png",
        alt: "Trustpilot Badge",
        className: "w-48 md:w-52",
        href: "https://www.trustpilot.com/review/nodeagency.co",
      },
    ],
  };

  return (
    <section className="bg-black lg:pb-36 pb-24 w-full px-4 py-20 flex flex-col items-center relative z-30">
      <h2
        className={`${ManropeFont} text-2xl md:text-[58px] text-[20px] uppercase lg:pb-20 pb-4 font-bold text-center mb-6 text-white`}
      >
        {awardsData.title}
      </h2>

      <AwardBadge
        href={awardsData.mainAward.href}
        imageSrc={awardsData.mainAward.src}
        altText={awardsData.mainAward.alt}
        className={awardsData.mainAward.className}
      />

      <div className="flex flex-col md:flex-row gap-8 items-center justify-between max-w-[700px] w-full">
        {awardsData.secondaryAwards.map((award, index) => (
          <AwardBadge
            key={index}
            href={award.href}
            imageSrc={award.src}
            altText={award.alt}
            className={award.className}
          />
        ))}
      </div>
    </section>
  );
};

export default AwardsSection;
