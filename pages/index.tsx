import Head from "next/head";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
   return (
      <>
         <Head>
            <title>mekuri demo pages</title>
         </Head>
         <main className={inter.className}>
            <h1>home</h1>
         </main>
      </>
   );
}
