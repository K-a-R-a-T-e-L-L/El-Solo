import Image from "next/image";
import style from './styles.module.css';
import { imageByBase } from "@/app/lib/imageRegistry";

interface CardProps {
    widthCard: number,
    translateY?: string,
    translateX?: string,
    rotate?: string,
    rotateY?: string,
    rotateX?: string,
    text: string,
    color: string,
    bgColor: string,
    icon: string,
    aspect: string,
    delay: number,
    alt: string,
    altCracks: string
}

const Card: React.FC<CardProps> = ({ widthCard, translateX, translateY, rotate, rotateY, rotateX, text, color, bgColor, icon, aspect, delay, alt, altCracks }) => {
    const iconSrc = imageByBase(icon);
    const cracksSrc = imageByBase("cracks");

    return (
        <div
            style={{ width: widthCard, rowGap: '5%', transform: `rotate(${rotate}) rotateX(${rotateX || 0}) rotateY(${rotateY || 0}) translateX(${translateX || 0}) translateY(${translateY || 0})`, boxShadow: `0 0 10px ${color}`, color: color, background: bgColor, animationDelay: `${delay}s` }}
            className={`absolute aspect-[63.5/88.9] rounded-[7%] flex justify-center items-center flex-col text-[${color}] overflow-hidden hover:scale-101 transition-transform duration-100 ease-in-out cursor-pointer active:rotate-[1deg] transform-3d ${style.card}`}
        >
            <div className="absolute w-[14%] h-[30%] top-[3%] left-[3%] flex flex-col items-center">
                <span style={{ fontSize: `calc(${widthCard * 0.14}px)` }}>A</span>
                <div className="w-[65%] relative" style={{ aspectRatio: aspect }}>
                    <Image src={iconSrc} alt={alt} fill className={`object-contain`} style={{ filter: `drop-shadow(0 0 3px ${color})` }} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                </div>
            </div>
            <div className="absolute w-[14%] h-[30%] bottom-[3%] right-[3%] flex flex-col items-center rotate-180">
                <span style={{ fontSize: `calc(${widthCard * 0.14}px)` }}>A</span>
                <div className="w-[65%] relative" style={{ aspectRatio: aspect }}>
                    <Image src={iconSrc} fill alt={alt} className={`object-contain`} style={{ filter: `drop-shadow(0 0 3px ${color})` }} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                </div>
            </div>
            <div className="w-[25%] relative" style={{ aspectRatio: aspect }}>
                <Image src={iconSrc} fill className={`object-contain`} style={{ filter: `drop-shadow(0 0 3px ${color})` }} alt={alt} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
            </div>
            <div className="w-[50%] aspect-[306/279] absolute right-0 top-0">
                <Image src={cracksSrc} fill alt={altCracks} className="drop-shadow-[0_0_5px_black]" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
            </div>
            <div className="w-[50%] aspect-[306/279] absolute left-0 bottom-0 rotate-90">
                <Image src={cracksSrc} fill alt={altCracks} className="drop-shadow-[0_0_5px_black]" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
            </div>
            <h2 style={{fontFamily: 'RubikWetPaint', fontSize: `calc(${widthCard * 0.09}px` }} className="w-[80%] text-center text-shadow-[0_0_5px_black]" >{text}</h2>
        </div>
    )
};

export default Card;
