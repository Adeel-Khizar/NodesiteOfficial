import { faqs } from '@/constants';
import { Rancher, SedaN } from '@/fonts';
import React, { useRef, useState, useEffect } from 'react';

interface FAQ {
    id: number;
    header: string;
    text: string;
}

interface AccordionItemProps {
    handleToggle: (id: number) => void;
    active: number | null;
    faq: FAQ;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ handleToggle, active, faq }) => {
    const contentEl = useRef<HTMLDivElement>(null);
    const { id, header, text } = faq;

    const isActive = active === id;

    // State to manage the height for the collapsing effect
    const [height, setHeight] = useState<string | number>('0px');

    useEffect(() => {
        if (isActive && contentEl.current) {
            setHeight(contentEl.current.scrollHeight);
        } else {
            setHeight('0px');
        }
    }, [isActive]);

    return (
        <div className="rc-accordion-card">
            <div className="rc-accordion-header">
            <div className={`rc-accordion-toggle p-4 bg-gray-900 border-b-2 border-gray-400  md:p-6 ${isActive ? 'active' : ''}`} onClick={() => handleToggle(id)}>
    <h5 className={` ${Rancher} rc-accordion-title text-xl md:text-2xl `}>{id}. {header}</h5>
    {isActive ? (
        <svg className="md:h-[40px] md:w-[40px] h-[30px] w-[30px] " width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 12L18 12" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    ) : (
        <svg className="md:h-[40px] md:w-[40px] h-[30px] w-[30px] " viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 12H20M12 4V20" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )}
</div>

            </div>
            <div className="rc-collapse" style={{ height }}>
                <div ref={contentEl} className="rc-accordion-body">
                    <p className={`${SedaN} mb-0  text-lg`}>{text}</p>
                </div>
            </div>
        </div>
    );
}

const FAQS: React.FC = () => {
    const [active, setActive] = useState<number | null>(null);

    const handleToggle = (index: number) => {
        setActive(active === index ? null : index);
    }

    return (
        <div className='h-auto relative z-[111] bg-black px-[6vw] py-[45px] lg:py-[80px] flex flex-col justify-center items-start'>
            <h2 className={`${Rancher} text-4xl  md:text-left text-center md:text-7xl pb-8  text-white `} >Frequently Asked Questions</h2>
            <p className={`${SedaN} md:text-left text-center text-md md:text-xl text-white `} >Our FAQs section provides quick answers to common inquiries about our services, project timelines, support options, and more.</p>
            <div className="container-fluid pt-10 mt-5 mb-5">
                <div className="row justify-content-center">
                    <div className="col-md-8 mt-2">
                        <div className="card">
                            <div className="card-body">
                                {faqs.map((faq) => (
                                    <AccordionItem key={faq.id} active={active} handleToggle={handleToggle} faq={faq} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FAQS;
