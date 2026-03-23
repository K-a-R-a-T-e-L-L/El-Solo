import Image from "next/image";
import style from './styles.module.css';
import { AdvantagesI18nType } from "@/types/i18n";
import { useEffect } from "react";
import { animatedElements } from "@/app/lib/observer";
import { imageByBase } from "@/app/lib/imageRegistry";

interface AdvantagesProps {
    t: AdvantagesI18nType;
};

const Advantages = ({ t }: AdvantagesProps) => {

    useEffect(() => {
        animatedElements('.hidden_text_advantages', 'animated');
        animatedElements('.hidden_title_advantages', 'animated');
        animatedElements('.hidden_comparisons', 'animated');
    }, []);

    return (
        <section className="h-auto w-full bg-[#ffffff00] grid grid-cols-[40%_60%] pt-[40px] max-md:grid-cols-1 max-md:pt-0 max-md:place-items-center" id="advantages">
            <div className="h-full flex flex-col gap-y-5 justify-between max-md:row-start-2 max-md:w-[60%] max-sm:w-[80%] max-md:pt-[40px]">
                {t.advantages.advantagesList.length > 0 ? t.advantages.advantagesList.map((el, i) => {
                    return (
                        <div className={`w-full  rounded-2xl ${style.gradient_border}`} key={i} style={{ animationDelay: `${i * 0.5}s` }}>
                            <div className={`${style.bgCardAdvatage} w-full h-full bg-[#141414] rounded-[14px]`}>
                                <h4 className="text-[20px] max-xl:text-[16px] flex w-full items-center gap-x-4 p-5 text-[#00FF88] hidden_text_advantages" style={{ fontFamily: 'RubikWetPaint', animationDelay: `${2 + 0.5 * i}s` }}>
                                    <div className={`w-[30px] aspect-[1/1] relative`}>
                                        <Image src={imageByBase("arrow_red")} alt={t.advantages.alts[0]} fill style={{ animationDelay: `${i * 0.2}s` }} className={`object-contain ${style.shift}`} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                                    </div>
                                    {el.title}
                                </h4>
                                <p className="text-[16px] max-xl:text-[14px] p-5 pt-1 hidden_text_advantages" style={{ animationDelay: `${2 + 0.5 * i}s` }}>
                                    {el.description}
                                </p>
                            </div>
                        </div>
                    )
                }) : null}
            </div>
            <div className="h-full max-sm:grid-rows-[400px_auto] grid grid-rows-2 place-items-center max-md:w-[100%]">
                <div className="w-full grid place-items-center">
                    <h2 className={`text-[32px] max-xl:text-[22px] text-center ${style.glitch} hidden_title_advantages`} style={{ fontFamily: 'RubikWetPaint', animationDelay: '2s' }}>{t.advantages.title}</h2>
                    <h3 className="text-[22px] max-xl:text-[18px] mt-[30px] max-xl:mt-[15px] text-center hidden_title_advantages" style={{ fontFamily: 'RubikWetPaint', animationDelay: '2.5s' }}>
                        {t.advantages.titleSecond.first}
                        <br />
                        {t.advantages.titleSecond.last}
                    </h3>
                    <div className="w-[80%] max-sm:w-[300px] aspect-[576/336] relative">
                        <Image src={imageByBase("handshake")} alt={t.advantages.alts[1]} className={`object-contain opacity-35 rounded-[100px] ${style.shaking}`} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                    </div>
                </div>
                <div className={`w-[90%] flex flex-col h-full justify-evenly relative rounded-[5px] border-1 border-[#008080] overflow-hidden p-2.5 pb-8 ${style.transfusion_bg} hidden_comparisons`} style={{ animationDelay: '3s' }}>
                    <span className={style.decor_gradient_line}></span>
                    <div className="grid grid-cols-[40%_20%_40%] w-full h-[100px] pt-[20px]">
                        <div className="grid place-items-center">
                            <h4 className="text-[20px] max-xl:text-[16px] text-center text-[#FF0066] w-[80%]" style={{ fontFamily: 'RubikWetPaint' }}>{t.advantages.comparisonsList.title}</h4>
                        </div>
                        <div className="grid place-items-center">
                            <h4 className="text-[20px] max-xl:text-[16px] text-center text-[#00FF88]" style={{ fontFamily: 'RubikWetPaint' }}>VS</h4>
                        </div>
                        <div className="grid place-items-center">
                            <h4 className="text-[20px] max-xl:text-[16px] text-center text-[#00FFD1]" style={{ fontFamily: 'RubikWetPaint' }}>El Solo</h4>
                        </div>
                    </div>
                    {t.advantages.comparisonsList.items.length > 0 ? t.advantages.comparisonsList.items.map((el, i) => {
                        return (
                            <div className="grid grid-cols-[40%_20%_40%] max-sm:grid-cols-[35%_15%_50%] w-full h-[80px] place-items-center mt-[30px]" key={i}>
                                <div className="flex justify-center items-end h-full w-full">
                                    <p className={`text-[16px] max-xl:text-[14px] max-sm:text-[12px] w-[70%] h-full inline-flex items-center border-b-1 border-dashed border-[#008080] pb-[5px] break-all ${style.hoverP}`}>
                                        {el.other}
                                    </p>
                                </div>
                                <div className="relative w-[40%] max-sm:w-[60%] h-full">
                                    <Image src={imageByBase("arrow")} alt={t.advantages.alts[2]} fill className={`object-contain drop-shadow-[0_0_3px_#00FFD1]`} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                                </div>
                                <div className="flex justify-center items-end h-full w-full">
                                    <p className={`text-[16px] max-xl:text-[14px] max-sm:text-[12px] w-[70%] h-full inline-flex items-center border-b-1 border-dashed border-[#008080] pb-[5px] break-all ${style.hoverP}`}>
                                        {el.elSolo}
                                    </p>
                                </div>
                            </div>
                        )
                    }) : null}
                </div>
            </div>
        </section>
    );
};

export default Advantages;
