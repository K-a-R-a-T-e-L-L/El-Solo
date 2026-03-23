'use client';
import Footer from "../Footer";
import Header from "../Header";
import Main from "../Main";
import { I18nType } from "@/types/i18n";
import { ReactNode } from "react";

interface LayoutProps {
  t: I18nType;
  children?: ReactNode;
}

const Layout = ({ t, children }: LayoutProps) => {
  return (
    <div className="flex flex-col justify-center w-screen min-h-full max-w-[1344px] relative layout no_js">
      <Header t={t} />
      {children ?? <Main t={t} />}
      <Footer t={t} />
    </div>
  );
};

export default Layout;
