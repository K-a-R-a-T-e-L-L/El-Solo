import { PortfolioI18nType } from '@/types/i18n';
import style from './styles.module.css';
import Image from 'next/image';
import { useEffect } from 'react';
import { animatedElements } from '@/app/lib/observer';
import { imageByBase } from '@/app/lib/imageRegistry';

interface PortfolioProps {
    t: PortfolioI18nType
}

const Portfolio = ({ t }: PortfolioProps) => {

    useEffect(() => {
        animatedElements('.hidden_title_portfolio', 'animated');
        animatedElements('.hidden_text_portfolio_1', 'animated');
        animatedElements('.hidden_text_portfolio_2', 'animated');
        animatedElements('.hidden_text_portfolio_3', 'animated');
    }, []);

    return (
        <section className="w-full flex flex-col max-lg:pt-[100px] pt-[350px] gap-y-10 max-xl:gap-y-7 items-center justify-center" id='portfolio'>
            <h2 className={`text-[32px] max-xl:text-[22px] text-[#00FFD1] ${style.swaying_title} hidden_title_portfolio`} style={{ fontFamily: 'RubikWetPaint', animationDelay: `2s` }}>{t.portfolio.title}</h2>
            <div className="flex flex-col items-center w-full h-full gap-y-7" data-nosnippet>
                {/* <!--noindex--> */}
                {t.portfolio.projects.length > 0 ? t.portfolio.projects.map((el, i) => {
                    return (
                        <div className={`w-full gap-y-5 max-xl:gap-y-3 rounded-xl p-8 max-xl:p-6 flex flex-col items-start ${style.project_effect} bg-[#0000ff0c] relative overflow-hidden`} key={i}>
                            <h3 className={`text-[22px] max-xl:text-[18px] text-cyan-300 hidden_text_portfolio_${i+1}`} style={{ fontFamily: 'RubikWetPaint', animationDelay: `${2.5 + 0.5 * i}s` }}>{el.title}</h3>
                            <span className={style.decor_gradient_line}></span>
                            <p className={`w-[70%] max-md:w-[90%] text-[16px] max-xl:text-[14px] max-sm:text-[13px] hidden_text_portfolio_${i+1}`} style={{ animationDelay: `${2.5 + 0.5 * i}s` }}>{el.description}</p>
                            <div className="w-full flex flex-wrap gap-3 mt-5 max-xl:mt-3">
                                {el.technologies.length > 0 && el.technologies.map((tech, index) => {
                                    return (
                                        <div className={`p-2 pl-5 pr-5 max-xl:p-1 max-xl:pl-4 max-xl:pr-4 rounded-[100px] border-1 border-[aqua]
                                            text-[aqua] font-mono bg-[rgba(0,255,255,0.05)] text-[14px] max-xl:text-[12px] hidden_text_portfolio_${i+1}`} style={{ animationDelay: `${2.5 + 0.5 * i}s` }} key={index}>
                                            {tech}
                                        </div>
                                    )
                                })}
                            </div>
                            <a href={el.button.url} className={`w-[200px] max-xl:w-[180px] h-[45px] max-xl:h-[40px] border-1 border-[cyan] grid place-items-center 
                            rounded-[5px] bg-gradient-to-r active:scale-[0.97] hidden_text_portfolio_${i+1}
                            font-bold text-[cyan] text-[14px] max-xl:text-[12px] cursor-pointer hover:w-[210px] max-xl:hover:w-[190px] transition-all duration-300 ease-in-out from-[rgba(0,255,255,0.1)]`}
                                target='_blank' style={{ animationDelay: `${2.5 + 0.5 * i}s` }} rel="noopener noreferrer">
                                {el.button.title}
                            </a>
                            <div className='w-[20%] aspect-[1/1] absolute bottom-0 right-0 -z-1'>
                                <Image
                                    src={imageByBase(`${el.icon.url}_icon`)}
                                    alt={el.icon.alt}
                                    fill
                                    loading="eager"
                                    fetchPriority="high"
                                    style={{ objectFit: 'contain' }}
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                            </div>
                            <span className={style.decor_gradient_line_bottom} style={{ animationDelay: `${i}s` }}></span>
                        </div>
                    )
                }) : null}
                {/* <!--/noindex--> */}
            </div>
        </section>
    );
};

export default Portfolio;
