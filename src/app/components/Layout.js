// components/Layout.js
"use client";
import { useEffect } from "react";
import { initGA, logPageView } from "../../utils/analytics";
import { usePathname } from "next/navigation";
import NProgress from "nprogress";
import "../nprogress.css";

const Layout = ({ children }) => {
  let pathname = usePathname();
  useEffect(() => {
    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }
    logPageView();
  }, []);

  useEffect(() => {
    const handleStart = () => NProgress.start();
    const handleStop = () => NProgress.done();
    handleStop();

    return () => {
      handleStart();
    };
  }, [pathname]);

  return <div>{children}</div>;
};

export default Layout;
