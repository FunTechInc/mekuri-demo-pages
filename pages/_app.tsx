import { Header } from "@/components/Header";
import "@/styles/globals.css";
import { Mekuri, MekuriContext, useMekuriAnimation } from "@funtech-inc/mekuri";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const MekuriAnimation = ({ children }: { children: React.ReactNode }) => {
   const ref = useRef<HTMLDivElement>(null);
   const { contextSafe } = useGSAP({ scope: ref });
   useMekuriAnimation({
      onEveryEnter: contextSafe(() => {
         gsap.to(ref.current, {
            opacity: 1,
         });
      }),
      onEveryLeave: contextSafe(() => {
         gsap.to(ref.current, {
            opacity: 0,
         });
      }),
   });
   return <div ref={ref}>{children}</div>;
};

export default function App({ Component, pageProps }: AppProps) {
   const { pathname } = useRouter();
   return (
      <>
         <MekuriContext trigger={pathname}>
            <Header />
            <MekuriAnimation>
               <Mekuri>
                  <Component key={pathname} {...pageProps} />
               </Mekuri>
            </MekuriAnimation>
         </MekuriContext>
      </>
   );
}
