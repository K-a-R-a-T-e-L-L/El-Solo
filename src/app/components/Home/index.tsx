import Image from "next/image";
import Card from "../Card";
import { useEffect, useState } from "react";
import { useGetSizingWidthWindow } from "@/hooks/useGetSizingWidthWindow/useGetSizingWidthWindow";
import style from './styles.module.css';
import { HomeI18nType } from "@/types/i18n";
import { animatedElements } from "@/app/lib/observer";
import { imageByBase } from "@/app/lib/imageRegistry";

interface HomeProps {
    t: HomeI18nType
};

const Home = ({ t }: HomeProps) => {

    const [widthWindow] = useGetSizingWidthWindow();
    const [widthsCards] = useState([180, 220, 230]);
    const [adaptiveWidthsCards, setadaptiveWidthsCards] = useState([180, 220, 230]);

    useEffect(() => {
        animatedElements('.hidden_text_home', 'animated');

        const getAdaptiveWidths = () => {
            if (widthWindow > 1280) {
                setadaptiveWidthsCards(widthsCards);
            }
            else if (widthWindow > 1024) {
                setadaptiveWidthsCards(widthsCards.map((widthCard) => widthCard / 3 * 2.3))
            }
            else if (widthWindow > 640) {
                setadaptiveWidthsCards(widthsCards.map((widthCard) => widthCard / 3 * 2));
            }
            else {
                setadaptiveWidthsCards(widthsCards.map((widthCard) => widthCard / 4 * 2.2));
            };
        };

        getAdaptiveWidths();
    }, [widthWindow, widthsCards]);

    return (
        <section className="h-[950px] max-xl:h-[850px] max-lg:h-[800px] w-full flex masked relative pt-20" id="home">
            <Image src={imageByBase("night_city")} alt={t.home.alts[0]} fill style={{ objectFit: 'cover' }} className="-z-1" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
            <article className="w-[50%] max-xl:w-[40%] max-lg:w-[50%] max-md:w-full h-full flex flex-col justify-start pt-[10%] pr-[3%] z-1">
                <h1 className={`text-[42px] max-xl:text-[32px] max-lg:text-[28px] max-md:text-[26px] hidden_text_home`} style={{ fontFamily: 'RubikWetPaint', animationDelay: '2s' }} >
                    <br />
                    {t.home.title.first}
                    <br />
                    <span className={`${style.flicker} ${style.span_not_open_sans} inline-block rotate-[-2deg]`}>
                        <span className={`opacity-80 ${style.span_not_open_sans}`}>
                            {t.home.title.second}
                        </span>
                        {t.home.title.third}&nbsp;
                        <span className={`opacity-60 relative top-[-5px] ${style.span_not_open_sans}`}>
                            {t.home.title.fourth}
                        </span>
                        {t.home.title.fifth}
                        <span className={`opacity-45 ${style.span_not_open_sans}`}>
                            {t.home.title.sixth}
                        </span>
                        {t.home.title.seventh}
                        <span className={`opacity-80 ${style.span_not_open_sans}`}>
                            {t.home.title.eighth}
                        </span>
                        {t.home.title.ninth}
                    </span>
                    <br className="text-[0px]" />
                    {t.home.title.last}
                </h1>
                <h2 className="text-[32px] max-xl:text-[22px] mt-[30px] font-semibold text-gray-300 hidden_text_home" style={{animationDelay: '2.5s'}}>
                    {t.home.titleSecond}
                </h2>
                <p className="text-[16px] mt-[20px] font-light text-gray-400 hidden_text_home" style={{animationDelay: '3s'}}>
                    <strong className="text-[#00FFD1]"><span className="text-xl">♠</span> El Solo</strong>:
                    <em className="text-white"> {t.home.description}</em>
                </p>
            </article>
            <article className="w-[50%] h-full max-xl:w-[60%] max-lg:w-[50%] max-md:w-full max-md:h-full max-md:items-end max-md:absolute max-lg:h-[80%] relative flex items-center justify-center">
                <Image src={imageByBase("broken_glass")} alt={t.home.alts[1]} fill style={{ objectFit: 'contain' }} priority className={style.appereance_img} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                <div className="w-[70%] max-xl:w-[60%] max-lg:w-[90%] relative h-[70%] flex flex-wrap items-center justify-center gap-[20px] text-[#00ffd015] perspective-[1000px]" style={widthWindow === 0 ? { display: 'none' } : { display: 'flex' }}>
                    <Card
                        widthCard={adaptiveWidthsCards[0]}
                        rotate="-15deg"
                        rotateX="-15deg"
                        rotateY="-15deg"
                        translateY={`${adaptiveWidthsCards[0] * -1.4}px`}
                        translateX={`${adaptiveWidthsCards[0] * -0.6}px`}
                        text={t.home.cards.first.text}
                        color="#00FFD1"
                        bgColor="#00ffd015"
                        icon="spades_icon.png"
                        aspect="60/68"
                        delay={0.1}
                        alt={t.home.cards.first.alt}
                        altCracks={t.home.alts[2]}
                    />
                    <Card
                        widthCard={adaptiveWidthsCards[1]}
                        rotate="20deg"
                        rotateY="20deg"
                        rotateX="20deg"
                        translateY={`${adaptiveWidthsCards[0] * -1.4}px`}
                        translateX={`${adaptiveWidthsCards[0] * 0.2}px`}
                        text={t.home.cards.second.text}
                        color="#FF0066"
                        bgColor="#ff006617"
                        icon="hearts_icon.png"
                        aspect="50/48"
                        delay={0.3}
                        alt={t.home.cards.second.alt}
                        altCracks={t.home.alts[2]}
                    />
                    <Card
                        widthCard={adaptiveWidthsCards[2]}
                        rotate="-5deg"
                        rotateX="-5deg"
                        rotateY="-5deg"
                        translateY={`${adaptiveWidthsCards[0] * 0.4}px`}
                        translateX={`${adaptiveWidthsCards[0] * -0.3}px`}
                        text={t.home.cards.last.text}
                        color="#00FF88"
                        bgColor="#00ff881f"
                        icon="clubs_icon.png"
                        aspect="65/72"
                        delay={0.5}
                        alt={t.home.cards.last.alt}
                        altCracks={t.home.alts[2]}
                    />
                </div>
            </article>
        </section>
    );
};

export default Home;
