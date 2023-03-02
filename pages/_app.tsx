import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-ternary">
      <Navigation />
      <div className="font-fira-code px-[6px] sm:px-[18px] md:px-[64px] lg:px-[128px] 2xl:px-[168px] bg-ternary min-h-screen text-white">
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  );
}
