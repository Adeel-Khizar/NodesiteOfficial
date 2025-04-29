import { Rancher, ManropeFont } from "@/fonts";
import React from "react";

const ProjectCount = () => {
  const fastText = "(*fast)";
  return (
    <div className="flex relative  rounded-t-md rounded-r-md  rounded-b-none bg-black lg:px-10 px-4 py-10 flex-col lg:h-auto lg:pb-24 w-full justify-center items-start gap-6 lg:gap-12  ">
      <div className="flex lg:max-w-[70%] bg-black flex-col   justify-center items-start gap-12  ">
        <h3 className={` text-lg md:text-2xl text-white ${ManropeFont} `}>
          Over 200+ Projects Closed
        </h3>
        <h2
          style={{
            lineHeight: "95%",
          }}
          className={` ${ManropeFont}  text-[26px] md:text-[5vw] text-white`}
        >
          Creative Agency designing immersive websites from concept to reality{" "}
          <span className="text-orange-500"> {fastText} </span>
        </h2>
        <div>
          <h3 className={`text-lg md:text-2xl text-white ${ManropeFont} `}>
            Our Mission:
          </h3>
          <p className={` text-gray-300 md:text-xl ${ManropeFont} `}>
            Turning Visionary Ideas Into Digital Reality, One Pixel At A Time
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCount;
