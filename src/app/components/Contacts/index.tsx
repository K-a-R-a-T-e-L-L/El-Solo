import Image from "next/image";
import Link from "next/link";
import { ContactsI18nType } from "@/types/i18n";
import { useEffect, useState } from "react";
import { animatedElements } from "@/app/lib/observer";
import { imageByBase, socialIcon } from "@/app/lib/imageRegistry";

interface ContactsProps {
    t: ContactsI18nType;
};

const Contacts = ({ t }: ContactsProps) => {

    const columnFirst = t.contacts.listContacts.slice(0, 3);
    const columnSecond = t.contacts.listContacts.slice(3);
    const [buttonsTexts, setButtonsTexts] = useState<string[]>(['copy tg username', 'copy link', 'copy link', 'copy email', 'copy link', 'copy phone number']);

    const copyText = (url: string, index: number) => {
        let copiedText = '';

        if (url === "https://t.me/K_a_R_a_T_e_L_L") {
            copiedText = '@' + url.split('/')[url.split('/').length - 1];
        }
        else if (url.startsWith("https://")) {
            copiedText = url;
        }
        else {
            copiedText = url.split(':')[1];
        };

        navigator.clipboard.writeText(copiedText)
            .then(() => {
                setButtonsTexts((prevState) => {
                    const newPrevState = [...prevState];
                    newPrevState[index] = '✓ Copied!';
                    return newPrevState;
                });

                const timeout = setTimeout(() => {
                    const defaultTextButton: string = index === 0 ? 'copy tg username' : index === 3 ? 'copy email' : index === 5 ? 'copy phone number' : 'copy link';
                    setButtonsTexts((prevState) => {
                        const newPrevState = [...prevState];
                        newPrevState[index] = defaultTextButton;
                        return newPrevState;
                    });
                }, 2000);

                return () => clearTimeout(timeout);
            });
    };

    useEffect(() => {
        animatedElements('.hidden_text_contacts', 'animated');
    }, []);

    return (
        <section className="w-full pt-[150px] max-md:pt-[100px] pb-[100px]" id="contacts">
            <article className="w-full h-full flex flex-col justify-center gap-y-20 max-xl:gap-y-10 perspective-[1000px]">
                <h2 className={`text-[32px] max-xl:text-[22px] text-[#00FFD1] hidden_text_contacts`} style={{ fontFamily: 'RubikWetPaint', animationDelay: `2s` }}>{t.contacts.title}</h2>
                <div className="flex max-md:flex-col gap-x-5 gap-y-5 w-[100%] h-full relative">
                    <div className="w-[50%] max-md:w-full h-full min-h-full flex flex-col gap-y-5 justify-between">
                        {columnFirst.length > 0 && columnFirst.map((el, i) => {
                            return (
                                <div className={`w-[100%] max-w-[100%] flex gap-x-5 relative hover:translate-x-1 transition-all duration-305 ease-in-out min-h-[140px]
                                    bg-[rgba(0,255,255,0.01)] p-10 max-sm:p-5 rounded-[20px] border-1 border-[rgba(0,255,255,0.1)]`}
                                    key={i}>
                                    <div className="relative w-[15%] max-w-[50px] min-w-[50px] max-sm:min-w-[30px] aspect-[1/1]">
                                        <Image src={socialIcon(el.src)} alt={el.alt} className="object-contain" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                                    </div>
                                    <div className="w-[82%] flex flex-col justify-evenly gap-y-2">
                                        <h3 className="text-[22px] max-xl:text-[18px] text-cyan-500 hidden_text_contacts inline-flex max-sm:flex-col" style={{ fontFamily: 'RubikWetPaint', animationDelay: `${2.5 + 0.5 * i}s` }}>
                                            {el.name}
                                            <button className={`text-[12px] w-[fit-content] max-sm:text-[11px] ml-[20px] max-sm:ml-[0px] inline-flex gap-2 items-center justify-center p-1 bg-black pl-2 pr-2 rounded-[5px] border-1 
                                                border-[rgba(0,255,255,0.1)] max-sm:p-0.5 max-sm:pl-1 max-sm:pr-1 hover:border-[#00BCD4] active:scale-[0.97] transition-all duration-200 ease-in-out`}
                                                onClick={() => { copyText(el.url, i) }}>
                                                {buttonsTexts[i]}
                                                <div className="w-[15px] max-sm:w-[10px] aspect-square relative">
                                                    <Image src={imageByBase("icon_copy")} alt={"Icon copy"} className="object-contain" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                                                </div>
                                            </button>
                                        </h3>
                                        <Link
                                            className="text-cyan-600 text-nowrap hover:text-violet-700 hidden_text_contacts overflow-hidden pr-5"
                                            href={el.url}
                                            target="_blank"
                                            style={{ animationDelay: `${2.5 + 0.5 * i}s` }}
                                            rel="noopener noreferrer"
                                        >
                                            {el.url}
                                        </Link>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className="w-[50%] max-md:w-full h-full min-h-full flex flex-col gap-y-5 justify-between">
                        {columnSecond.length > 0 && columnSecond.map((el, i) => {
                            return (
                                <div className={`w-[100%] max-w-[100%] flex gap-x-5 relative hover:translate-x-1 transition-all duration-305 ease-in-out min-h-[140px]
                                    bg-[rgba(0,255,255,0.01)] p-10 max-sm:p-5 rounded-[20px] border-1 border-[rgba(0,255,255,0.1)]`} key={i}>
                                    <div className="relative w-[15%] max-w-[50px] min-w-[50px] max-sm:min-w-[30px] aspect-[1/1]">
                                        <Image src={socialIcon(el.src)} alt={el.alt} className="object-contain" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                                    </div>
                                    <div className="w-[82%] flex flex-col justify-evenly gap-y-2">
                                        <h3 className="text-[22px] max-xl:text-[18px] text-cyan-500 hidden_text_contacts inline-flex max-sm:flex-col" style={{ fontFamily: 'RubikWetPaint', animationDelay: `${2.5 + 0.5 * i}s` }}>
                                            {el.name}
                                            <button className={`text-[12px] w-[fit-content] max-sm:text-[11px] ml-[20px] max-sm:ml-[0px] inline-flex gap-2 items-center justify-center p-1 bg-black pl-2 pr-2 rounded-[5px] border-1 
                                                border-[rgba(0,255,255,0.1)] max-sm:p-0.5 max-sm:pl-1 max-sm:pr-1 hover:border-[#00BCD4] active:scale-[0.97] transition-all duration-200 ease-in-out`}
                                                onClick={() => { copyText(el.url, i === 0 ? 3 : i === 1 ? 4 : 5) }}>
                                                {i === 0 ? buttonsTexts[3] : i === 1 ? buttonsTexts[4] : buttonsTexts[5]}
                                                <div className="w-[15px] max-sm:w-[10px] aspect-square relative">
                                                    <Image src={imageByBase("icon_copy")} alt={"Icon copy"} className="object-contain" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                                                </div>
                                            </button>
                                        </h3>
                                        <Link className="text-cyan-600 text-nowrap hover:text-violet-700 hidden_text_contacts overflow-hidden pr-5" href={el.url} target="_blank" style={{ animationDelay: `${2.5 + 0.5 * i}s` }}>
                                            {el.url}
                                        </Link>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </article>
        </section>
    );
};

export default Contacts;
