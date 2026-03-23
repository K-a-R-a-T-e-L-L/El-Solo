import { Dispatch, SetStateAction } from "react";
import style from "./styles.module.css";

interface PopUpWindowProps {
  color?: string;
  children: React.ReactNode;
  set: Dispatch<SetStateAction<boolean>>;
}

const PopUpWindow: React.FC<PopUpWindowProps> = ({ color, children, set }) => {
  return (
    <div className={style.overlay} onClick={() => set(false)}>
      <div
        className={style.panel}
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        style={
          color
            ? ({ ["--popup-glow" as string]: `rgba(${color}, 0.32)` } as React.CSSProperties)
            : undefined
        }
      >
        <button
          className={style.closeButton}
          onClick={() => set(false)}
          aria-label="Close popup"
          type="button"
        >
          ✕
        </button>
        <div className={style.content}>{children}</div>
      </div>
    </div>
  );
};

export default PopUpWindow;
