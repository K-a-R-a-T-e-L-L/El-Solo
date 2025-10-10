import { Dispatch, SetStateAction } from 'react';
import style from './styles.module.css';

interface PopUpWindowProps {
    color: string,
    children: React.ReactNode,
    set: Dispatch<SetStateAction<boolean>>
};

const PopUpWindow: React.FC<PopUpWindowProps> = ({ color, children, set }) => {
    return (
        <div className={`w-full h-full fixed top-0 left-0 grid place-items-center z-999 ${style.appearance}`}>
            <div className="w-[80vw] max-w-[1344px] h-[90vh] z-2 backdrop-blur-[20px] border-1 border-[rgba(255,255,255,0.2)]" style={{ backgroundColor: `rgba(${color}, 0.5)` }}>
                {children}
                <button className="absolute top-[1vw] right-[1vw] w-[30px] aspect-[1/1] font-extrabold text-[20px] hover:opacity-50 active:text-[18px] text-shadow-[0_0_3px_black] active:translate-y-[1px] active:translate-x-[-1px]" onClick={() => set(false)}>
                    ✕
                </button>
            </div>
        </div>
    );
};

export default PopUpWindow;