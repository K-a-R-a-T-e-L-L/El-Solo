'use client';
import { HeaderI18nType } from "@/types/i18n";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import style from './styles.module.css';
import { imageByBase } from "@/app/lib/imageRegistry";

interface HeaderProps {
    t: HeaderI18nType
};

const Header = ({ t }: HeaderProps) => {

    const [isActiveBurgerMenu, setIsActiveBurgerMenu] = useState<boolean | null>(null);
    const [isBurgerMenuRotate, setIsBurgerMenuRotate] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (isActiveBurgerMenu) setIsBurgerMenuRotate(true)
            else setIsBurgerMenuRotate(false);
        }, 200);

        return () => clearTimeout(timeout);
    }, [isActiveBurgerMenu]);

    return (
        <header className="h-[80px] w-full bg-gradient-to-b from-[#0a0a0a] to-[#0a0a0a00] fixed top-0 z-20 max-w-[calc(1344px-6%)] ml-[auto] mr-[auto] text-shadow-[0_0_10px_black]"
            style={isBurgerMenuRotate ? { backgroundColor: '#0a0a0a' } : {}}>
            <nav className="h-full w-full flex justify-center max-xl:justify-start max-md:justify-center">
                <ul className="w-[80%] h-full flex justify-between items-center max-md:justify-evenly">
                    <div className="h-[70%] relative flex items-center gap-x-[20px]">
                        <div className="h-full aspect-square relative grid place-items-center">
                            <Image src={imageByBase("logo")} alt={t.header.alt} fill style={{ objectFit: 'contain' }} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                        </div>
                        <h1 className="text-[aqua] text-[22px] " style={{ fontFamily: 'RubikWetPaint' }}>El Solo</h1>
                    </div>
                    {t.header.listLinks.length > 0 && t.header.listLinks.map((el, i) => {
                        return (
                            <Link href={`#${el[1]}`} className="inline-block opacity-65 font-bold hover:opacity-100 cursor-pointer max-xl:text-[14px] max-md:hidden" tabIndex={0} key={i}>{el[0]}</Link>
                        )
                    })}
                    <div className={`h-[70%] aspect-square relative cursor-pointer hover:opacity-50 hidden max-md:block ${isActiveBurgerMenu ? style.rotate_menu : style.rorotate_menu}`} onClick={() => setIsActiveBurgerMenu(!isActiveBurgerMenu)}>
                        <Image src={imageByBase(`burger_menu${isBurgerMenuRotate ? "_open" : ""}`)} alt="" fill style={{ objectFit: 'contain' }} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                    </div>
                    <nav className={`fixed left-0 top-[80px] w-screen pb-[160px] hidden overflow-hidden bg-[#0a0a0a] ${isActiveBurgerMenu === false ? style.hidden_burger : isActiveBurgerMenu ? style.appereance_burger : null}`}>
                        <ul className="flex flex-col w-full h-full justify-center items-center gap-y-20">
                            {t.header.listLinks.length > 0 && t.header.listLinks.map((el, i) => {
                                return (
                                    <Link href={`#${el[1]}`} className="inline-block opacity-65 font-bold hover:opacity-100 cursor-pointer max-xl:text-[16px]" tabIndex={0} key={i}
                                        onClick={() => setIsActiveBurgerMenu(false)}>{el[0]}</Link>
                                )
                            })}
                        </ul>
                    </nav>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
