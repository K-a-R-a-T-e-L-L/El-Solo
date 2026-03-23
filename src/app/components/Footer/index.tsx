import { FooterI18nType } from "@/types/i18n";
import Image from "next/image";
import Link from "next/link";
import style from './styles.module.css';
import { imageByBase, socialIcon } from "@/app/lib/imageRegistry";

interface FooterProps {
    t: FooterI18nType;
};

const Footer = ({ t }: FooterProps) => {
    return (
        <footer className="w-full pb-[50px] mt-[100px] max-lg:mt-[50px] max-md:mt-[0] bg-gradient-to-t bg-no-repeat from-[#01030b] to-[#0a0a0a] grid grid-cols-3 max-sm:grid-cols-1 p-8 gap-y-15">
            <div className="border-0 flex flex-col items-center gap-y-5 max-sm:w-[250px] ml-[auto] mr-[auto]">
                <div className="w-full flex gap-x-5 justify-center">
                    <div className="w-[30px] aspect-square relative">
                        <Image src={imageByBase("logo")} alt={t.footer.firstBox.alt} fill style={{ objectFit: 'contain' }} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                    </div>
                    <h3 className="inline-flex items-center text-[22px] max-xl:text-[18px] text-[aqua]" style={{ fontFamily: 'RubikWetPaint' }}>{t.footer.firstBox.title}</h3>
                </div>
                <p className="text-[14px] max-xl:text-[12px] text-center text-gray-400 w-[70%]">{t.footer.firstBox.description}</p>
            </div>
            <nav className="border-0 flex justify-start items-center gap-y-5 flex-col">
                <h3 className="inline-flex items-center text-[22px] max-xl:text-[18px] text-[aqua]" style={{ fontFamily: 'RubikWetPaint' }}>{t.footer.secondBox.title}</h3>
                <ul className="flex flex-col items-center text-[14px] max-xl:text-[12px] text-gray-400 gap-y-1">
                    {t.footer.secondBox.listLinks.length > 0 && t.footer.secondBox.listLinks.map((el, i) => {
                        return (
                            <Link href={`#${el[1]}`} className="hover:text-gray-200 cursor-pointer inline-flex gap-x-2 hover:gap-x-1 transition-all ease-in-out duration-150" key={i}>
                                <span>{"▹"}</span>
                                {el[0]}
                            </Link>
                        )
                    })}
                </ul>
            </nav>
            <ul className="border-0 flex justify-start items-center gap-y-5 flex-col">
                <h3 className="inline-flex items-center text-[22px] max-xl:text-[18px] text-[aqua]" style={{ fontFamily: 'RubikWetPaint' }}>{t.footer.thirdBox.title}</h3>
                <ul className="flex flex-col items-center text-[14px] max-xl:text-[12px] text-gray-400 gap-y-1">
                    {t.footer.thirdBox.listLinks.length > 0 && t.footer.thirdBox.listLinks.map((el, i) => {
                        return (
                            <Link
                                href={el[1]}
                                className="hover:text-gray-200 cursor-pointer inline-flex items-center justify-center gap-x-2 overflow-hidden hover:scale-[1.05] transition-all ease-in-out duration-150"
                                key={i}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <div className="h-[60%] aspect-square relative">
                                    <Image src={socialIcon(el[2], true)} alt={el[3]} fill style={{ objectFit: 'contain' }} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                                </div>
                                <span className="whitespace-nowrap">{el[0]}</span>
                            </Link>
                        )
                    })}
                </ul>
            </ul>
            <div className={`col-span-3 max-sm:col-span-1 h-[1px] ${style.decor_line}`}></div>
            <div className="col-span-3 max-sm:col-span-1 flex items-center text-center justify-center text-gray-600 max-xl:text-[14px]">
                {t.footer.copyright}
            </div>
        </footer>
    );
};

export default Footer;
