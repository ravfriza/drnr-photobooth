import DrnrLogo from "@/drnr-assets/logo.png"
import PhotoboothText from "@/drnr-assets/photobooth-text.png"
import Sun from "@/drnr-assets/sun.png"
import Spark from "@/drnr-assets/spark-2.png"
import Glasses from "@/drnr-assets/glasses.png"
import Kite from "@/drnr-assets/kite.png"
import YellowMan from "@/drnr-assets/yellow-man.png"
import BlueMan from "@/drnr-assets/blue-man.png"
import PurpleMan from "@/drnr-assets/purple-man.png"
import ThreeStars from "@/drnr-assets/3-stars.png"
import Image from "next/image";
import Pencetan from "@/components/Pencetan";

export default function Home() {
  return (
    <div className="flex justify-center">
      <main className="w-full max-w-xl h-dvh border-4 border-dashed border-black relative">
        <div className="absolute left-6 top-6">
          <Image src={Sun} className="w-20 md:w-28" alt="sun"/>
        </div>
        <div className="absolute right-6 top-6">
          <Image src={Spark} className="w-12 md:w-16" alt="spark"/>
        </div>
          <div className="flex justify-center flex-col items-center mt-20 md:mt-28 gap-y-1">
          <Image src={DrnrLogo} alt="drnr-logo" className="w-32 md:w-44 h-fit" />
          <Image src={PhotoboothText} alt="photobooth-text" className="w-60 md:w-[22rem] h-fit" />
          </div>
        <div className="absolute left-10 top-52 md:top-72">
          <Image src={Glasses} className="w-20 md:w-32" alt="glasses"/>
        </div>
        <div className="absolute right-28 top-44 md:right-44 md:top-64">
          <Image src={Kite} className="w-16 md:w-20" alt="kite"/>
        </div>
        <div className="absolute right-6 top-60 md:right-10 md:top-[21.5rem]">
          <Image src={YellowMan} className="w-20 md:w-32" alt="yellow-man"/>
        </div>
        <div className="absolute left-10 top-96 md:left-12 md:top-[34rem]">
          <Image src={BlueMan} className="w-24 md:w-32" alt="blue-man"/>
        </div>
        <div className="absolute right-6 top-[31rem] md:right-10 md:top-[42rem]">
          <Image src={PurpleMan} className="w-20 md:w-[7.5rem]" alt="purple-man"/>
        </div>
       

          <div className="flex justify-center mt-[21rem] md:mt-[28rem]">
            <Pencetan/>
          </div>

          <div className="absolute bottom-14 left-1/2 -translate-x-1/2">
          <Image src={ThreeStars} className="w-28 md:w-[7.5rem]" alt="purple-man"/>
        </div>
      </main>
    </div>
  );
}
