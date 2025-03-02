import Image from "next/image";
import Link from "next/link";

function PodcraftLogo (){
    return(
        <Link
        key="logo"
        href="/"
        className="flex cursor-pointer items-center gap-1 pb-10 max-lg:justify-center lg:pl-8"
      >
        <Image src="/logo.png" width={40} height={40} alt="logo" />
        <h1 className="text-24 font-extrabold text-white max-lg:hidden">
          Podcraft
        </h1>
      </Link>
    )

}


export default PodcraftLogo