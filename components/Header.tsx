import Link from "next/link";

export const Header = () => {
   return (
      <header>
         <Link href={"/"}>home</Link>
         <Link href={"/sample"}>sample</Link>
         <Link href={"/hoge"}>hoge</Link>
      </header>
   );
};
