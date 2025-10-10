import { ListServicesI18nType } from "@/types/i18n";
import Image from "next/image";
import style from "./styles.module.css";
import { useEffect, useState } from "react";
import PopUpWindow from "../PopUpWindow";
import { animatedElements } from "@/app/lib/observer";

interface ListServicesProps {
    t: ListServicesI18nType
};

const ListServices = ({ t }: ListServicesProps) => {

    const [flippedCards, setFlippedCards] = useState<boolean[]>(new Array(t.services.listServices.length).fill(false));
    const [isOpenPopUp, setIsOpenPopUp] = useState<boolean>(false);

    const handleCardClick = (index: number) => {
        setFlippedCards((prevState) => {
            const newPrevState = [...prevState];
            newPrevState[index] = !newPrevState[index];
            return newPrevState;
        });
    };

    useEffect(() => {
        animatedElements('.hidden_title_services', 'animated');
        animatedElements('.hidden_text_service_1', 'animated');
        animatedElements('.hidden_text_service_2', 'animated');
        animatedElements('.hidden_text_service_3', 'animated');
        animatedElements('.hidden_text_card_price_1', 'animated');
        animatedElements('.hidden_text_card_price_2', 'animated');
        animatedElements('.hidden_text_card_price_3', 'animated');
    }, []);

    return (
        <section className="w-full flex pt-[140px] max-sm:pt-[100px] flex-col items-center justify-center" id="services">
            <h2 className={`text-[32px] max-xl:text-[22px] text-[#00FFD1] ${style.swaying_title} hidden_title_services`} style={{ fontFamily: 'RubikWetPaint', animationDelay: '2s' }}>{t.services.title}</h2>
            <article className="w-full h-auto">
                <div className="w-full h-auto flex items-center justify-evenly flex-wrap mt-[40px] gap-6 perspective-[1000px]">
                    {t.services.listServices.length > 0 ? t.services.listServices.map((el, i) => {
                        return (
                            <div className={`min-w-[300px] w-[30%] aspect-[3/3.5] rounded-[15px] border-1 border-[#00ffff35] bg-[#00ffff10]
                            flex justify-center ${style.card} ${flippedCards[i] ? style.flipped : ''}`} style={{ animationDelay: `${i * 0.2}s` }} onClick={() => handleCardClick(i)} key={i}>
                                <span className="text-[12px] absolute bottom-6 right-0 -rotate-30 bg-[#0a0a0a6b] text-[#00ffff91] w-[25%] text-center backface-hidden">{t.services.clickText}</span>
                                <div className={`${style.card_face_and_back} p-5 rounded-[13px]`}>
                                    <h3 className={`text-[22px] max-xl:text-[18px] max-xl:mt-[15px] text-center text-[aqua]
                                        max-lg:text-[16px] max-md:text-[14px] hidden_text_service_${i + 1}`}
                                        style={{ fontFamily: 'RubikWetPaint', animationDelay: `${2.5 + 0.5 * i}s` }}>
                                        {el.title}
                                    </h3>
                                    <ul className="w-full inline-flex flex-col flex-[0.8] justify-evenly text-[14px] list-disc pl-5 font-semibold text-[aqua] max-md:text-[12px]">
                                        {el.list.length > 0 ? el.list.map((item, index) => {
                                            return (
                                                <li key={index} className={`hidden_text_service_${i + 1}`} style={{ animationDelay: `${2.5 + 0.5 * i}s` }}>
                                                    {item}
                                                </li>
                                            )
                                        }) : null}
                                    </ul>
                                    <div className="w-[60%] h-[15%] pt-[5px] relative">
                                        <Image src={`/images/${el.images.icon.url}.png`} alt={el.images.icon.alt} fill style={{ objectFit: 'contain' }} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                                    </div>
                                </div>
                                <div className={`${style.card_back} ${style.card_face_and_back} p-5 rounded-[13px]`}>
                                    <div className="w-full h-[30%] relative">
                                        <Image src={`/images/${el.images.image.url}.png`} alt={el.images.image.alt} fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                                    </div>
                                    <p className="max-xl:text-[14px] max-lg:text-[12px] font-bold text-purple-100">
                                        <span className={`text-[aqua] ${style.main_text}`}>{el.description.split("—")[0]}</span>
                                        {el.description.split("—").map((row, index) => {
                                            if (index !== 0) {
                                                return (
                                                    <span key={index}>—{row}</span>
                                                )
                                            }
                                        })}
                                    </p>
                                </div>
                            </div>
                        )
                    }) : null}
                </div>
            </article>
            <article className="w-full flex justify-center items-center mt-40 max-lg:mt-20 perspective-[1000px] max-lg:flex-col gap-y-5">
                {t.services.pricesList.length > 0 ? t.services.pricesList.map((el, i) => {
                    return (
                        <div key={i} className={`w-[380px] max-xl:w-[300px] aspect-[3/4] p-6 max-xl:p-3 border-1 ${i === 0 ? "border-[#71BCE1]" : (i === 1 ? "border-[cyan]" : "border-[blue]")} rounded-xl 
                        relative overflow-hidden transform-3d hover:shadow-[0px_10px_20px_1px_#ffffff23] transition-all duration-250 ${style.transfusion}
                        ${i === 0 ? '-rotate-15 translate-y-30 -rotate-y-5 rotate-x-5 max-lg:rotate-3' : (i === 2 ? 'rotate-15 translate-y-30 rotate-y-5 rotate-x-5 max-lg:-rotate-2' : 'z-1 rotate-x-5 max-lg:rotate-0')} 
                        max-lg:rotate-x-0 max-lg:rotate-y-0 max-lg:translate-y-0`}
                            style={{ animationDelay: `${i}s` }}>
                            <span className={`text-[14px] ${i === 0 ? "text-sky-400" : (i === 1 ? "text-cyan-400" : "text-blue-400")} max-xl:text-[12px] hidden_text_card_price_${i + 1}`} style={{ animationDelay: `${2 + 0.5 * i}s` }}>
                                {el.price}
                            </span>
                            <h3 className={`text-[22px] ${i === 0 ? "text-sky-300" : (i === 1 ? "text-cyan-300" : "text-blue-300")} mt-1 max-xl:text-[18px] hidden_text_card_price_${i + 1}`}
                                style={{ fontFamily: 'RubikWetPaint', animationDelay: `${2 + 0.5 * i}s` }}>{el.title}</h3>
                            <p className={`text-[14px] text-gray-300 max-xl:text-[12px] mt-1 hidden_text_card_price_${i + 1}`} style={{ animationDelay: `${2 + 0.5 * i}s` }}>
                                {el.descriptionFirst}
                            </p>
                            <p className={`text-[14px] text-gray-300 max-xl:text-[12px] mt-5 max-xl:mt-2 hidden_text_card_price_${i + 1}`} style={{ animationDelay: `${2 + 0.5 * i}s` }}>
                                {el.descriptionSecond}
                            </p>
                            <p className={`italic ${i === 0 ? "text-sky-200" : (i === 1 ? "text-cyan-200" : "text-blue-200")} text-[13px] max-xl:text-[11px] mt-5 max-xl:mt-2 hidden_text_card_price_${i + 1}`}
                                style={{ animationDelay: `${2 + 0.5 * i}s` }}>
                                <strong>P.S.</strong> {el.ps}
                            </p>
                            <br />
                            <button className={`w-full h-[50px] max-xl:h-[40px] bg-gradient-to-br hidden_text_card_price_${i + 1}
                                ${i === 0 ? "from-sky-500" : (i === 1 ? "from-cyan-500" : "from-blue-500")} max-xl:text-[14px] ${i === 0 ? "to-sky-600" : (i === 1 ? "to-cyan-600" : "to-blue-600")} 
                                hover:opacity-60 active:translate-y-[-1px] transition-all text-[black] font-semibold rounded-[3px]`} onClick={() => setIsOpenPopUp(true)} style={{ animationDelay: `${2 + 0.5 * i}s` }}>
                                {el.button}
                            </button>
                            <span className={style.decor_gradient_line}></span>
                        </div>
                    )
                }) : null}
            </article>
            {isOpenPopUp && (
                <PopUpWindow color={'0,0,0'} set={setIsOpenPopUp}>
                    <div className="w-full h-full flex flex-col items-center justify-evenly">
                        <h3 className="text-[22px] text-center w-[80%] text-shadow-[0_0_3px_black] max-xl:text-[18px] max-xl:mb-[20px] max-xl:w-[85%]" style={{ fontFamily: 'RubikWetPaint' }}>{t.services.popUpWindow.title}</h3>
                        <div className="relative w-[60%] aspect-[5/2] max-md:w-[80%] overflow-hidden rounded-xl max-xl:rounded-[8px]">
                            <Image src={'/images/puzzle.png'} alt={t.services.popUpWindow.alt} fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                        </div>
                        <div className="w-[200px] aspect-square relative overflow-hidden rounded-[30px]">
                            <Image src={'/images/qr.png'} alt={'QR code'} fill style={{ objectFit: 'contain' }} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                        </div>
                        <hr className="w-[80%] h-[2px] max-md:w-[90%]" />
                        <div className="h-[50px] max-xl:h-[40px] max-xl:gap-x-[12px] flex p-1 gap-[20px] flex-wrap justify-center items-center mt-[30px] max-xl:mt-[20px]">
                            {t.services.popUpWindow.listSocialNetwork.length > 0 ? t.services.popUpWindow.listSocialNetwork.map((el, i) => {
                                return (
                                    <a className="h-full aspect-[1/1] rounded-[100%] relative shadow-[0_0_5px_black] cursor-pointer hover:opacity-70 active:scale-[0.97] transition-all duration-100" key={i} href={el.url} target="_blank">
                                        <Image src={`/images/${el.name}_icon.png`} alt={el.alt} fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                                    </a>
                                )
                            }) : null}
                        </div>
                    </div>
                </PopUpWindow>
            )}
        </section>
    );
};

export default ListServices;