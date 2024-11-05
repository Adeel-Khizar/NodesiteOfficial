import { MoreCaseStudies } from "@/components/work/MoreCaseStudies";
import { caseStudiesData } from "@/constants";
import { Rancher, SedaN } from "@/fonts";
import Image from "next/image";
import Link from "next/link";

export default function Page({ params }: { params: { slug: string } }) {
    const { slug } = params; // Destructure slug from params

    return (
        <div className="mt-[100px] py-[50px] bg-[#FCF6F2]">
           
            {caseStudiesData.map((item, index) => (
                item.slug === slug ? ( // Use === for comparison
                    <div key={index}> {/* Add a unique key for each item */}
                        <div className="h-[65vh] md:h-[70vh] md:flex-row flex-col flex items-center justify-center">
                            <div className="w-full flex md:items-end justify-start p-[5vw] h-full md:w-[65%]">
                                <h1 className={`text-6xl md:text-[6vw] ${Rancher}`}>{item.title}</h1>
                            </div>
                            <div
                                style={{
                                    backgroundImage: `url(${item.image1})`,
                                    backgroundPosition: 'center',
                                    backgroundSize: 'cover',
                                    backgroundRepeat: 'no-repeat'
                                }}
                                className="md:w-[35%] flex items-center justify-center h-full workClipPath m-auto w-[80%] relative"
                            >
                            </div>
                        </div>
                        <div className="flex px-[5vw] py-12 gap-8 flex-col">
                            <div className="md:flex flex-col md:flex-row">
                                <div className="md:w-[40%] md:mb-0 my-8 w-full">
                                    <h3 className={`text-3xl max-w-[300px] ${SedaN}`}>{item.subtitle1}</h3>
                                </div>
                                <div className="md:w-[60%] w-full">
                                    <h2 className={` ${Rancher} text-5xl pb-6`}>Project Brief</h2>
                                    <p className={`text-lg ${SedaN}`}>
                                        {item.description1}
                                    </p>
                                </div>
                            </div>
                            <div className="md:flex flex-col md:flex-row">
                                <div className="md:w-[40%] w-full">
                                    <h3 className={`text-3xl max-w-[300px] ${SedaN}`}>
                                        {item.subtitle2}
                                    </h3>
                                </div>
                                <div className="md:w-[60%] mb:mt-0 mt-8 w-full">
                                    <p className={`text-lg ${SedaN}`}>
                                        {item.description2}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-center w-full">
                            <div className="w-full gap-x-4 sm:gap-x-8 lg:gap-x-12 gap-y-12 sm:gap-y-16 lg:gap-y-40 sm:h-[120] h-auto sm:grid-cols-2 workcaseGrid px-[8vw] py-[40px] sm:py-[60px] bg-black">
                                <div>
                                    <Image className="h-full w-full" src={item.image1} height={1000} width={1000} alt="image" />
                                </div>
                                <div>
                                    <Image className="h-full w-full" src={item.image2} height={1000} width={1000} alt="image" />
                                </div>
                                <div>
                                    <Image className="h-full w-full" src={item.image3} height={1000} width={1000} alt="image" />
                                </div>
                                <div>
                                    <Image className="h-full w-full" src={item.image4} height={1000} width={1000} alt="image" />
                                </div>
                            </div>
                        </div>
                        <div className="bg-transparent h-auto flex md:flex-row flex-col px-4 py-16 sm:p-[6vw]">
                            <div className="h-full flex items-start md:mb-0 mb-10 justify-start md:w-[50%] w-full">
                                <h1 className={` ${Rancher} text-5xl md:text-[5vw]`}>Results</h1>
                            </div>
                            <div className="md:w-[50%] w-full h-full flex gap-8 md:gap-20 flex-col">
                                <p className={`${SedaN} w-full text-md md:text-2xl`}>
                                    {item.resultDes}
                                </p>
                                <Link href={item.link} className={`px-12 py-2 border-2 border-gray-900 rounded-full max-w-fit ${Rancher}`}>View Project</Link>
                            </div>
                        </div>
                        <div className="w-full">
                            <div className="px-[7vw] py-[10vw]">
                                <Image className="h-auto w-full" src={item.image5} alt="image" height={1500} width={2500} />
                            </div>
                            <div>
                                <Image className="h-auto w-full" src={item.image6} alt="image" height={1500} width={2500} />
                            </div>
                        </div>
                        <div className="w-full">
                            <MoreCaseStudies />
                        </div>
                    </div>
                ) : null // Render nothing if the item does not match the slug
            ))}
        </div>
    );
}
